<template>
    <div class="left-menu-old">
        <template v-for="(item) in leftMenuList">
            <div class="menu-btn" :class="$route.path===item.path?'menu-btn-active menu-btn-no-hover':''" :key="item.id"
                 @click.stop="handleSelect(item)">
                <div class="menu-btn-inner">
                    <i class="left-layer-icon" :class="item.class" v-html="item.iconCode"></i>
                    <span>{{item.name}}</span>
                </div>
            </div>
        </template>
    </div>
</template>

<script>

export default {
    computed: {
        leftMenuList () {
            return this.$router.options.routes.filter((currentValue) => {
                return currentValue.name === 'layout';
            })[0]['children'];
        }
    },
    methods: {
        handleSelect (item) {
            this.$router.push({path: item.path});
            this.$emit('leftMenuClickEmitter', item.path);
        }
    }
};
</script>

<style lang="less" scoped>
    /*左侧边栏菜单*/
    .left-menu-old {
        width: 60px;
        height: 100%;
        background-color: #323743;
        color: #ffffff;
        .menu-btn {
            cursor: pointer;
            height: 70px;
            display: flex;
            padding: 0 10px;
            .menu-btn-inner {
                align-self: center;
                margin: 0 auto;
                .left-layer-icon {
                    display: block;
                    margin: 0 auto;
                    margin-bottom: 5px;
                }
            }
        }
        .menu-btn:hover {
            background-color: #000000;
        }
        .menu-btn-no-hover {
            pointer-events: none;
        }
        .menu-btn-active {
            background-color: #409EFF;
            color: #ffffff;
        }
    }
</style>
