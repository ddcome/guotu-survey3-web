<template>
    <el-container class="space-result">
        <el-main>
            <!-- 分析进度 -->
            <AnalysisProcessMessage :show="showProcess" :message="processMessage"/>
        </el-main>
        <el-footer
                class="public-click-enabled"
                :height="elFooterHeight"
                id="elFooter"
        >
            <div class="bottom-panel">
                <ResultPanel
                        ref="resultPanelRef"
                        :title="currentAnalysisFactor.name"
                        v-on:tableBtnClickEmitter="tableBtnClick"
                        v-on:chartBtnClickEmitter="chartBtnClick"
                        v-on:exportBtnClickEmitter="exportBtnClick"
                        v-on:open="openClick"
                        v-on:close="closeClick"
                >
                    <template slot="content">
                        <!-- 分析结果图表 -->
                        <el-row class="bottom-panel-content-row" :gutter="10" type="flex">
                            <el-col class="bottom-panel-content-col" :span="6">
                                <ul
                                        class="programme-result-ul"
                                >
                                    <li
                                            class="programme-result-li"
                                            v-for="(item, index) in categoryData"
                                            @click="activeIndex = index"
                                            :key="index"
                                    >
                                        <el-row
                                                :gutter="10"
                                                :class="{ active: activeIndex === index }"
                                                class="programme-result-li-row"
                                        >
                                            <el-col :span="2">
                                                {{ index + 1 }}
                                            </el-col>
                                            <el-col :span="12"
                                            >
                                                {{ item.name }}
                                            </el-col>
                                            <el-col :span="10"
                                            >
                                                {{ item.area }}
                                            </el-col>
                                        </el-row>
                                    </li>
                                </ul>
                            </el-col>
                            <el-col class="bottom-panel-content-col" :span="18">
                                <h5 class="second-title">
                                    {{ currentTableTitle }}
                                </h5>
                                <el-row class="analysis-result-chart-row" :gutter="10">
                                    <el-col class="analysis-result-chart-col" :span="12">
                                        <AnalysisResultChart :data="currentTableData" type="table"/>
                                    </el-col>
                                    <el-col class="analysis-result-chart-col" :span="12">
                                        <AnalysisResultChart :data="currentTableData" type="chart"/>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </template>
                </ResultPanel>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
import AnalysisInfoChart from './../common/AnalysisInfoChart/index';
import DynamicTableHeader from '@guotu-survey3-web/views/common/DynamicTableHeader/index';
import ResultPanel from '@guotu-survey3-web/views/common/ResultPanel/index';
import BottomPanelService from '@guotu-survey3-web/service/bottom-panel.service';
import AnalysisProcessMessage from '@guotu-survey3-web/views/Space/common/AnalysisProcessMessage/index';
import AnalysisResultChart from '@guotu-survey3-web/views/Space/common/AnalysisResultChart/index';
import {mockData} from './analysis-result.data';
import {analysisFactors} from './config.data';

export default {
    components: {
        ResultPanel,
        AnalysisInfoChart,
        DynamicTableHeader,
        AnalysisProcessMessage,
        AnalysisResultChart
    },
    data () {
        return {
            // 是展示内容面板Ma, 初始化为false
            isShowContent: false,
            // 是展示table Ma
            isShowTable: true,
            // 是展示chart Ma
            isShowChart: false,
            // 是向下按钮Ma，初始化为false
            isShowUpBtn: false,
            // 报表请求参数
            queryParam: {},
            tableData: [],
            tableHeaderData: [],
            elFooterHeight: '35px',
            processMessage: '',
            showProcess: false,
            resultData: mockData,
            activeIndex: 0
        };
    },
    computed: {
        categoryData () {
            const data = [];

            // 创建分类数据
            this.resultData.forEach((item1) => {
                const [id, name, typeId, typeName, area] = [
                    item1.ZLDWDM_input,
                    item1.ZLDWMC_input,
                    item1.DLBM_input,
                    item1.DLMC_input,
                    +item1.SUM_TBDLMJ_input.toFixed(2)
                ];
                const child = {id: typeId, name: typeName, area};
                const find = data.find((item2) => item2.id === id);
                if (find) {
                    find.children.push(child);
                    find.area += area;
                } else {
                    data.push({
                        id,
                        name,
                        area,
                        children: [child]
                    });
                }
            });

            // 过滤分析因子数据
            const analysisFactor = this.currentAnalysisFactor;
            const analysisFactorFields = analysisFactor.fields;
            if (analysisFactorFields && analysisFactorFields.length) {
                data.forEach((item1) => {
                    const elseData = {
                        id: '其他',
                        name: '其他',
                        area: 0
                    };
                    const children = [elseData];
                    item1.children.forEach((item2) => {
                        if (analysisFactorFields.includes(item2.id)) {
                            children.push(item2);
                        } else {
                            elseData.area += item2.area;
                        }
                    });
                    elseData.area = +elseData.area.toFixed(2);
                    item1.children = children;
                });
            }

            // 取小数与排序
            data.forEach((item) => (item.area = item.area.toFixed(2)));
            return data.sort((a, b) => b.area - a.area);
        },
        currentData () {
            return this.categoryData[this.activeIndex];
        },
        currentTableData () {
            return this.currentData.children;
        },
        currentTableTitle () {
            return `${this.currentData.name}（${this.currentData.id}）`;
        },
        currentAnalysisFactor () {
            return analysisFactors.find((item) => item.id === 1);
        }
    },
    methods: {
        // ...组件本身的方法 start
        showTable: function () {
            this.isShowTable = true;
        },
        hideTable: function () {
            this.isShowTable = false;
        },
        showChart: function () {
            this.isShowChart = true;
        },
        hideChart: function () {
            this.isShowChart = false;
        },
        showUpBtn: function () {
            this.isShowUpBtn = true;
        },
        hideUpBtn: function () {
            this.isShowUpBtn = false;
        },
        // 打开对应的面板
        openContentHandler: function () {
            if (this.isShowTable) {
                // 先关闭
                this.hideChart();
                // 后展开
                this.showTable();
            } else {
                // 先关闭
                this.hideTable();
                // 后展开
                this.showChart();
            }
        },
        // 收起/展开切换按钮点击事件
        upBtnClick: function (needOpenFlag) {

        },
        // ...组件本身的方法 end
        setElFooterHeight: function (val) {
            this.elFooterHeight = val;
        },
        tableBtnClick () {
            // 先关闭
            this.hideChart();
            // 后展开
            this.showTable();
        },
        chartBtnClick () {
            // 先关闭
            this.hideTable();
            // 后展开
            this.showChart();
        },
        exportBtnClick () {
            console.log('exportBtnClick');
        },
        openClick (isShowContent) {
            this.$refs.resultPanelRef.isShowContent = true;
            this.doubleArrowBtnClickHandle(true);
        },
        closeClick () {
            this.doubleArrowBtnClickHandle(false);
        },
        doubleArrowBtnClickHandle (isShowUpBtn) {
            if (isShowUpBtn) {
                this.setElFooterHeight('410px');
            } else {
                this.setElFooterHeight('35px');
            }
        },
        checkGreatMapIsReady () {
            const $this = this;
            console.log('this.$store.state.greatMap.mapObj', this.$store.state.greatMap.mapObj);
            if (this.$store.state.greatMap.mapObj && this.$store.state.greatMap.mapObj.hasOwnProperty('modules') && this.$store.state.greatMap.mapObj.modules.hasOwnProperty('bufferAnalysis')) {
                this.$store.state.greatMap.mapObj.modules.bufferAnalysis.on('start', function () {
                    console.log('start');
                    $this.showProcess = true;
                });
                this.$store.state.greatMap.mapObj.modules.bufferAnalysis.on('next', function (msg) {
                    console.log('next > ', msg);
                    $this.processMessage = $this.formatterProcessMsg(msg);
                });
                this.$store.state.greatMap.mapObj.modules.bufferAnalysis.on('end', function (state, data, message) {
                    console.log('end res', data);
                    $this.showProcess = true;
                });
            }
        },
        // 格式化返回的分析进度信息
        formatterProcessMsg (msg) {
            msg = msg.description;
            try {
                msg = JSON.parse(msg).message;
            } catch (e) {
                console.log(e);
            }
            return msg;
        },
        // Bus事件注册方法.
        registerBusEvent: function () {
            const $this = this;
            this.$Bus.listenEvent(this.$Bus.BusConfig.SPACE.ANALYSIS_BTN, function (params) {
                BottomPanelService.queryTableData($this, params);
            });
            this.$Bus.listenEvent(this.$Bus.BusConfig.COMMON.GREATMAP_READYED, function (params) {
                $this.checkGreatMapIsReady();
            });
        }

    },
    mounted () {
        this.registerBusEvent();
        // this.checkGreatMapIsReady();
    }
};
</script>

<style lang="less" scoped>
    .space-result {
        height: @gHeight;
        .el-main {
            height: @gHeight;
        }
    }

    .bottom-panel {
        height: 100%;
        .bottom-panel-content-row {
            height: 100%;
            margin-left: 0px !important;
            margin-right: 0px !important;
            .bottom-panel-content-col {
                height: 100%;
                .programme-result-ul {
                    font-size: 12px;
                    height: 100%;
                    overflow-y: auto;
                    overflow-x: hidden;
                    .programme-result-li {
                        height: 36px;
                        border-bottom: 1px solid #EBEEF5;
                        cursor: pointer;
                        .programme-result-li-row {
                            height: 35px;
                            line-height: 35px;
                            padding-left: 10px;
                        }
                        .programme-result-li-row.active {
                            color: #409EFF;
                        }
                    }
                }
                .second-title {
                    margin: 15px 0px;
                    height: 12px;
                    font-weight: bolder;
                    color: #409EFF;
                }
                .analysis-result-chart-row {
                    height: calc(100% - 47px);
                    .analysis-result-chart-col {
                        height: 100%;
                    }
                }
            }
        }
    }
</style>
