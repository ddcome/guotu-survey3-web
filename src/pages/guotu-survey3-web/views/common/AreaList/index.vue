<template>
    <PopupPanel class="area-list" ref="popupPanelComponent"
                :leftStyle="'500px'"
                :topStyle="'70px'"
                :rightStyle="''"
                :hasFooter="false"
                :widthStyle="'300px'"
                :contentHeightStyle="'auto'">
        <template slot="title">行政区列表</template>
        <template slot="content">
            <AreaTree
                    :isHasAreaTreeLetter="false"
                    :currentPosition="currentPosition"
                    :data="areaTreeList"
                    @changePositionEvent="changePositionClick"
            ></AreaTree>
        </template>
    </PopupPanel>
</template>

<script>
import PopupPanel from './components/PopupPanel/index';
import AreaTree from './components/AreaTree/index';
import AreaListService from '@guotu-survey3-web/service/greatmap/area-list.service';

export default {
    components: {
        PopupPanel,
        AreaTree
    },
    data () {
        return {
            popupPanelFlag: false,
            currentPosition: '',
            areaTreeList: []
        };
    },
    methods: {
        showPopupPanel () {
            this.$refs.popupPanelComponent.show();
        },
        hidePopupPanel () {
            this.$refs.popupPanelComponent.hide();
        },
        changePositionClick (position) {
            console.log('changePositionClick', position);
        }
    },
    created () {
        AreaListService.queryRegionData(this);
    }
};
</script>

<style lang="less" scoped>
    .area-list {
        .el-table {
            width: 100%;
        }
    }
</style>
