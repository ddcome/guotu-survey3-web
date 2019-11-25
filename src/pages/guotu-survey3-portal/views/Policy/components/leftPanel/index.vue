<template>
    <div class="left-panel">
        <el-card class="public-clear-card-default">
            <h2>政策法规</h2>
            <hr class="hr-color-height public-background-color-dark"/>
            <el-menu
                    active-text-color="#fff"
                    :default-active="defaultIndex"
                    @select="handleSelectPolicy"
            >
                <el-menu-item
                        v-for="item in policyFolderList"
                        :key="item.id"
                        :index="item.id">
                    <h3>{{item.name}}</h3>
                </el-menu-item>
            </el-menu>
        </el-card>
    </div>
</template>

<script>
import Bus from '@guotu-survey3-portal/assets/Bus.js';

export default {
    props: {
        policyFolderList: {
            type: Array,
            default: function () {
                return [];
            }
        },
        defaultIndex: {
            type: String,
            default: ''
        }
    },
    data () {
        return {};
    },
    methods: {
        handleSelectPolicy (index) {
            Bus.$emit('sendIndex', index);
        }
    }
};
</script>

<style lang="less" scoped>
    .left-panel {
        .el-card {
            h2, h3 {
                font-weight: 700;
            }
            .hr-color-height {
                border: none;
                margin-top: 10px;
                height: 7px;
            }
            .el-menu {
                .el-menu-item.is-active {
                    background-color: #E74C3C !important;
                }
            }
        }
    }
</style>
