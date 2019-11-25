import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@guotu-survey3-portal-back/views/common/Layout/index'),
            children: [
                {
                    path: '/',
                    name: 'ArticleEdit',
                    component: () => import('@guotu-survey3-portal-back/views/Article/components/ArticleEdit/index'),
                    redirect: '/ArticleEdit'
                },
                {
                    path: '/ArticleEdit',
                    name: 'ArticleEdit',
                    component: () => import('@guotu-survey3-portal-back/views/Article/components/ArticleEdit/index')
                },
                {
                    path: '/ArticleList',
                    name: 'ArticleList',
                    component: () => import('@guotu-survey3-portal-back/views/Article/components/ArticleList/index')
                },
                {
                    path: '/previewArticle',
                    name: 'previewArticle',
                    component: () => import('@guotu-survey3-portal-back/views/Article/components/ArticleList/commponents/PreviewArticle/index')
                },
                {
                    path: '/Folder',
                    name: 'Folder',
                    component: () => import('@guotu-survey3-portal-back/views/Folder/index')
                }
            ]
        },
        {
            path: '*',
            redirect: {
                name: 'Home'
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
