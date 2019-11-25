<template>
    <div class='result-panel'>
        <div id="dragUpLine" v-if="canDrag" class="drag-up-line" v-dragToUp></div>
        <el-row type="flex" class="row-bg inner-header" justify="space-between">
            <el-col :span="12" class="inner-header-left">
                <span class="inner-header-left-title">{{title}}</span>
            </el-col>
            <el-col :span="12" class="inner-header-right">
                <span class='empty'></span>
                <!--<span class='export-btn' @click.stop='exportBtnClick()'>-->
                    <!--<i class="iconfont public-cursor">&#xe617;</i><span class="export-btn-words public-cursor">导出</span>-->
                <!--</span>-->
                <!--<TableIcon v-on:chartBtnClickEmitter="chartBtnClick"-->
                           <!--v-on:tableBtnClickEmitter="tableBtnClick"></TableIcon>-->
                <span class='double-arrow' @click.stop='doubleArrowBtnClick()'>
                    <i class="iconfont public-cursor" v-html="whichIcon"></i>
                </span>
            </el-col>
        </el-row>
        <div class="inner-content" v-if="isShowContent">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import TableIcon from './components/TableIcon/index';

export default {
    components: {TableIcon},
    data: function () {
        return {
            // 是展示内容面板Ma, 初始化为false
            isShowContent: false,
            // 是向下按钮Ma，初始化为false
            isShowUpBtn: false,
            canDrag: false
        };
    },
    methods: {
        chartBtnClick () {
            this.$emit('chartBtnClickEmitter');
        },
        tableBtnClick () {
            this.$emit('tableBtnClickEmitter');
        },
        exportBtnClick () {
            this.$emit('exportBtnClickEmitter');
        },
        doubleArrowBtnClick () {
            this.isShowContent = !this.isShowContent;
            if (this.isShowContent) {
                this.canDrag = true;
                this.$emit('open');
            } else {
                this.canDrag = false;
                this.$emit('close');
            }
        }
    },
    props: {
        title: {
            type: String,
            default: '结果展示面板'
        }
    },
    computed: {
        // 收起与否
        whichIcon: function () {
            return this.isShowContent ? '&#xe70d;' : '&#xe70b;';
        }
    },
    directives: {
        dragToUp: function (el) {
            let dragUpLine = el;
            let srcPositionY = 0;
            let destPositionY = 0;
            let moveY = 0;
            let isMouseup = false;
            let isMouseDown = false;
            let destHeight = 35;
            dragUpLine.onmousedown = function (e) {
                const el = e || event;
                el.stopPropagation();
                srcPositionY = el.pageY;
                isMouseup = false;
                isMouseDown = true;
            };
            document.onmouseup = function (e) {
                const el = e || event;
                el.stopPropagation();
                isMouseDown = false;
                isMouseup = true;
            };
            document.onmousemove = function (e) {
                const el = e || event;
                el.stopPropagation();
                if (isMouseDown && !isMouseup) {
                    destPositionY = el.pageY;
                    moveY = srcPositionY - destPositionY;
                    srcPositionY = destPositionY;
                    destHeight = parseInt(document.getElementById('elFooter').style.height.replace('px', ''), 10) + moveY;
                    document.getElementById('elFooter').style.height = (destHeight > 35 ? destHeight : 35) + 'px';
                }
            };
        }
    }
};
</script>

<style lang="less" scoped>
    .result-panel {
        height: 100%;
        position: relative;
        .drag-up-line {
            position: absolute;
            top: -2px;
            left: 0;
            right: 0;
            z-index: 70;
            height: 3px;
            background-color: rgba(255, 255, 255, 0);
            &:hover {
                cursor: n-resize;
            }
        }
        .inner-header {
            position: absolute;
            /*background-color: #616770;*/
            background-color: #ffffff;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            height: 35px;
            color: #000;
            z-index: 10;
            left: 0px;
            right: 0px;
            font-size: 0px;
            .inner-header-left {
                font-size: 12px;
                text-align: left;
                line-height: 35px;
                .inner-header-left-title {
                    margin-left: 10px;
                }
            }
            .inner-header-right {
                font-size: 12px;
                text-align: right;
                display: flex;
                .empty {
                      display: flex;
                      flex: 1;
                  }
                .export-btn {
                    display: flex;
                    width: 50px;
                    margin-right: 10px;
                    height: 35px;
                    line-height: 35px;
                    .iconfont {
                        flex: 1;
                        font-size: 20px;
                        align-self: center;
                    }
                    .export-btn-words {
                        align-self: center;
                    }
                }
                .double-arrow {
                    margin-left: 10px;
                    height: 33px;
                    line-height: 35px;
                    width: 38px;
                    text-align: center;
                    font-weight: bolder;
                    /*background-color: rgb(40, 48, 50);*/
                    background-color: #ffffff;
                }
            }
        }
        .inner-content {
            width: 100%;
            position: absolute;
            top: 35px;
            bottom: 0px;
            right: 0;
            left: 0px;
            z-index: 9;
            overflow: auto;
            background-color: #ffffff;
        }
    }
</style>
