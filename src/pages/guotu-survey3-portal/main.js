// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/iconfont.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import store from './store/index.js';
import './style/index.less';
import './assets/css/reset.css';
// 过滤器
import './filters';
import FirstLoadService from './service/first-load/firstLoad.service';
// 懒加载
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, { error: 'static/portal_img/404.png', loading: 'static/portal_img/404_cloud.png'
/*  // 图片懒加载时候的参数...... */
});

Vue.use(ElementUI);
Vue.config.productionTip = false;

FirstLoadService.ready(function () {
    /* eslint-disable no-new */
    new Vue({
        el: '#app',
        router,
        store,
        components: {App},
        template: '<App/>'
    });
});
