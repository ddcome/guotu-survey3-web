<template>
    <div class="great-map-container">
        <WebGIS :class="isNeedReviewTool?'active':''" :modules="['BufferAnalysis']" @init="onWebGISInit($event)"/>
        <!--<WebGIS ref="webGISRef" :class="isNeedReviewTool?'active':''" :show-aside="false" :modules="['BufferAnalysis']"-->
                <!--@init="onWebGISInit($event)" :options="{serviceCode: 'X620102DC2019G'}"/>-->
    </div>
</template>

<script>
import WebGIS from '@greatmap/vue-webgis';

export default {
    components: {
        WebGIS
    },
    data () {
        return {
            isNeedReviewTool: false
        };
    },
    methods: {
        onWebGISInit (map) {
            console.log(map);
            if (Array.isArray(map)) {
                return;
            }
            this.$store.dispatch('setMapObj', map);
            this.$Bus.registerEvent(this.$Bus.BusConfig.COMMON.GREATMAP_READYED);
        }
    },
    beforeDestroy () {
        this.$Bus.clearEvent(this.$Bus.BusConfig.COMMON.GREATMAP_READYED);
    }
};
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .great-map-container {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
</style>
