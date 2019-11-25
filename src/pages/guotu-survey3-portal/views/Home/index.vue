<template>
    <el-container class="home-container" style="height: 100%">
        <el-header class="inner-header">
            <Menu></Menu>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-container direction="horizontal" style="align-items: stretch">
            <el-footer class="footer-div public-background-color-gray" style="height: 100px">
                <div class="footer-inner">
                    <!--<p class="copy-right public-footer-content-font-size">-->
                    <!--<a href="javascript:void(0);">使用条款</a> | 主办：国土资源部信息中心 地址：北京市西城区阜内大街64号 Copyright © All Rights-->
                    <!--Reserved 备案序号：京ICP备05047877号-->
                    <!--</p>-->
                    <p class="copy-right public-footer-content-font-size">
                        <a href="javascript:void(0);">网站声明</a> | <a href="javascript:void(0);">联系我们</a>
                        <br/>主办：甘肃省自然资源厅  技术支持：甘肃省自然资源信息中心
                    </p>
                </div>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
import Menu from '../../components/Menu';

export default {
    components: {
        Menu
    }
};
</script>

<style lang="less" scoped>
    .home-container {
        width: 100%;
        .inner-header {
            position: fixed;
            z-index: 99;
            width: 100%;
            background-color: #fff;
            height: 123px !important;
        }
        .el-main {
            margin-top: 120px;
            background-color: #fff;
            overflow: unset;
            width: 100%;
        }
        .footer-div {
            width: 100%;
            height: auto;
            align-self: flex-end;
            .footer-inner {
                width: 1100px;
                margin: 0 auto;
                .copy-right {
                    width: 100%;
                    text-align: center;
                    padding: 30px;
                }
            }
        }
    }

</style>
