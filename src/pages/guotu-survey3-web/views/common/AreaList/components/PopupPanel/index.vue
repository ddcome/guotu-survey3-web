<template>
    <div class="popup-panel" :style="{top: topStyle, left: leftStyle, right: rightStyle, width: widthStyle, height: heightStyle}" v-if="isShow" v-drag>
        <div class="header">
            <span class="title">
                <slot name="title"></slot>
            </span>
            <i class="iconfont close" @click.stop="close()">&#xe690;</i>
        </div>
        <div class="main" :style="{height: contentHeightStyle}">
            <slot name="content"></slot>
        </div>
        <div class="footer" v-if="hasFooter">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isShow: true
        };
    },
    directives: {
        drag: function (el) {
            // 获取当前元素
            let dragBox = el;
            dragBox.onmousedown = e => {
                // 若光标不在header区域，则禁止移动该组件.
                if (e.target.className !== 'header') return;
                // 算出鼠标相对元素的位置
                let disX = e.clientX - dragBox.offsetLeft;
                let disY = e.clientY - dragBox.offsetTop;
                document.onmousemove = e => {
                    // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                    let left = e.clientX - disX;
                    let top = e.clientY - disY;
                    // 移动当前元素
                    dragBox.style.left = left + 'px';
                    dragBox.style.top = top + 'px';
                };
                document.onmouseup = e => {
                    // 鼠标弹起来的时候不再移动
                    document.onmousemove = null;
                    // 预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
                    document.onmouseup = null;
                };
            };
        }
    },
    props: {
        widthStyle: {
            type: String,
            default: '490px'
        },
        heightStyle: {
            type: String,
            default: ''
        },
        hasFooter: {
            type: Boolean,
            default: true
        },
        topStyle: {
            type: String,
            default: '20px'
        },
        leftStyle: {
            type: String,
            default: ''
        },
        rightStyle: {
            type: String,
            default: '50px'
        },
        contentHeightStyle: {
            type: String,
            default: '200px'
        }
    },
    methods: {
        hide: function () {
            this.isShow = false;
        },
        show: function () {
            this.isShow = true;
        },
        close: function () {
            this.hide();
        },
        open: function () {
            this.show();
        }
    }
};
</script>

<style lang="less" scoped>
    @marginLeft: 10px;
    .popup-panel {
        background-color: rgba(255, 255, 255, @gBgTransparency);
        width: 490px;
        position: absolute;
        top: 20px;
        right: 50px;
        z-index: 9;
        border: 1px solid #cccccc;
        pointer-events: auto;
        .header {
            line-height: 30px;
            text-align: left;
            border-bottom: 1px solid #cccccc;
            display: flex;
            position: relative;
            cursor: move;
            .title {
                margin-left: @marginLeft;
                height: 30px;
                cursor: auto;
                font-size: 13px;
            }
            .close {
                position: absolute;
                right: @marginLeft;
                align-self: center;
                cursor: pointer;
                width: 12px;
            }
        }
        .main {
            overflow: auto;
        }
        .footer {
            height: 30px;
            line-height: 30px;
            background-color: #f0f1f2;
            text-align: left;
            padding-left: @marginLeft;
        }
    }
</style>
