<template>
    <el-card class="box-card">
        <div class="chart-title">
            <span class="chart-title-common">
                <span>{{$store.state.summary.param.year}}年</span><span class="public-font-color-blue">{{$store.state.summary.param.region.name}}</span>{{land}}占比情况
            </span>
        </div>
        <ve-pie
                ref="vePieRef"
                v-if="pieChartData && pieChartData.rows.length > 0"
                key="pieChart"
                :data="pieChartData"
                :extend="pieChartExtend"
                :settings="pieChartSettings"
                :height="pieChartHeight"
                legend-position="right"
                :loading="false"
                :events="pieChartEvents"
        ></ve-pie>
        <NoData v-else :height="'240px'"/>
    </el-card>
</template>

<script>
import NoData from './../NoData/index';
import SummaryResultService from '@guotu-survey3-web/service/summary-result.service';
import {CommonFunctionUtil, EchartColorUtil} from '@guotu-survey3-web/utils/index';

export default {
    components: {NoData},
    props: {
        lineResponseData: {
            type: Array,
            default: function () {
                return [];
            }
        },
        lands: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    data () {
        this.pieChartEvents = {
            click: function (e) {
            }
        };
        return {
            land: '',
            colors: [],
            // 饼图数据
            pieChartData: {
                columns: ['name', 'total'],
                rows: []
            },
            pieChartSettings: {
                limitShowNum: 20,
                radius: 80,
                offsetY: '50%',
                center: ['20%', '60%'],
                selectedMode: 'single'
            },
            pieChartHeight: '240px',
            pieChartExtend: {
                series (v) {
                    v[0].color = EchartColorUtil.slice(0, v[0].data.length);
                    v[0].center = ['35%', '50%'];
                    v[0].startAngle = 270;
                    v[0].selectedMode = true;
                    v[0].label = {
                        formatter: '{b}:({c})'
                    };
                    return v;
                },
                legend: {
                    type: 'scroll'
                }
            }
        };
    },
    methods: {
        // 重置饼图数据
        resetPieChartData () {
            this.pieChartData = null;
        },
        setPieChartDataLevel (data) {
            this.pieChartSettings.level = data;
        },
        // 设置饼图数据
        setPieChartData (data) {
            let temp = {
                columns: ['name', 'total'],
                rows: data
            };
            this.pieChartData = temp;
        },
        changePieData (lands) {
            SummaryResultService.queryPieChartData(this.lineResponseData, this.$store.state.summary.param.year, lands, this);
        },
        findLandDetail (val) {
            let res = [];
            for (let index in val.data.data) {
                if (val.data.data[index]['year'] === val.year) {
                    res = this.findLandDetailDeep(val.data.data[index]['childrens'], val.land);
                    return res;
                }
            }
            return res;
        },
        findLandDetailDeep (data, obj) {
            for (let index in data) {
                if (data[index].hasOwnProperty('name') && data[index].hasOwnProperty('code') && data[index]['name'] === obj.name && data[index]['code'] === obj.code) {
                    if (data[index].hasOwnProperty('childrens') && data[index]['childrens'].length > 0) {
                        // 渲染子集数据
                        let temp1 = JSON.stringify(data[index]['childrens']);
                        return JSON.parse(temp1);
                    } else {
                        // 没有子集，则显示该数据
                        let temp2 = JSON.stringify(data[index]);
                        return [JSON.parse(temp2)];
                    }
                } else if (data[index].hasOwnProperty('childrens') && data[index]['childrens'].length > 0) {
                    let temp = this.findLandDetailDeep(data[index]['childrens'], obj);
                    if (temp) {
                        return temp;
                    }
                }
            }
        },
        listenTimeLineChange () {
            const $this = this;
            this.$Bus.listenEvent(this.$Bus.BusConfig.SUMMARY.TIMELINE, function (val) {
                $this.land = val.land.name;
                let res = $this.findLandDetail(val);
                $this.setPieChartData(res);
                // 抛出事件
                $this.$emit('landChange', {
                    data: CommonFunctionUtil.deepCopy(res),
                    colors: EchartColorUtil.slice(0, res.length),
                    currentLand: $this.land
                });
            });
        },
        init (param) {
            const $this = this;
            $this.land = param.land.name;
            let res = $this.findLandDetail(param);
            $this.setPieChartData(res);
            // 抛出事件
            $this.$emit('landChange', {
                data: CommonFunctionUtil.deepCopy(res),
                colors: EchartColorUtil.slice(0, res.length)
            });
        }
    },
    mounted () {
        this.listenTimeLineChange();
    }
};
</script>

<style lang="less" scoped>
    .box-card {
        .chart-title {
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            .chart-title-common {
                height: 40px;
                line-height: 40px;
                float: left;
            }
            .el-select {
                float: right;
            }
        }
    }
</style>
