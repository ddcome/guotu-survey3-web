import Vue from 'vue';
import Vuex from 'vuex';
import menu from './modules/menu';
import greatMap from './modules/greatMap';
import leftPanel from './modules/leftPanel';
import summary from './modules/summary';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        menu,
        greatMap,
        leftPanel,
        summary
    },
    getters
});
