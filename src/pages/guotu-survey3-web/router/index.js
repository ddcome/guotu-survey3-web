import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            component: () => import('@guotu-survey3-web/views/Layout/index'),
            children: [
                {
                    path: '/',
                    class: 'iconfont icon-beauty',
                    iconCode: '&#xe681;',
                    name: '首页'
                },
                {
                    path: '/space',
                    class: 'iconfont icon-beauty',
                    iconCode: '&#xe61a;',
                    name: '空间分析',
                    components: {
                        default: () => import('@guotu-survey3-web/views/Space/SpaceLeftPanel/index'),
                        'SpaceResult': () => import('@guotu-survey3-web/views/Space/SpaceResult/index')
                    }
                },
                {
                    path: '/summary',
                    class: 'iconfont icon-beauty',
                    iconCode: '&#xe63b;',
                    name: '统计分析',
                    components: {
                        default: () => import('@guotu-survey3-web/views/Summary/SummaryLeftPanel/index'),
                        'SummaryResult': () => import('@guotu-survey3-web/views/Summary/SummaryResult/index')
                    }
                },
                {
                    path: '/trend',
                    class: 'iconfont icon-beauty',
                    iconCode: '&#xe60a;',
                    name: '趋势分析',
                    components: {
                        default: () => import('@guotu-survey3-web/views/Trend/TrendLeftPanel/index'),
                        'TrendResult': () => import('@guotu-survey3-web/views/Trend/TrendResult/index')
                    },
                    children: [
                        {
                            path: '/trend/jsydqsfx',
                            class: 'iconfont icon-beauty',
                            iconCode: '&#xe712;',
                            name: '建设用地趋势分析',
                            component: () => import('@guotu-survey3-web/views/Trend/TrendResult/jsydqsfx.vue')
                        },
                        {
                            path: '/trend/gddtbhqsfx',
                            class: 'iconfont icon-beauty',
                            iconCode: '&#xe7c7;',
                            name: '耕地动态变化趋势分析'
                        },
                        {
                            path: '/trend/ssnyddtbhqsfx',
                            class: 'iconfont icon-beauty',
                            iconCode: '&#xe65c;',
                            name: '设施农用地动态变化趋势分析'
                        },
                        {
                            path: '/trend/wlyddtbhqsfx',
                            class: 'iconfont icon-beauty',
                            iconCode: '&#xe6b0;',
                            name: '未利用地动态变化趋势分析'
                        }
                    ]
                },
                {
                    path: '/watch',
                    class: 'iconfont icon-beauty',
                    iconCode: '&#xe62d;',
                    name: '监管服务',
                    component: () => import('@guotu-survey3-web/views/Watch/WatchLeftPanel/index'),
                    children: [
                        {
                            path: '/watch/tdlyxzjgfx',
                            class: 'iconfont icon-beauty',
                            iconCode: '&#xe74d;',
                            name: '土地利用现状监管分析'
                        },
                        {
                            path: '/watch/tdzyjgzzlfx',
                            class: 'iconfont icon-beauty',
                            iconCode: '&#xe6a2;',
                            name: '土地资源监管总质量分析'
                        },
                        {
                            path: '/watch/jbntjkyj',
                            class: 'iconfont icon-beauty',
                            iconCode: '&#xe8a8;',
                            name: '基本农田监控预警'
                        },
                        {
                            path: '/watch/wfydyj',
                            class: 'iconfont icon-beauty',
                            iconCode: '&#xe649;',
                            name: '违法用地预警'
                        },
                        {
                            path: '/watch/gdbylyj',
                            class: 'iconfont icon-beauty',
                            iconCode: '&#xe89f;',
                            name: '耕地保有量预警'
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@guotu-survey3-web/views/Login/index')
        },
        {
            path: '*',
            redirect: {
                name: 'Login'
            }
        }
    ]
});

/**
 * navigation gard.
 */
router.beforeEach((to, from, next) => {
    // ...demo code
    // if (!localStorage.getItem('username')) {
    //     if (from.name === 'Login') {
    //         return next();
    //     }
    //     console.log('a');
    //     return next('/login');
    // } else {
    //     console.log('b');
    //     return next();
    // }
    next();
});

export default router;
