<template>
    <BoxContainer class="custom-define">
        <template slot="title">
            时间范围
        </template>
        <template slot="content">
            <el-row class="one-row">
                <el-col :span="6">
                    <span class='label'>起始年份</span>
                </el-col>
                <el-col :span="18">
                    <el-date-picker
                            v-model='$store.state.summary.param.startYear'
                            type='year'
                            value-format="yyyy"
                            placeholder='选择年' size="mini">
                    </el-date-picker>
                </el-col>
            </el-row>
            <el-row class="one-row">
                <el-col :span="6">
                    <span class='label'>截止年份</span>
                </el-col>
                <el-col :span="18">
                    <el-date-picker
                            v-model='$store.state.summary.param.endYear'
                            type='year'
                            value-format="yyyy"
                            placeholder='选择年' size="mini">
                    </el-date-picker>
                </el-col>
            </el-row>
            <!--<el-row class="one-row">-->
            <!--<el-col :span="6">-->
            <!--<span class='label'>单位</span>-->
            <!--</el-col>-->
            <!--<el-col class="unit-col" :span="18">-->
            <!--<el-radio-group v-model='$store.state.summary.param.unit'>-->
            <!--<el-radio label='P' disabled>平方米</el-radio>-->
            <!--<el-radio label='M' disabled>亩</el-radio>-->
            <!--<el-radio label='G'>公顷</el-radio>-->
            <!--</el-radio-group>-->
            <!--</el-col>-->
            <!--</el-row>-->
        </template>
    </BoxContainer>
</template>

<script>
import BoxContainer from '@guotu-survey3-web/views/common/BoxContainer/index';

export default {
    components: {BoxContainer}
};
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .custom-define {
        .one-row {
            height: 30px;
            line-height: 30px;
            .el-col {
                .el-radio-group {
                    @{deep} .el-radio {
                        height: 30px;
                        font-size: 12px;
                        font-weight: normal;
                        margin-right: 10px;
                        margin-top: 3px;
                        .el-radio__label {
                            height: 30px;
                            line-height: 30px;
                            padding-left: 3px;
                        }
                    }
                }
                @{deep} .el-date-editor {
                    width: 100%;
                }
            }
            .unit-col {
                text-align: left;
            }
        }
    }
</style>
