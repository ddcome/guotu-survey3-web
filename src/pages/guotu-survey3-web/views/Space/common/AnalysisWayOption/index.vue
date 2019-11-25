<template>
    <BoxContainer class="select-analysis">
        <template slot="title">选择分析方式</template>
        <template slot="content">
            <div class="div-btn">
                <WordCard icon="&#xe611;" word="自定义范围" height="80px" :wordCardClick="wordCardClickHandle"/>
                <WordCard icon="&#xe630;" word="范围线导入" height="80px" :wordCardClick="wordCardClickHandle"/>
                <WordCard icon="&#xe62f;" word="范围线提取" height="80px" :wordCardClick="wordCardClickHandle"/>
            </div>
        </template>
    </BoxContainer>
</template>

<script>
import WordCard from '@guotu-survey3-web/views/common/WordCard/index';
import BoxContainer from '@guotu-survey3-web/views/common/BoxContainer/index';

export default {
    components: {BoxContainer, WordCard},
    data () {
        return {};
    },
    methods: {
        customRangeClick () {
            // test
            // const $this = this;
            // const obj = $this.$store.state.greatMap.mapObj.interactions.boxSelection;
            // obj.toggleActive(true);
            // obj.on('end', function () {
            //     obj.toggleActive(false);
            //     Bus.$emit(BusEventName.CUSTOM_CLICK);
            // });
        },
        wordCardClickHandle () {

        }
    }
};
</script>

<style lang="less" scoped>
    .select-analysis {
        text-align: left;
        .div-btn {
            font-size: 0;
        }
        .btn-common {
            margin-bottom: 10px;
        }
        .btn-left {
            width: 92px;
        }
        .btn-right {
            width: 92px;
        }
        .brn-last {
            width: 198px;
        }
    }
</style>
