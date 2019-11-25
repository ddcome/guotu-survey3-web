<template>
    <el-card class="catalog-card">
        <div slot="header">
            <span class="public-tabs-font-size">{{title}}</span>
            <el-button class="catalog-card-close" type="text"><i class="el-icon-close"></i></el-button>
        </div>
        <div>
            <el-tree
              class="public-li-font-size"
                    :data="data"
                    :props="defaultProps"
                    accordion
                    @node-click="handleNodeClick">
            </el-tree>
        </div>
    </el-card>
</template>

<script>
export default {
    data () {
        return {
            defaultProps: {
                children: 'children',
                label: 'title'
            }
        };
    },
    props: {
        data: Array,
        title: {
            type: String,
            default: 'demo'
        }
    },
    methods: {
        handleNodeClick (data) {

        }
    }
};
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .catalog-card {
        margin-bottom: 30px;
        font-size: 14px;
        @{deep} .el-card__header {
            padding: 10px 20px;
            background-color: rgb(42, 87, 169);
            color: #ffffff;
        }
        .catalog-card-close {
            float: right;
            padding: 3px 0;
            color: #ffffff;
        }
        .catalog-item {
            .child-item {
                float: right;
            }
        }
    }
</style>
