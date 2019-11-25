<template>
    <el-container class="watch-result public-click-enabled">
        <el-main class="watch-result-main">
            <el-container>
                <el-header height="50px" class="public-align-left">
          <span class="watch-result-title"
          >标题
          </span>
                </el-header>
                <el-main class="chart-main">
                    <router-view/>
                </el-main>
            </el-container>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data () {
        return {};
    },
    methods: {
    }
};
</script>

<style lang="less" scoped>
    @deep: ~">>>";
    .el-card {
        margin: 12px 0;
    }

    .watch-result {
        position: relative;
        height: @gHeight;
        background-color: #ffffff;
        .preview {
            position: absolute;
        }
        .watch-result-main {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 70;
            .el-container {
                height: 100%;
                .el-header {
                    .watch-result-title {
                        display: block;
                        font-weight: bolder;
                        height: 49px;
                        line-height: 49px;
                        padding-left: 10px;
                        border-bottom: 1px solid #efefef;
                        .iconfont {
                            cursor: pointer;
                        }
                        .iconfont:hover {
                            color: #66b1ff;
                        }
                    }
                }
                .chart-main {
                    width: 100%;
                }
                .area-list-footer {
                    padding: 0 12px;
                }
            }
        }
    }
</style>
