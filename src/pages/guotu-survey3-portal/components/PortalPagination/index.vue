<template>
    <el-row :gutter="24" class="pagination">
        <el-col :span="6" v-if="hasEveryPages">
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
        <el-col :span="18" :offset="hasEveryPages?0:6">
            <el-pagination
                    class="pagination-number"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="everyPages"
                    :prev-text="'上一页'"
                    :next-text="'下一页'"
                    :layout="layout"
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
        },
        hasEveryPages: {
            type: Boolean,
            default: false
        },
        layout: {
            type: String,
            default: 'total, prev, pager, next, jumper'
        }
    },
    data () {
        return {
            currentPage: 1,
            everyPages: 6,
            everyPagesList: [5, 6, 10, 15, 20, 25, 30]
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
        margin: 20px 0 !important;
        .el-col {
          padding-right: 0px!important;
            .every-pages {
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
                .el-pager {
                    .number {
                        padding: 0px;
                        margin: 0px 3px;
                        border: 1px solid #ccc;
                        color: rgb(42, 87, 169);
                    }
                    .number:hover {
                        padding: 0px;
                        margin: 0px 3px;
                        border: 1px solid rgb(42, 87, 169);
                        background-color: rgb(42, 87, 169);
                        color: #ffffff;
                    }
                    .active {
                        padding: 0px;
                        margin: 0px 3px;
                        border: 1px solid rgb(42, 87, 169);
                        background-color: rgb(42, 87, 169);
                        color: #ffffff;
                    }
                }
                .btn-next, .btn-prev {
                    margin-right: 0;
                    padding: 0px 5px 0px 5px;
                    border: 1px solid #ccc;
                    color: rgb(42, 87, 169);
                }
                .btn-next:hover, .btn-prev:hover {
                    margin-right: 0;
                    padding: 0px 5px 0px 5px;
                    border: 1px solid rgb(42, 87, 169);
                    background-color: rgb(42, 87, 169);
                    color: #ffffff;
                    span {
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
