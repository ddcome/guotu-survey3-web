<template>
    <BoxContainer class="area-setting">
        <template slot="title">行政区设置</template>
        <template slot="content">
            <AreaTree
                    :isHasAreaTreeLetter="false"
                    :currentPosition="currentPosition"
                    :data="regionTreeList"></AreaTree>
        </template>
    </BoxContainer>
</template>

<script>
import BoxContainer from './../BoxContainer/index';
import AreaTree from './../AreaList/components/AreaTree/index';
import SettingsService from '@guotu-survey3-web/service/settings.service';
export default {
    components: {BoxContainer, AreaTree},
    data () {
        return {
            // 行政区树
            regionTreeList: [],
            currentPosition: ''
        };
    },
    created () {
        //  查询行政区数据.
        SettingsService.queryRegionData(this);
    }
};
</script>

<style lang="less" scoped>
</style>
