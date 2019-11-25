<template>
    <el-card class="webgis-container">
        <span class="title">{{currentYear}}年<span class="public-font-color-blue">{{$store.state.summary.param.region.name}}</span>{{landCategoryTemp}}分布情况</span>
        <!--<el-radio-group v-model="currentYear" class="year-radio-group public-click-enabled" @change="currentYearChange">-->
        <!--<span class="left-btn" @click.stop="leftBtnClick"><i class="iconfont">&#xe695;</i></span>-->
        <!--<el-radio :label="item" v-for="item in years" :key="item">-->
        <!--<span class="sort-line-left"></span>-->
        <!--<span class="el-radio-inner" :class="item===currentYear?'active':''">-->
        <!--{{item}}-->
        <!--<span class="arrow" v-if="item===currentYear"></span>-->
        <!--</span>-->
        <!--<span class="sort-line-right"></span>-->
        <!--</el-radio>-->
        <!--<span class="right-btn" @click.stop="rightBtnClick"><i class="iconfont">&#xe6a4;</i></span>-->
        <!--</el-radio-group>-->

        <!--:show-aside="false"-->
        <WebGIS @init="onWebGISInit($event)" :showControls="false"
                :options="webGisOption" :modules="['ImageLayer']"/>
    </el-card>
</template>

<script>
import WebGIS from '@greatmap/vue-webgis';
import {yearsData} from './../../SummaryResult/years.data';
import SummaryResultService from '@guotu-survey3-web/service/summary-result.service';

export default {
    components: {WebGIS},
    props: {
        location: {
            type: String,
            default: ''
        },
        code: {
            type: String,
            default: ''
        },
        year: {
            type: String,
            default: ''
        },
        landCategory: {
            type: String,
            default: ''
        }
    },
    watch: {
        landCategory (val) {
            this.landCategoryTemp = val;
        },
        code (val) {
            this.codeTemp = val;
            this.setWebGisOption(val, this.currentYear);
            console.log('his.webGisOption', this.webGisOption);
        },
        location (val) {
            this.locationTemp = val;
        },
        year (val) {
            this.currentYear = val;
            // 将选中的年显示在当前页
            let index = this.getIndex(this.currentYear, yearsData);
            if (yearsData.length - 1 - index >= this.howManyYear) {
                this.years = yearsData.slice(index, this.howManyYear);
            } else {
                this.years = yearsData.slice(yearsData.length - this.howManyYear <= 0 ? 0 : yearsData.length - this.howManyYear, yearsData.length);
            }
        },
        currentYear () {
            this.setWebGisOption(this.codeTemp, this.currentYear);
        }
    },
    data () {
        return {
            map: null,
            locationTemp: '',
            webGisOption: {showLayers: '', serviceCode: ''},
            currentYear: '2019',
            howManyYear: 7,
            years: [],
            step: 1, // 向左向右移动步长
            codeTemp: '',
            landCategoryTemp: ''
        };
    },
    methods: {
        onWebGISInit (map) {
            console.log('onWebGISInit > ', map);
            // map.checkChange([1, 2], false);
            this.map = map;
        },
        setWebGisOption (id, year) {
            const pre = 'X';
            const suffix = 'TDLYXZ';
            const suffixLast = 'G';
            const last = 'XZQ';
            const regionName = pre + id + suffix + year + suffixLast + last;
            const regionCode = pre + id + suffix + year + suffixLast;
            this.webGisOption.showLayers = regionName;
            this.webGisOption.serviceCode = regionCode;
        },
        currentYearChange (val) {
            this.$emit('currentYearChange', val);
        },
        leftBtnClick () {
            let index = this.getIndex(this.years[0], yearsData);
            console.log('index > ', index);
            // 右移动的必要
            if (index > 0) {
                this.years = yearsData.slice(index - this.step, index - this.step + this.howManyYear);
            }
        },
        rightBtnClick () {
            // 满足该条件才有移动的必要
            let index = this.getIndex(this.years[this.years.length - 1], yearsData);
            if (index < yearsData.length - 1) {
                let start = index + this.step - this.howManyYear + 1;
                let end = index + this.step + 1;
                this.years = yearsData.slice(start, end);
            }
        },
        getIndex (item, array) {
            let indexTemp = 0;
            array.every(function (elem, index) {
                if (elem === item) {
                    indexTemp = index;
                }
                return true;
            });
            return indexTemp;
        },
        initYears () {
            if (yearsData.length === 0) return;
            this.years = yearsData.slice(yearsData.length - this.howManyYear <= 0 ? 0 : yearsData.length - this.howManyYear, yearsData.length);
        },
        renderDL (res) {
            this.landCategoryTemp = res.currentLand;
            res = Object.assign(res, this.webGisOption);
            // 渲染地类地图
            SummaryResultService.queryWebgisDLTB(res, this);
        },
        reRenderDL (dynamicLayers) {
            this.map.modules.imageLayer.change(this.webGisOption.serviceCode, dynamicLayers);
        }
    },
    mounted () {
        // this.initYears();
        this.setWebGisOption(this.code, this.year);
        console.log('this.webGisOption > ', this.webGisOption);
    }
};
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .webgis-container {
        position: relative;
        height: 100%;
        @{deep} .el-card__body {
            padding: 0;
            height: 100%;
            .webgis-container {
                .webgis-map {
                    background: #ffffff;
                }
            }
        }
        @media screen and (max-width: 1200px) {
            margin-top: 0;
        }
        .year-radio-group {
            position: absolute;
            width: 550px;
            left: 50%;
            margin-left: -275px;
            top: 100px;
            z-index: 90;
            .el-radio {
                margin: 0 auto;
                width: 14px;
                height: 14px;
                position: relative;
                margin: 0 30px;
                .sort-line-right {
                    height: 1px;
                    background-color: #CCCCCC;
                    position: absolute;
                    z-index: 90;
                    width: 30px;
                    top: 7px;
                    left: 14px;
                }
                .sort-line-left {
                    height: 1px;
                    background-color: #CCCCCC;
                    position: absolute;
                    z-index: 90;
                    width: 30px;
                    top: 7px;
                    left: -30px;
                }
                .el-radio-inner {
                    color: #000;
                    width: 50px;
                    height: 20px;
                    line-height: 20px;
                    position: absolute;
                    left: -18px;
                    top: -27px;
                    z-index: 90;
                    .arrow {
                        width: 0;
                        height: 0;
                        border: 5px solid;
                        border-color: #66b1ff transparent transparent transparent;
                        position: absolute;
                        left: 50%;
                        margin-left: -5px;
                        top: 20px;
                        z-index: 90;
                    }
                }
                .el-radio-inner.active {
                    color: #ffffff;
                    background-color: #66b1ff;
                }
            }
            .left-btn,
            .right-btn {
                position: absolute;
                z-index: 90;
                top: -1px;
                cursor: pointer;
                color: #CCCCCC;
            }
            .left-btn:hover,
            .right-btn:hover {
                color: #66b1ff;
            }
            .left-btn {
                left: -7px;
            }
            .right-btn {
                right: -7px;
            }
        }
        .title {
            position: absolute;
            left: 20px;
            z-index: 90;
            top: 30px;
        }
    }
</style>
