<template>
  <el-row class="echart-demo">
    <el-row>
      <el-col :span="20">
        <div class="title">统计一览表概况</div>
      </el-col>
      <el-col :span="4">
        <el-select
          v-model="value"
          placeholder="请选择"
          size="large"
          @change="selectTrigger(value)"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div
          :class="chartClass"
          :id="chartId"
          :style="{ height: chartHeight, width: chartWidth }"
          ref="chartEchart1"
        ></div>
      </el-col>
      <el-col :span="18">
        <div
          :class="tableClass"
          :id="tableId"
          :style="{ height: tableHeight, width: tableWidth }"
          ref="tableEchart"
        ></div>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
import echarts from 'echarts';
export default {
    props: {
        tableClass: {
            type: String,
            default: 'inner-table'
        },
        tableId: {
            type: String,
            default: 'yourID'
        },
        tableWidth: {
            type: String,
            default: '100%'
        },
        tableHeight: {
            type: String,
            default: '230px'
        },
        chartClass: {
            type: String,
            default: 'inner-chart'
        },
        chartId: {
            type: String,
            default: 'yourID1'
        },
        chartWidth: {
            type: String,
            default: '100%'
        },
        chartHeight: {
            type: String,
            default: '230px'
        }
    },
    methods: {
        resizeEchart: function (chart) {
            chart.resize();
        },
        resizeListener: function (chart) {
            const $this = this;
            window.addEventListener('resize', function () {
                $this.resizeEchart(chart);
            });
        },
        // 初始化折线图
        initChart () {
            var mychart = echarts.init(this.$refs.tableEchart);
            var option = {
                title: {
                    text: '总面积统计',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    y: 'center',
                    data: this.tableEchartlegendData // 需要变化
                },
                calculable: true,
                xAxis: [
                    {
                        name: '类型',
                        type: 'category',
                        boundaryGap: false,
                        data: [
                            '农用耕地',
                            '商用耕地',
                            '果园',
                            '湿地',
                            '河流',
                            '荒地',
                            '宅基地',
                            '沙地',
                            '森林',
                            '大地',
                            '已使用耕地'
                        ]
                    }
                ],
                yAxis: [
                    {
                        name: '数量/单位（公顷）',
                        type: 'value'
                    }
                ],
                series: this.tableEchartseries
            };
            mychart.setOption(option);
        },
        // 初始化环形图
        initChart1 () {
            var chart1 = echarts.init(this.$refs.chartEchart1);
            var option1 = {
                title: {
                    text: this.chartEchart1TitleText,
                    subtext: this.chartEchart1TitleSubText,
                    textStyle: {
                        fontSize: '18',
                        fontWeight: 'bold'
                    },
                    subtextStyle: {
                        fontSize: '18',
                        fontWeight: 'bold',
                        align: 'center'
                    },
                    x: 'center',
                    y: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                series: [
                    {
                        name: '土地供应数量',
                        type: 'pie',
                        startAngle: 270,
                        center: ['50%', '50%'],
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '18',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: this.chartEchart1SeriesData
                    }
                ]
            };
            chart1.setOption(option1);
        },
        // 定义选择按钮触发事件
        selectTrigger: function (value) {
            if (value === 'number') {
                this.tableEchartlegendData = ['土地供应数量'];
                this.tableEchartseries = [
                    {
                        name: '土地供应数量',
                        type: 'bar',
                        stack: '总量',
                        data: [0, 0, 12, 1, 3, 6, 4, 0, 5, 1, 3, 0, 0]
                    }
                ];
                this.chartEchart1TitleText = '土地供应数量';
                this.chartEchart1TitleSubText = '20';
                this.chartEchart1SeriesData = [
                    { value: 17, name: '已使用' },
                    { value: 3, name: '未使用' }
                ];
                this.initChart();
                this.initChart1();
            } else if (value === 'area') {
                this.tableEchartlegendData = ['土地供应面积'];
                this.tableEchartseries = [
                    {
                        name: '土地供应面积',
                        type: 'bar',
                        stack: '总量',
                        data: [100, 400, 300, 50, 120, 40, 60, 210, 70, 250, 300, 0, 0]
                    }
                ];
                this.chartEchart1TitleText = '土地供应面积';
                this.chartEchart1TitleSubText = '9999';
                this.chartEchart1SeriesData = [
                    { value: 10, name: '已使用' },
                    { value: 3, name: '未使用' }
                ];
                this.initChart();
                this.initChart1();
            } else {
                console.error();
            }
        }
    },
    mounted () {
        this.initChart();
        this.initChart1();
    },
    data () {
        return {
            options: [
                { value: 'number', label: '数量' },
                { value: 'area', label: '面积' }
            ],
            value: '数量',
            // 折线图数据
            tableEchartlegendData: ['土地供应数量'],
            tableEchartseries: [
                {
                    name: '土地供应数量',
                    type: 'bar',
                    stack: '总量',
                    data: [0, 0, 12, 1, 3, 6, 4, 0, 5, 1, 3, 0, 0]
                }
            ],
            // 环形图数据
            chartEchart1TitleText: '土地供应数量',
            chartEchart1TitleSubText: '20',
            chartEchart1SeriesData: [
                { value: 17, name: '已使用' },
                { value: 3, name: '未使用' }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.echart-demo {
  width: 100%;
  height: 100%;
}
.title {
  width: 140px;
  height: 38px;
  font-size: 18px;
  font-weight: 700;
  margin: 10px 50%;
}
.header {
  font-size: 20px;
}

.inner-chart,
.inner-table {
  display: block;
}

#yourID,
#yourID1 {
  width: 100%;
  height: 100%;
}
</style>
