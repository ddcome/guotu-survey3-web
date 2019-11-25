<template>
    <div class="menu">
        <div class="sys-title"><img class="logo" src="../../../assets/icons/logo.png" alt="" width="34px" height="34px">市级第三次国土调查数据库管理系统
        <!--<div class="sys-title"><img class="logo" src="../../../assets/icons/logo.png" alt="" width="34px" height="34px">省市级第三次国土调查数据库管理系统-->
        </div>
        <!--仅支持2级菜单-->
        <el-menu
                :default-active="$route.path"
                mode="horizontal"
                class="el-menu-self"
                background-color="#373e42"
                active-text-color="#fff"
                text-color="#fff"
                @select="handleSelect">
            <template v-for="(item) in $store.getters.passHiddenMenuList">
                <el-menu-item v-if="item.child&&item.child.length===0" :key="item.id" :index="item.path">
                    <i class="iconfont-self" :class="item.class" v-html="item.iconCode"></i>{{item.name}}
                </el-menu-item>
                <el-submenu v-else :key="item.id" :index="item.path">
                    <template slot="title"><i class="iconfont-self" :class="item.class" v-html="item.iconCode"></i>{{item.name}}</template>
                    <template v-for="(child) in item.child" v-if="!child.hidden">
                        <el-menu-item :key="child.id" :index="child.path">{{child.name}}</el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    data () {
        return {};
    },
    methods: {
        handleSelect (key, keyPath) {
            let temp = '';
            if (Array.isArray(keyPath) && keyPath.length > 1) {
                temp = keyPath[keyPath.length - 1];
            } else {
                temp = keyPath[0];
            }
            this.$router.push({path: temp});
            // 注释的代码是非路由形式抛出菜单点击事件
            // Bus.$emit(BusEventName.MENU_CURRENT_DATA, temp);
        }
    }
};
</script>

<style lang="less" scoped>
@deep: ~'>>>';
.menu {
    ul {
        border-bottom: 0px;
    }
    .sys-title {
        position: absolute;
        top: 0px;
        color: #fff;
        z-index: 90;
        line-height: 60px;
        font-size: 20px;
        font-weight: 500;
        left: 20px;
        .logo {
            margin-right: 10px;
        }
    }
    .el-menu-self .el-menu-item,
    .el-menu-self .el-submenu {
        float: right;
    }
    .el-menu-self {
        font-size: 0px;
        .iconfont-self {
            color: #ffffff;
            font-size: 20px;
            margin-right: 5px;
        }
        .el-menu-item.is-active,
        @{deep} .el-submenu.is-active .el-submenu__title {
                    background-color: #1878f1 !important;
                }
    }
}
</style>
