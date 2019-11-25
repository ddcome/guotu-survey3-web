<template>
    <div class="services-monitor-preview">
        <el-dialog
                title="服务预览"
                width="1000px"
                :visible.sync="servicesMonitorPreviewVisible"
                :close-on-click-modal="false"
                :fullscreen="true"
                @opened="servicesMonitorPreviewOpened"
                @close="servicesMonitorPreviewClose"
        >
            <el-row class="service-map-row">
                <el-col class="service-map-col" :span="24">
                    <WebGIS
                            v-if="webGisAlived"
                            :showControls="false"
                            :options="{ serviceCode: serviceCodeValue }"
                            :modules="['BufferAnalysis']"
                    />
                </el-col>
                <el-col :span="24"></el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
import WebGIS from '@greatmap/vue-webgis';

export default {
    components: {WebGIS},
    data () {
        return {
            webGisAlived: false,
            servicesMonitorPreviewVisible: false,
            map: null,
            serviceCodeValue: 'Counties'
        };
    },
    methods: {
        servicesMonitorPreviewOpened () {
        },
        servicesMonitorPreviewClose () {
            this.webGisAlived = false;
        },
        openServicesMonitorPreview (serviceCodeValue) {
            this.webGisAlived = true;
            this.serviceCodeValue = serviceCodeValue;
            this.servicesMonitorPreviewVisible = true;
        }
    },
    mounted () {
    }
};
</script>

<style lang="less" scoped>
    .services-monitor-preview {
        .el-dialog {
            .service-map-row {
                position: absolute;
                top: 100px;
                left: 20px;
                right: 20px;
                bottom: 50px;
                .service-map-col {
                    height: 100%;
                    border: 5px solid #eee;
                    /*overflow: hidden;*/
                    .service-map {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>
