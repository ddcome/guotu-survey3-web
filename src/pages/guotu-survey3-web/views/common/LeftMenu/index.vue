<template>
    <el-menu
            :default-active="$route.path"
            :collapse="true"
            background-color="#323743"
            text-color="#ffffff"
            active-text-color="#ffd04b"
            @select="handleSelect"
            class="el-menu-vertical-demo">
        <template v-for="(item) in leftMenuList">
            <el-menu-item v-if="item.children&&item.children.length===0" :key="item.id" :index="item.path">
                <i class="iconfont icon-beauty" v-html="item.iconCode"></i>
                <span slot="title">{{item.name}}</span>
            </el-menu-item>
            <el-submenu v-else :key="item.id" :index="item.path">
                <template slot="title"><i class="iconfont icon-beauty" v-html="item.iconCode"></i>
                    <span slot="title">{{item.name}}</span>
                </template>
                <template v-for="(child) in item.children" v-if="!child.hidden">
                    <el-menu-item :key="child.id" :index="child.path">{{child.name}}</el-menu-item>
                </template>
            </el-submenu>
        </template>
    </el-menu>

</template>

<script>
export default {
    data () {
        return {
            leftMenuList: [
                {
                    id: '1',
                    name: '首页',
                    path: '/home',
                    class: 'iconfont icon-beauty',
                    iconCode: '&#xe681;',
                    hidden: false,
                    children: []
                },
                {
                    id: '2',
                    name: '汇总分析',
                    path: '/summary',
                    class: 'iconfont icon-beauty',
                    iconCode: '&#xe61a;',
                    hidden: false,
                    children: []
                },
                {
                    id: '3',
                    name: '空间分析',
                    path: '/space',
                    class: 'iconfont icon-beauty',
                    iconCode: '&#xe63b;',
                    hidden: false,
                    children: []
                },
                {
                    id: '4',
                    name: '地图制图',
                    path: '/drafting',
                    class: 'iconfont icon-beauty',
                    iconCode: '&#xe733;',
                    hidden: true,
                    children: []
                },
                {
                    id: '5',
                    name: '决策服务',
                    path: '/decision',
                    class: 'iconfont icon-beauty',
                    iconCode: '&#xe62d;',
                    hidden: true,
                    children: []
                }
            ]
        };
    },
    methods: {
        handleSelect (index, indexPath) {
            this.$router.push({path: index});
            this.$emit('leftMenuClickEmitter', index);
        }
    }
};
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .el-menu-vertical-demo {
        @{deep} .el-tooltip {
            &:focus {
                outline: none;
            }
        }
        .icon-beauty {
            margin: 0;
            vertical-align: middle;
            width: 24px;
            text-align: center;
            speak: none;
            font-style: normal;
            font-weight: 400;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            display: inline-block;
            color: #fff;
        }
    }
</style>
