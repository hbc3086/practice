const DEFAULT_STATE = {
    popAlertData: {
      state:false,
      type: null,
      title: null,
      msg: null,
      btn:{
        link:'',
        name:null,
        fnName:null,
      }
    },
  };
  
  export default {
    namespaced: true,
    state: () => ({ ...DEFAULT_STATE }),
    mutations: {
      UPDATE_STATE(state, payload) {
        Object.keys(payload).forEach(key => {
          state[key] = payload[key];
        });
      },
    },
    actions: {
      setPopAlertData({ commit }, payload) {
        commit('UPDATE_STATE', { popAlertData: payload });
      },
    },
  };
  