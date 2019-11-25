<template>
    <BoxContainer class="buffer-setting">
        <template slot="title">缓冲分析</template>
        <template slot="content">
            <el-form :model="distanceValidateForm" ref="distanceValidateForm" label-width="0"
                     class="buffer-form"
                     size="mini">
                <el-form-item
                        prop="distance"
                        :rules="[{ required: true, message: '不能为空'},{ type: 'number', message: '必须为数字值'}]">
                    <el-row>
                        <el-col :span="22">
                            <el-input class="distance-input" type="number"
                                      v-model.number="distanceValidateForm.distance"
                                      autocomplete="off"
                                      @change="$store.state.greatMap.mapObj.modules.bufferAnalysis.setDistance(distanceValidateForm.distance)"
                            ></el-input>
                        </el-col>
                        <el-col class="unit-col" :span="2">
                            <span class='mi'>米</span>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
            <!--<el-form v-loading="loading" :model="distanceValidateForm" ref="distanceValidateForm" label-width="0"-->
            <!--class="buffer-form"-->
            <!--size="mini">-->
            <!--<el-form-item-->
            <!--prop="distance"-->
            <!--:rules="[{ required: true, message: '不能为空'},{ type: 'number', message: '必须为数字值'}]">-->
            <!--<el-row>-->
            <!--<el-col :span="12">-->
            <!--<el-input class="distance-input" type="number"-->
            <!--v-model.number="distanceValidateForm.distance"-->
            <!--autocomplete="off"-->
            <!--@change="$store.state.greatMap.mapObj.modules.bufferAnalysis.setDistance(distanceValidateForm.distance)"-->
            <!--&gt;</el-input>-->
            <!--</el-col>-->
            <!--<el-col class="unit-col" :span="4">-->
            <!--<span class='mi'>米</span>-->
            <!--</el-col>-->
            <!--<el-col class="last-col" :span="8">-->
            <!--<el-tooltip class="item" effect="dark" content="按住Ctrl键滑动鼠标选取" placement="right">-->
            <!--<el-button type="primary"-->
            <!--@click="$store.state.greatMap.mapObj.modules.bufferAnalysis.toggleActive($event)"-->
            <!--:loading="canDistanceClick" :disabled="canDistanceClick">-->
            <!--开始分析-->
            <!--</el-button>-->
            <!--</el-tooltip>-->
            <!--</el-col>-->
            <!--</el-row>-->
            <!--</el-form-item>-->
            <!--</el-form>-->
        </template>
    </BoxContainer>
</template>

<script>
import BoxContainer from '@guotu-survey3-web/views/common/BoxContainer/index';

export default {
    components: {BoxContainer},
    data () {
        return {
            // 缓冲设置
            distanceValidateForm: {
                distance: 0
            },
            canDistanceClick: false,
            loading: true
        };
    },
    methods: {
        registerBusEvent: function () {
            const $this = this;
            this.$Bus.listenEvent(this.$Bus.BusConfig.COMMON.GREATMAP_READYED, function () {
                $this.loading = false;
            });
        },
        checkGreatMapIsReady () {
            if (this.$store.state.greatMap.mapObj && this.$store.state.greatMap.mapObj.hasOwnProperty('modules') && this.$store.state.greatMap.mapObj.modules.hasOwnProperty('bufferAnalysis')) {
                this.loading = false;
            } else {
                this.loading = true;
            }
        }
    },
    mounted () {
        this.registerBusEvent();
        // 检查map对象是否已经包含了modules下的bufferAnalysis
        this.checkGreatMapIsReady();
    }
};
</script>

<style lang="less" scoped>
    .buffer-setting {
        .buffer-form {
            .el-form-item {
                .el-row {
                    height: 30px;
                    line-height: 30px;
                    margin: 5px 0px;
                    .unit-col {
                        text-align: right;
                        .mi {
                            padding-left: 5px;
                            font-size: 12px;
                        }
                    }
                    .last-col {
                        text-align: right;
                        .el-button {
                        }
                    }
                }
            }
        }
    }
</style>
