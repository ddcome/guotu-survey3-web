<template>
    <el-row :gutter="24" class="pagination">
        <el-col :span="6">
            <div class="every-pages">
                <span>每页显示</span>
                <el-select
                        class="every-pages-select"
                        v-model="everyPages"
                        placeholder="请选择"
                        size="mini"
                        :disabled="everyPageInputDisabled"
                >
                    <el-option v-for="item in everyPagesList" :key="item" :value="item">
                    </el-option>
                </el-select>
                <span>条信息</span>
            </div>
        </el-col>
        <el-col :span="18">
            <el-pagination
                    class="pagination-number"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="everyPages"
                    :prev-text="'上一页'"
                    :next-text="'下一页'"
                    layout="total, prev, pager, next, jumper"
                    :total="total"
            >
            </el-pagination>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            default: 100
        },
        everyPageInputDisabled: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            currentPage: 1,
            everyPages: 10,
            everyPagesList: [5, 10, 15, 20, 25, 30]
        };
    },
    watch: {
        everyPages (val) {
            this.$emit('everyPagesChange', val);
        }
    },
    methods: {
        handleSizeChange (val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange (val) {
            this.$emit('pageNumberClickEmitter', val);
        }
    }
};
</script>

<style lang="less" scoped>
    /*页码*/
    .pagination {
        line-height: 28px;
        margin-top: 20px;
        .el-col {
            .every-pages {
                float: left;
                margin-bottom: 30px;
                .every-pages-select {
                    width: 75px;
                }
            }
            .pagination-number {
                float: right;
            }
            /deep/ .el-pagination {
                padding: 0;
                .btn-next {
                    margin-right: 0;
                    padding-right: 0;
                }
            }
        }
    }
</style>
