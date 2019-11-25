<template>
    <div class='left-panel'>
        <div class='inner-right'>
            <!--面包屑-->
            <div class='inner-right-header'>
                <span class="first-title"><router-link :to="{path: '/home'}">首页</router-link></span>
                <span> > </span>
                <span>
                    <slot name="title"></slot>
                </span>
                <span class='close' @click='close()'><i class='el-icon-arrow-left'></i></span>
            </div>
            <!--内容面板-->
            <div class='inner-right-content'>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            // 当前是否打开
            currentOpenStatus: false
        };
    },
    methods: {
        beforeOpenClick: function () {
            if (!this.currentOpenStatus) {
                this.$emit('openClick');
                // 初始化
                this.currentOpenStatus = true;
            }
        },
        close: function () {
            // 点击了
            this.currentOpenStatus = false;
            this.$emit('closeClick');
        },
        open: function () {
            this.beforeOpenClick();
        }
        // 组件自身方法 end
    },
    beforeDestroy () {
        this.$off('openClick');
        this.$off('closeClick');
    }
};
</script>
<style lang="less" scoped>
    /*公共继承样式start*/
    @deep: ~'>>>';
    /*公共继承样式end*/
    .left-panel {
        display: flex;
        flex-flow: row;
        height: 100%;
        /*右侧内容*/
        .inner-right {
            flex: 1;
            height: 100%;
            overflow: hidden;
            position: relative;
            /*遮罩层 end*/
            .inner-right-header {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 70;
                height: 39px;
                width: 100%;
                background-color: #fff;
                text-align: left;
                line-height: 39px;
                border-bottom: 1px solid #cccccc;
                .first-title {
                    margin-left: 10px;
                    a {
                        color: #2c3e50;
                    }
                    a:hover {
                        color: #409EFF;
                    }
                }
                .close {
                    position: absolute;
                    right: 5px;
                    vertical-align: middle;
                    z-index: 70;
                    cursor: pointer;
                    i {
                        font-weight: bolder;
                        font-size: larger;
                    }
                }
            }
            .inner-right-content {
                margin-top: 40px;
                height: calc(100% - 40px);
                overflow: auto;
                background-color: #ffffff;
            }
        }

    }

</style>
