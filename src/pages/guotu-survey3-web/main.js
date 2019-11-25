// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@guotu-survey3-web-styles/index.less';
import Vuex from 'vuex';
import axios from 'axios';
import QS from 'qs';
import store from './store/index';
import * as filters from './filters';
import './plugins/index';
import Bus from './utils/bus/index';

Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(Bus);

// register global utility filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});

// 开发环境配置
if (process.env.NODE_ENV === 'development') {
    // mock 服务
    // require('./mock');
}

export default {
    vm
};
