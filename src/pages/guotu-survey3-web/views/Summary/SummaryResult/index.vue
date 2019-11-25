<template>
    <el-container class="summary-result public-click-enabled">
        <el-main class="summary-result-main">
            <el-container>
                <el-header height="50px" class="public-align-left">
          <span class="summary-result-title"
          >地类动态变化
            <i class="iconfont" @click="freshClick">&#xe653;</i>
          </span>
                </el-header>
                <el-main class="chart-main">
                    <el-row :gutter="24" class="middle-row">
                        <el-col
                                :xs="24"
                                :sm="24"
                                :md="24"
                                :lg="12"
                                :xl="12"
                                class="chart-col"
                        >
                            <!--折线图-->
                            <SummaryLine
                                    ref="summaryLineRef"
                                    @summaryLineInit="summaryLineInitHandle"
                            />
                            <!--饼图-->
                            <PieChart
                                    :lands="landsArr"
                                    :lineResponseData="lineResponseData"
                                    ref="pieChartRef"
                                    @landChange="landChangeHandle"
                            />
                        </el-col>
                        <el-col
                                :xs="24"
                                :sm="24"
                                :md="24"
                                :lg="12"
                                :xl="12"
                                class="map-col-row"
                        >
                            <!--webgis组件-->
                            <WebGisContainer
                                    ref="webGisContainerRef"
                                    :code="$store.state.summary.param.region.code"
                                    :location="$store.state.summary.param.region.name"
                                    :year="$store.state.summary.param.year"
                                    :landCategory="landCategoryCode"
                                    @currentYearChange="currentYearChangeHandle"
                            />
                        </el-col>
                    </el-row>
                    <el-row class="area-list-footer">
                        <el-col>
                            <!--辖区-->
                            <AllAreaList @areaClick="areaClickHandler"/>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-main>
        <!--报表预览组件-->
        <ExcelPreview class="preview" ref="excelPreviewRef"/>
    </el-container>
</template>

<script>
import PieChart from './../common/PieChart/index';
import SummaryLine from './../common/SummaryLine/index';
import AllAreaList from './../common/AllAreaList/index';
import WebGisContainer from './../common/WebGisContainer/index';
import ExcelPreview from './../common/ExcelPreview/index';

/**
 * result面板的入口文件
 */
export default {
    components: {
        WebGisContainer,
        AllAreaList,
        PieChart,
        SummaryLine,
        ExcelPreview
    },
    inject: ['reloadSummaryResult'],
    data () {
        return {
            landCategoryCode: '某地类',
            previewVisible: false,
            landsArr: [],
            lineResponseData: []
        };
    },
    methods: {
        freshClick () {
            this.reloadSummaryResult();
        },
        conditionChangedHandle () {
            // 再次查询
            this.$refs.summaryLineRef.initLandCategoryList();
            this.$refs.summaryLineRef.queryLineChartData();
            this.$refs.pieChartRef.listenTimeLineChange();
        },
        areaClickHandler () {
            this.conditionChangedHandle();
        },
        currentYearChangeHandle (val) {
            this.conditionChangedHandle();
        },
        landCategoryChangeHandle (args) {
            this.lineResponseData = args[1];
            this.landsArr = args[0];
        },
        // 事件监听
        addEventListen () {
            const self = this;
            // 汇总分析点击事件监听
            self.$Bus.listenEvent(self.$Bus.BusConfig.SUMMARY.ANALYSIS_BTN, function () {
                self.conditionChangedHandle();
            });
            self.$Bus.listenEvent(self.$Bus.BusConfig.SUMMARY.PREVIEW_BTN, function () {
                self.$refs.excelPreviewRef.previewVisible = true;
                self.$refs.excelPreviewRef.init();
            });
        },
        landChangeHandle (res) {
            // 将变化传递到webgis组件中
            this.$refs.webGisContainerRef.renderDL(res);
        },
        summaryLineInitHandle (param) {
            this.$refs.pieChartRef.init(param);
        }
    },
    mounted () {
        this.addEventListen();
    }
};
</script>

<style lang="less" scoped>
    @deep: ~">>>";
    .el-card {
        margin: 12px 0;
    }

    .summary-result {
        position: relative;
        height: @gHeight;
        background-color: #ffffff;
        .preview {
            position: absolute;
        }
        .summary-result-main {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 70;
            .el-container {
                height: 100%;
                .el-header {
                    .summary-result-title {
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
                    .middle-row {
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                    }
                    .middle-row {
                        .chart-col {
                            .chart-title {
                                width: 100%;
                                height: 40px;
                                margin-bottom: 10px;
                                .chart-title-common {
                                    height: 40px;
                                    line-height: 40px;
                                }
                                span {
                                    float: left;
                                }
                                .el-select {
                                    float: right;
                                }
                            }
                        }
                        .map-col-row {
                            height: 676px;
                            padding-left: 0 !important;
                            padding-right: 10px !important;
                            @media screen and (max-width: 1200px) {
                                padding-top: 0 !important;
                                padding-left: 12px !important;
                                padding-right: 12px !important;
                                padding-bottom: 20px !important;
                                height: 500px;
                            }
                        }
                    }
                }
                .area-list-footer {
                    padding: 0 12px;
                }
            }
        }
    }
</style>
