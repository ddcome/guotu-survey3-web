<template>
    <div class="space-left-panel">
        <AnalysisTypeOption/>
        <AnalysisWayOption/>
        <BufferSetting/>
        <div class='form-btn'>
            <el-button size='mini' type='primary' @clik.stop="analysisClick">分析</el-button>
        </div>
    </div>
</template>

<script>
import AnalysisTypeOption from './../common/AnalysisTypeOption/index';
import AnalysisWayOption from './../common/AnalysisWayOption/index';
import BufferSetting from './../common/BufferSetting/index';

export default {
    components: {BufferSetting, AnalysisWayOption, AnalysisTypeOption},
    data () {
        return {};
    },
    methods: {
        analysisClick () {

        }
    }
};
</script>

<style lang="less" scoped>
</style>
