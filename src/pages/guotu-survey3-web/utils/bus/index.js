import BusConfig from './config/index.config';

const Bus = (Vue) => {
    Vue.prototype.$Bus = new Vue({
        data () {
            return {
                BusConfig: BusConfig
            };
        },
        methods: {
            registerEvent (name, param) {
                // 先注销
                // this.clearEvent(name);
                // 后注册
                this.$emit(name, param);
            },
            listenEvent (name, callback) {
                this.$on(name, callback);
            },
            clearEvent (...name) {
                for (let i in name) {
                    this.$off(name[i]);
                }
            }
        }
    });
};

/**
 * Bus事件传输，用于组件间事件传递。
 */
export default Bus;
