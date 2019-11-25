<template>
    <el-card class="box-card" ref="boxCardRef">
        <div class="chart-title">
            <span
                    class="chart-title-common word"
                    :style="{width: titleWidth}"
                    :title="$store.state.summary.param.startYear+'-'+$store.state.summary.param.endYear+$store.state.summary.param.region.name+(currentLandCategory?currentLandCategory+'下子地类':'下一级地类')+'数量增减变化趋势图'"
            >
                <span>{{$store.state.summary.param.startYear}}-{{$store.state.summary.param.endYear}}</span><span
                    class="public-font-color-blue">{{$store.state.summary.param.region.name}}</span>{{currentLandCategory?currentLandCategory+'下子地类':'下一级地类'}}数量增减变化趋势图
            </span>
            <el-tooltip effect="dark" content="默认展示该区下一级地类，选择后展示所选地类下的所有子地类趋势图"
                        placement="top">
                <el-cascader
                        ref="elCascaderRef"
                        class="chart-title-common el-cascader-instance"
                        size="mini"
                        v-model="currentLandCategory"
                        :options="landCategoryList"
                        :props="landCategoryListProps"
                        placeholder="默认所有"
                        clearable
                        @change="landCategoryChange">
                    <template slot-scope="{ node, data }">
                        <span>{{ node.label }}</span>
                        <!--<span v-if="!node.isLeaf"> ({{ node.children.length }}) </span>-->
                    </template>
                </el-cascader>
            </el-tooltip>
        </div>
        <!--折线图-->
        <div id="SummaryLine" class="summary-line"></div>
    </el-card>
</template>

<script>
import {options, init, beforeInit} from './option';
import SummaryResultService from '@guotu-survey3-web/service/summary-result.service';

export default {
    data () {
        return {
            echarts: null,
            // 折线图标题
            titleWidth: '350px',
            responseDataTemp: [],
            timelineDataTemp: [],
            currentYear: '',
            // 选中的地类中文名
            currentLandCategory: null,
            // 所有地类数据
            landCategoryList: [],
            // 配置项
            landCategoryListProps: {
                label: 'name',
                value: 'id',
                children: 'childrens',
                checkStrictly: true
            }
        };
    },
    methods: {
        setCurrentYear (val) {
            this.currentYear = val;
            this.$store.dispatch('setYear', val);
        },
        cacheResponseDataTemp (data) {
            let copy = JSON.stringify(data);
            this.responseDataTemp = JSON.parse(copy);
        },
        cacheTimelineDataTemp (data) {
            this.timelineDataTemp = data;
            this.init();
        },
        renderLineEchart (xAxisData, timelineData, seriesData) {
            this.setCurrentYear(xAxisData[0]);
            beforeInit(xAxisData, timelineData, seriesData);
            this.echarts = this.$echart.instance('SummaryLine', options);
            init(this.echarts, this);
        },
        // 设置地类list
        setLandCategoryList (data) {
            let copy = JSON.stringify(data);
            this.landCategoryList = JSON.parse(copy);
        },
        // 初始化所有地类
        initLandCategoryList () {
            SummaryResultService.queryLandCategoryList(this.$store.getters.getParamSameAsServer, this);
        },
        // 从list中查询所要数据
        findLandCategory (data, value) {
            for (let index in data) {
                if (data[index]['id'] === value) {
                    return data[index];
                }
                if (data[index].hasOwnProperty('childrens') && data[index]['childrens'].length > 0) {
                    let res = this.findLandCategory(data[index]['childrens'], value);
                    if (res) {
                        return res;
                    }
                }
            }
        },
        // 所选地类发生变化触发
        landCategoryChange (value) {
            if (value === null || typeof value === 'undefined' || value.length === 0) {
                SummaryResultService.queryLineChartDataByCache(this.responseDataTemp, this, null);
            } else {
                let obj = this.findLandCategory(this.landCategoryList, value[value.length - 1]);
                SummaryResultService.queryLineChartDataByCache(this.responseDataTemp, this, obj);
            }
        },
        // 标题宽度优化
        resizeTitleWidth () {
            // 50是box-card的padding
            this.titleWidth = (this.$refs.boxCardRef.$el.clientWidth - this.$refs.elCascaderRef.$el.clientWidth - 50) + 'px';
        },
        queryLineChartData () {
            SummaryResultService.queryLineChartData(this.$store.getters.getParamSameAsServer, this);
        },
        findTimelineDataTemp (data, value) {
            for (let index in data) {
                if (data[index]['name'] === value) {
                    return data[index];
                }
            }
            return null;
        },
        timeLineChangeEvent (value) {
            const $this = this;
            $this.$store.dispatch('setYear', $this.currentYear);
            this.$Bus.registerEvent(this.$Bus.BusConfig.SUMMARY.TIMELINE, {
                land: $this.findTimelineDataTemp($this.timelineDataTemp, value),
                year: $this.currentYear,
                data: $this.responseDataTemp
            });
        },
        init () {
            const $this = this;
            let param = {
                land: $this.findTimelineDataTemp($this.timelineDataTemp, $this.timelineDataTemp[0].name),
                year: $this.currentYear,
                data: $this.responseDataTemp
            };
            $this.$emit('summaryLineInit', param);
        }
    },
    created () {
        // 初始化地类select
        this.initLandCategoryList();
    },
    mounted () {
        this.queryLineChartData();
        // 设置标题宽度，为超出文本隐藏服务
        this.resizeTitleWidth();
    },
    beforeDestroy () {
        this.echarts.off('click');
        this.echarts.off('timelinechanged');
        this.$Bus.clearEvent(this.$Bus.BusConfig.SUMMARY.TIMELINE);
    }
};
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .box-card {
        overflow: unset;
        .chart-title {
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            .chart-title-common {
                height: 40px;
                line-height: 40px;
                float: left;
            }
            .word {
                width: 350px;
                overflow: hidden;
                text-align: left;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .el-cascader {
                float: right;
            }
        }
        .summary-line {
            width: 100%;
            height: 240px;
        }
    }
</style>
