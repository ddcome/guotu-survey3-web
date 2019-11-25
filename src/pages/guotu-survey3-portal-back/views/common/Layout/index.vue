<template>
    <!--Container容器布局-->
    <el-container class="home">
        <el-header>
            <Menu></Menu>
        </el-header>
        <el-container class="home-content">
            <el-aside class="content-aside" width="200px">
                <el-menu
                        default-active="/ArticleEdit"
                        class="el-menu-vertical-demo"
                        background-color="#323743"
                        text-color="#ffffff"
                        active-text-color="#ffd04b"
                        @select="handleSelect"
                >
                    <el-submenu index="/article">
                        <template slot="title">
                            <span><i class="el-icon-tickets"></i>文章管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/ArticleEdit">
                                <span>文章发布</span>
                            </el-menu-item>
                            <el-menu-item index="/ArticleList">
                                <span>文章列表</span>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--//目录管理-->
                    <el-menu-item index="/Folder">
                        <span><i class="el-icon-menu"></i>目录管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Menu from './../Menu/index';

export default {
    components: {
        Menu
    },
    methods: {
        handleSelect (key, keyPath) {
            console.log('key', key);
            console.log('keyPath', keyPath);
            let temp = '';
            if (Array.isArray(keyPath) && keyPath.length > 1) {
                temp = keyPath[keyPath.length - 1];
            } else {
                temp = keyPath[0];
            }
            console.log('temp', temp);
            this.$router.push({path: temp});
        }
    }
};
</script>

<style lang="less" scoped>
    .home {
        width: 100%;
        height: @gHeight;
        .el-header {
        }
        .home-content {
            .content-aside {
                position: relative;
                .el-menu-vertical-demo {
                    border: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
