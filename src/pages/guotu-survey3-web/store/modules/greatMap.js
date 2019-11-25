const greatMap = {
    state: {
        mapObj: {}
    },
    actions: {
        setMapObj (context, mapObj) {
            context.commit('setMapObj', mapObj);
        }
    },
    mutations: {
        setMapObj (state, mapObj) {
            state.mapObj = mapObj;
        }
    }
};
export default greatMap;
