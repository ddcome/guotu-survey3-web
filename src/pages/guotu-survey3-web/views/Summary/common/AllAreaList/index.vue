<template>
    <el-card class="box-card all-area-list">
        <span class="quick-div" :class="isShowSearchDiv?'quick-div-active':''"
              @click.stop="isShowSearchDiv = !isShowSearchDiv">
            <i class="iconfont">&#xe625;</i>
        </span>
        <div v-if="isShowSearchDiv" class="search-input-outer">
            <el-autocomplete
                    class="search-input"
                    size="mini"
                    v-model="keywords"
                    placeholder="输入辖区关键字"
                    :fetch-suggestions="searchInputSelectFetch"
                    @select="searchInputSelect"
                    @input="searchInputChange"
            />
            <el-button class="search-input-btn" type="primary" size="mini">搜索</el-button>
            <div class="arrow"></div>
        </div>
        <span class="pre">
            <i class="iconfont">&#xe642;</i>
        </span>
        <el-carousel :interval="5000" arrow="always" :autoplay="false" ref="elCarouselRef"
                     @change="elCarouselChange">
            <el-carousel-item v-for="onePage in howManyPages" :key="onePage">
                <ul @click.stop="areaClick($event)">
                    <li :class="item.regionName===$store.state.summary.param.region.name?'active': ''"
                        v-for="(item) in areaListTemp"
                        :key="item.regionCode" :code="item.regionCode">
                        <div><span :code="item.regionCode" :title="item.regionName">{{item.regionName}}</span></div>
                    </li>
                </ul>
            </el-carousel-item>
        </el-carousel>
        <el-tag size="mini" class="pagination-tag">{{currentPage+1}}/{{howManyPages}}页</el-tag>
        <span class="next">
            <i class="iconfont">&#xe640;</i>
        </span>
    </el-card>
</template>

<script>
import SummaryResultService from '@guotu-survey3-web/service/summary-result.service';

export default {
    watch: {
        areaList (val) {
            this.areaListCopy = val;
            this.areaListTemp = val;

            // 缓冲数据
            this.cacheAreaList(this.areaListCopy);
            // 初始化当前选择的区域
            // this.saveToStore(this.areaListCopy.length > 0 ? this.areaListCopy[0] : '');
        }
    },
    data () {
        return {
            isShowSearchDiv: false,
            keywords: '',
            areaList: [],
            areaListCopy: [],
            showLi: true,
            howManyPages: 1,
            everyPages: 1,
            currentPage: 1,
            areaListTemp: []
        };
    },
    methods: {
        searchInputChange () {
            let temp = this.areaList;
            for (let index in temp) {
                if (temp[index]['regionName'].indexOf(this.keywords) >= 0) {
                    let num = Math.ceil(index / this.everyPages);
                    this.$refs.elCarouselRef.setActiveItem((num === 0 ? 1 : num) - 1);
                    return;
                }
            }
        },
        searchInputSelectFetch (queryString, cb) {
            var results = [];
            cb(results);
        },
        searchInputSelect () {
            this.searchInputChange();
        },
        saveToStore (val) {
            // 记录当前选的辖区
            this.$store.dispatch('setRegionNameEn', val.regionCode);
            this.$store.dispatch('setRegionName', val.regionName);
        },
        areaClick (e) {
            try {
                if (e.target.nodeName === 'UL') return;
                this.$store.dispatch('setRegionNameEn', e.target.attributes['code'].nodeValue);
                this.$store.dispatch('setRegionName', e.target.innerText);
                this.$emit('areaClick');
            } catch (err) {
                console.log('[触发异常，不影响正常使用]', err);
            }
        },
        resetAreaListByDiffScreen () {
            // 重新对数组分割
            // 1.获取UL的宽度
            const width = this.$refs.elCarouselRef.$el.clientWidth - 120;
            // 2.其中LI占50本身宽度+40边距
            const howMany = width / 90;
            // 每页最大容纳
            this.everyPages = Math.ceil(howMany);
            // 多少页
            this.howManyPages = Math.ceil(this.getAreaListByCache().length / this.everyPages);
        },
        resizeEvent () {
            const $this = this;
            window.onresize = function () {
                $this.resetAreaListByDiffScreen();
            };
        },
        elCarouselChange (currentPage) {
            this.currentPage = currentPage;
            let end = (currentPage * this.everyPages + this.everyPages) > this.getAreaListByCache().length ? this.getAreaListByCache().length : (currentPage * this.everyPages + this.everyPages);
            this.areaListTemp = this.getAreaListByCache().slice(currentPage * this.everyPages, end);
        },
        cacheAreaList (val) {
            if (val.length > 0) {
                localStorage.setItem('AllAreaList', JSON.stringify(val));
            }
        },
        getAreaListByCache () {
            return JSON.parse(localStorage.getItem('AllAreaList')) || [];
        },
        setAreaList (val) {
            this.areaList = val;
        },
        queryRegionData () {
            SummaryResultService.queryAllRegionData(this);
        }
    },
    created () {
        // 查询辖区数据
        this.queryRegionData();
    },
    mounted () {
        // 窗口resize事件
        this.resizeEvent();
        // 页面重载执行
        this.resetAreaListByDiffScreen();
        // 初始化
        this.elCarouselChange(0);
    },
    destroyed () {
        window.onresize = null;
    }
};
</script>

<style lang="less" scoped>
    @deep: ~">>>";
    @height: 80px;
    .all-area-list {
        position: relative;
        background-color: #eee;
        height: @height;
        font-size: 0;
        overflow: unset !important;
        @{deep} .el-card__body {
            padding: 0 10px;
        }
        .search-input-outer {
            position: absolute;
            z-index: 99;
            left: 0px;
            top: -61px;
            height: 50px;
            width: 270px;
            background-color: #fff;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .3);
            .search-input, .search-input-btn {
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
            }
            .search-input {
                left: 10px;
            }
            .search-input-btn {
                right: 10px;
            }
            .arrow {
                position: absolute;
                bottom: -14px;
                left: 10px;
                width: 0;
                height: 0;
                border-width: 7px;
                border-style: solid;
                border-color: white transparent transparent transparent
            }
        }
        .quick-div {
            position: absolute;
            z-index: 99;
            left: 5px;
            top: 5px;
            cursor: pointer;
            i {
                font-size: 20px !important;
                color: #888;
            }
        }
        .quick-div:hover {
            cursor: pointer;
            transform: scale(1.2);
            i {
                color: #409EFF;
            }
        }
        .quick-div-active {
            transform: scale(1.2);
            i {
                color: #409EFF;
            }
        }
        .pre,
        .next {
            position: absolute;
            z-index: 60;
            width: 40px;
            height: 60px;
            line-height: 60px;
            top: 10px;
            background-color: #fff;
            font-size: 12px;
            cursor: pointer;
        }
        .pre {
            left: 10px;
        }
        .next {
            right: 10px;
        }
        .pre:hover,
        .next:hover {
            color: #ffffff;
            background-color: #66b1ff;
        }
        ul {
            display: flex;
            height: 60px;
            overflow: hidden;
            position: absolute;
            left: 60px;
            right: 60px;
            top: 10px;
            z-index: auto;
            text-align: left;
            li {
                display: inline-block;
                height: 60px;
                font-size: 12px;
                width: 50px;
                background-color: #ffffff;
                margin: 0 10px;
                padding: 0 10px;
                text-align: center;
                cursor: pointer;
                div {
                    height: 60px;
                    width: 50px;
                    display: table;
                    span {
                        display: table-cell;
                        vertical-align: middle;
                    }
                }
            }
            li:hover {
                color: #ffffff;
                background-color: #66b1ff;
            }
            li.active {
                color: #ffffff;
                background-color: #66b1ff;
            }
        }

        .el-carousel {
            @{deep} .el-carousel__container {
                height: 80px;
            }
            @{deep} .el-carousel__indicators {
                display: none;
            }
            @{deep} .el-carousel__arrow--left {
                left: 0px;
                width: 40px;
                height: 60px;
                cursor: pointer;
                -webkit-transition: 0s;
                transition: 0s;
                border-radius: 0;
                background-color: white;
                opacity: 0;
                color: #FFF;
                position: absolute;
                z-index: 90;
            }
            @{deep} .el-carousel__arrow--right {
                border: none;
                outline: 0;
                padding: 0;
                margin: 0;
                height: 60px;
                width: 40px;
                cursor: pointer;
                -webkit-transition: .3s;
                transition: .3s;
                border-radius: 0;
                background-color: black;
                opacity: 0;
                color: #FFF;
                position: absolute;
                top: 50%;
                right: 0px;
                z-index: 70;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                text-align: center;
                font-size: 12px;
            }
        }

        .el-carousel__item h3 {
            color: #475669;
            font-size: 18px;
            opacity: 0.75;
            line-height: 80px;
        }
        .pagination-tag {
            position: absolute;
            right: 0px;
            top: 0px;
            z-index: 70;
        }
    }
</style>
