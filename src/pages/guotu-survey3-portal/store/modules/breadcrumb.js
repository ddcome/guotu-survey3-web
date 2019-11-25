const state = {
    bread: ''
};

const mutations = {
    SET_BREAD: (state, bread) => {
        state.bread = bread;
    }
};

const actions = {
    setBread (context, bread) {
        context.commit('SET_BREAD', bread);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
