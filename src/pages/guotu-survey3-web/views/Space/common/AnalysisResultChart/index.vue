<template>
    <div class="analysis-result-chart">
        <h5 v-if="title" class="margin-bottom-base text-center">{{ title }}</h5>
        <transition name="fade" mode="out-in">
            <el-table
                    key="table"
                    v-if="type === 'table'"
                    :data="data"
                    :default-sort="{ prop: 'area', order: 'descending' }"
                    :height="height"
                    show-summary
                    border
                    size="mini"
            >
                <el-table-column width="60" prop="id" label="代码"></el-table-column>
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column
                        prop="area"
                        label="面积（平方米）"
                        sortable
                ></el-table-column>
            </el-table>
            <ve-pie
                    key="chart"
                    v-else-if="type === 'chart'"
                    :data="chartData"
                    :extend="chartExtend"
                    :settings="chartSettings"
                    :height="height"
            ></ve-pie>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'AnalysisResultChart',
    props: {
        height: {
            type: String,
            default: '325px'
        },
        title: String,
        data: Array,
        type: {
            validator (value) {
                return ['table', 'chart'].includes(value);
            }
        }
    },
    data () {
        return {
            chartExtend: {
                series (v) {
                    v.forEach((item) => (item.minAngle = 5));
                    return v;
                },
                legend: {
                    type: 'scroll'
                }
            },
            chartSettings: {
                limitShowNum: 10,
                radius: 90,
                offsetY: '55%'
            }
        };
    },
    computed: {
        chartData () {
            return {
                columns: ['name', 'area'],
                rows: this.data
            };
        }
    }
};
</script>

<style scoped lang="less">
</style>
