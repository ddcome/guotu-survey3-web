<template>
    <div class="watch-left-panel">
        <WordCard :icon="t.iconCode"
                  :active="$route.path === t.path"
                  :word="t.name" height="116px"
                  :key="index"
                  :obj="t"
                  @wordCardClick="wordCardClickHandle"
                  v-for="(t,index) in thirdMenuList"/>
    </div>
</template>

<script>
import WordCard from '@guotu-survey3-web/views/common/WordCard/index';

export default {
    components: {WordCard},
    data () {
        return {};
    },
    computed: {
        thirdMenuList () {
            return this.$router.options.routes.filter((currentValue) => {
                return currentValue.name === 'layout';
            })[0]['children'].filter((c) => c.path === '/watch')[0]['children'];
        }
    },
    methods: {
        wordCardClickHandle (t) {
            this.$router.push({path: t.path});
        }
    }
};
</script>

<style lang="less" scoped>
    .watch-left-panel {
        margin: 20px;
        font-size: 0px;
        text-align: center;
    }
</style>
