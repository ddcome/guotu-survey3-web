<template>
    <!--Container容器布局-->
    <el-container class="home">
        <el-header>
            <Menu></Menu>
        </el-header>
        <div class="home-container public-click-disabled">
            <div ref="mapContainerRef" id="mapContainer" class="map-container public-click-enabled">
                <GreatMapContainer
                        ref="greatMapContainerRef"
                ></GreatMapContainer>
            </div>
            <el-container class="other-container">
                <!--<LeftMenu class="public-click-enabled" @leftMenuClickEmitter="leftMenuClick"></LeftMenu>-->
                <LeftMenuOld class="public-click-enabled" @leftMenuClickEmitter="leftMenuClick"/>
                <el-aside
                        class="public-click-enabled"
                        :width="elAsideWidth"
                >
                    <div class="left-panel-tooltip" v-if="leftTooltip" @click.stop="openLeftPanelClick"><i
                            class="iconfont">&#xe8a7;</i></div>
                    <LeftPanel
                            ref="LeftPanelRef"
                            v-on:closeClick="closeLeftPanelClick"
                            @openClick="openLeftPanelClick"
                    >
                        <template #title>{{$route.name==='首页'? '' : $route.name}}</template>
                        <template #content>
                            <router-view/>
                        </template>
                    </LeftPanel>
                </el-aside>
                <router-view name="SummaryResult" v-if="isSummaryResultAlive"></router-view>
                <router-view name="SpaceResult"></router-view>
            </el-container>
        </div>
    </el-container>
</template>

<script>
import Menu from '@guotu-survey3-web/views/common/Menu/index';
import GreatMapContainer from '@guotu-survey3-web/views/common/GreatMapContainer/index';
import LeftPanel from '@guotu-survey3-web/views/common/LeftPanel/index';
import LeftMenu from '@guotu-survey3-web/views/common/LeftMenu/index';
import LeftMenuOld from '@guotu-survey3-web/views/common/LeftMenuOld/index';

export default {
    components: {
        Menu,
        GreatMapContainer,
        LeftPanel,
        LeftMenu,
        LeftMenuOld
    },
    provide () {
        return {
            reloadSummaryResult: this.reloadSummaryResult
        };
    },
    data () {
        return {
            // 最小40px
            elAsideWidth: '0px', // 285px
            isNeedReviewTool: false,
            isSummaryResultAlive: true,
            leftTooltip: true,
            mapContainerDefaultWidth: 0
        };
    },
    methods: {
        reloadSummaryResult () {
            this.isSummaryResultAlive = false;
            this.$nextTick(function () {
                this.isSummaryResultAlive = true;
            });
        },
        setElAsideWidth: function (val) {
            this.elAsideWidth = val;
        },
        closeLeftPanelClick: function () {
            this.setElAsideWidth('0px');
            this.leftTooltip = true;
            this.$refs.greatMapContainerRef.isNeedReviewTool = false;
            this.afterCloseLeftPanel();
            this.changeMapContainerDefaultWidth();
        },
        openLeftPanelClick: function () {
            this.setElAsideWidth('285px');
            this.leftTooltip = false;
            this.$refs.greatMapContainerRef.isNeedReviewTool = true;
            this.afterCloseLeftPanel();
            this.changeMapContainerDefaultWidth();
        },
        afterCloseLeftPanel () {
            if (this.$route.path === '/summary') {
                this.reloadSummaryResult();
            }
        },
        changeMapContainerDefaultWidth () {
            let o = document.getElementById('mapContainer');
            // 关闭了LeftPanel
            if (this.leftTooltip) {
                o.style.left = (60) + 'px';
                o.style.width = (this.mapContainerDefaultWidth) + 'px';
            } else {
                o.style.left = (285 + 60) + 'px';
                o.style.width = (this.mapContainerDefaultWidth - 285) + 'px';
            }
        },
        leftMenuClick: function (witchButton) {
            switch (witchButton) {
            case '/':
                this.$refs.LeftPanelRef.close();
                break;
            case '/summary':
                this.$refs.LeftPanelRef.open();
                this.reloadSummaryResult();
                break;
            case '/space':
                this.$refs.LeftPanelRef.open();
                break;
            case '/drafting':
                this.$refs.LeftPanelRef.close();
                break;
            case '/decision':
                this.$refs.LeftPanelRef.close();
                break;
            }
        },
        getMapContainerDefaultWidth () {
            return document.getElementById('mapContainer').clientWidth;
        },
        init () {
            this.mapContainerDefaultWidth = this.getMapContainerDefaultWidth();
        },
        handleResize () {
            this.init();
        },
        windowResizeEvent () {
            window.addEventListener('resize', this.handleResize, false);
        }
    },
    mounted () {
        this.init();
        this.windowResizeEvent();
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.handleResize);
    }
};
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .home {
        width: 100%;
        height: @gHeight;
        .el-header {
            position: absolute;
            z-index: 90;
            left: 0;
            top: 0;
            width: 100%;
            height: 60px;
        }
        .home-container {
            height: 100%;
            .map-container {
                position: absolute;
                z-index: 0;
                left: 60px;
                bottom: 0px;
                top: 60px;
                width: calc(100% - 60px);
            }
            .other-container {
                position: absolute;
                z-index: 70;
                left: 0;
                top: 60px;
                width: 100%;
                bottom: 0px;
                .el-aside {
                    height: @gHeight;
                    border-right: 1px solid #ccc;
                    .left-panel-tooltip {
                        position: absolute;
                        top: 50%;
                        left: 60px;
                        z-index: 1;
                        margin-top: -20px;
                        background-color: rgba(0, 0, 0, 0.4);
                        height: 40px;
                        width: 20px;
                        line-height: 40px;
                        text-align: right;
                        cursor: pointer;
                        border-radius: 0 25px 25px 0;
                        i {
                            color: #000;
                            font-weight: bolder;
                            margin-right: 5px;
                            line-height: 40px;
                        }
                    }
                    .left-panel-tooltip:hover {
                        background-color: rgba(0, 0, 0, 0.6);
                        i {
                            color: #fff;
                        }
                    }
                }
            }
        }
    }

    @{deep} .el-header,
    @{deep} .el-container,
    @{deep} .el-footer,
    @{deep} .el-main {
        padding: 0 !important;
    }
</style>
