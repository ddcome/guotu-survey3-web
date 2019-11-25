import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// const isHistoryMode = process.env.NODE_ENV === 'production' ? {
//     mode: 'history',
//     base: '/mh'
// } : {
//     mode: 'hash'
// };

export default new Router({
    // ...isHistoryMode,
    routes: [
        {
            path: '/',
            component: () => import('@guotu-survey3-portal/views/Home/index'),
            meta: {keepAlive: true, isUseCache: false},
            children: [
                {
                    path: '/',
                    name: 'pages',
                    meta: {keepAlive: true, isUseCache: false},
                    component: () => import('@guotu-survey3-portal/views/Home/pages/index')
                },
                {
                    path: '/news',
                    name: 'news',
                    meta: {keepAlive: true, isUseCache: false},
                    component: () => import('@guotu-survey3-portal/views/News/index')
                },
                {
                    path: '/notice',
                    name: 'notice',
                    meta: {keepAlive: true, isUseCache: false},
                    component: () => import('@guotu-survey3-portal/views/Notice/index')
                },
                {
                    path: '/policy',
                    name: 'policy',
                    meta: {keepAlive: true, isUseCache: false},
                    component: () => import('@guotu-survey3-portal/views/Policy/index')
                },
                {
                    path: '/data',
                    name: 'data',
                    meta: {keepAlive: true, isUseCache: false},
                    component: () => import('@guotu-survey3-portal/views/Data/index'),
                    children: [
                        {
                            path: '/data/datagallery',
                            name: 'datagallery',
                            meta: {keepAlive: true, isUseCache: false},
                            component: () => import('@guotu-survey3-portal/views/Data/DataGallery/index')
                        },
                        {
                            path: '/data/fungallery',
                            name: 'fungallery',
                            meta: {keepAlive: true, isUseCache: false},
                            component: () => import('@guotu-survey3-portal/views/Data/FunctionGallery/index')
                        }
                    ]
                },
                {
                    path: '/personal',
                    name: 'personal',
                    meta: {keepAlive: true, isUseCache: false},
                    component: () => import('@guotu-survey3-portal/views/Personal/index'),
                    children: [
                        {
                            path: '/personal/MyCollection',
                            name: 'MyCollection',
                            component: () => import('@guotu-survey3-portal/views/Personal/components/MyCollection/index')
                        },
                        {
                            path: '/personal/ApplicationList',
                            name: 'ApplicationList',
                            component: () => import('@guotu-survey3-portal/views/Personal/components/ApplicationList/index')
                        },
                        {
                            path: '/personal/User',
                            name: 'User:',
                            component: () => import('@guotu-survey3-portal/views/Personal/components/User/index')
                        },
                        {
                            path: '/',
                            name: 'MyCollection',
                            component: () => import('@guotu-survey3-portal/views/Personal/components/MyCollection/index')
                        }
                    ]
                },
                {
                    path: '/contact',
                    naem: 'content',
                    component: () => import('@guotu-survey3-portal/views/Contact/index')
                },
                {
                    path: '/preview',
                    name: 'preview',
                    component: () => import('@guotu-survey3-portal/components/PreviewPage/index')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('@guotu-survey3-portal/views/Login/index')
        },
        {
            path: '/404',
            component: () => import('@guotu-survey3-portal/views/ErrorPage/404.vue')
        },
        {
            path: '*',
            component: () => import('@guotu-survey3-portal/views/ErrorPage/404.vue')
        }
    ]
});
