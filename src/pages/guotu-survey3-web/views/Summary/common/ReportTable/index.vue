<template>
    <BoxContainer class="report-table">
        <template slot="title">报表类型</template>
        <template slot="content">
            <el-radio-group class='table-name-list' v-model='$store.state.summary.param.reportTable.name'
                            @change="currentReportTableChange">
                <el-radio class="report-excel-radio"
                          v-for='item in reportTableNameList'
                          :key='item.id'
                          :label='item.cname'
                          :title="item.cname"
                >
                </el-radio>
            </el-radio-group>
        </template>
    </BoxContainer>
</template>

<script>
import BoxContainer from '@guotu-survey3-web/views/common/BoxContainer/index';
import ReportTableService from '@guotu-survey3-web/service/report-table.service';

export default {
    components: {BoxContainer},
    data () {
        return {
            // 报表数据
            reportTableNameList: []
        };
    },
    methods: {
        // change事件
        currentReportTableChange (val) {
            const $this = this;
            const temp = this.reportTableNameList.find(function (currentValue, index, arr) {
                if (currentValue.cname === val) {
                    return true;
                }
            });
            if (temp) {
                $this.$store.dispatch('setReportTableCode', temp.ename);
            } else {
                $this.$store.dispatch('setReportTableCode', null);
            }
            // 向组件外抛出事件
            $this.$emit('currentReportTableChange');
        },
        // set
        setReportTableNameList (val) {
            this.reportTableNameList = val;
        },
        // 初始化
        initCurrentReportTable () {
            try {
                // this.$store.dispatch('setReportTableName', this.reportTableNameList[0].cname);
                // this.$store.dispatch('setReportTableCode', this.reportTableNameList[0].ename);
            } catch (err) {
                console.log('err', err);
            }
        }
    },
    created () {
        // 查询报表数据
        ReportTableService.queryReportTableNameList(this);
    },
    beforeDestroy () {
        this.$off('currentReportTableChange');
    }
};
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .report-table {
        .el-radio-group {
            width: 100%;
            max-height: 300px;
            overflow: auto;
            font-size: 12px;
            text-align: left;
            @{deep} .el-radio {
                margin-right: 0;
                font-weight: normal;
                display: block;
                height: 22px;
                line-height: 22px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>
