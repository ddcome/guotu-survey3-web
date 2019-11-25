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
import '@guotu-survey3-portal-back-styles/index.less';
import Vuex from 'vuex';
import axios from 'axios';
import QS from 'qs';
import store from './store/index';
// 工具类
import * as Utils from './utils/index';

Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.prototype.$utils = Utils;

/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});

export default {
    vm
};
