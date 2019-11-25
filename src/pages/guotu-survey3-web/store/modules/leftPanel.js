const leftPanel = {
    state: {
        // 图层树数据.
        layerTreeList: []
    },
    getter: {
    },
    actions: {
        setLayerTreeList (context, layerTreeList) {
            context.commit('setLayerTreeList', layerTreeList);
        }
    },
    mutations: {
        setLayerTreeList (state, layerTreeList) {
            state.layerTreeList = layerTreeList;
        }
    }
};
export default leftPanel;
