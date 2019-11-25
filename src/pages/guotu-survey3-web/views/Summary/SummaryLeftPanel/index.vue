<template>
    <div class="settings">
        <div class='content-box-inner'>
            <!--基本设置-->
            <CustomDefine/>
        </div>
        <div class='content-box-inner'>
            <!--报表list-->
            <ReportTable ref="reportTableRef"
                         v-on:currentReportTableChange="currentReportTableChangeHandle"
            ></ReportTable>
        </div>
        <div class='form-btn'>
            <el-button size='mini' type='primary' @click.stop='summaryBtnClick()'>分析</el-button>
            <el-tooltip effect="dark" content="预览选中的报表类型的Excel文件" placement="top">
                <el-button size='mini' type='primary' @click.stop='previewBtnClick()'>预览</el-button>
            </el-tooltip>
        </div>
    </div>
</template>

<script>
import CustomDefine from './../common/CustomDefine/index';
import ReportTable from './../common/ReportTable/index';

export default {
    components: {CustomDefine, ReportTable},
    methods: {
        // 汇总分析按钮点击事件.
        summaryBtnClick () {
            this.$Bus.registerEvent(this.$Bus.BusConfig.SUMMARY.ANALYSIS_BTN);
        },
        // 报表改变事件
        currentReportTableChangeHandle () {
            this.summaryBtnClick();
        },
        previewBtnClick () {
            this.$Bus.registerEvent(this.$Bus.BusConfig.SUMMARY.PREVIEW_BTN);
        }
    },
    beforeDestroy () {
        // 销毁事件，解决触发多次问题
        this.$Bus.clearEvent(this.$Bus.BusConfig.SUMMARY.PREVIEW_BTN, this.$Bus.BusConfig.SUMMARY.ANALYSIS_BTN);
    }
};
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .settings {
        .content-box-inner {
            .content-box-header {
                height: 35px;
                line-height: 35px;
                text-align: left;
                padding-left: 20px;
                background-color: #f6f7f8;
                border-top: 1px solid #cccccc;
                border-bottom: 1px solid #cccccc;
            }
            .content-box-footer {
                margin-bottom: 20px;
            }
        }
        .content-box-inner-extra {
            padding: 0px 0px 0 0px;
        }
        .form-btn {
            height: 50px;
        }
    }
</style>
