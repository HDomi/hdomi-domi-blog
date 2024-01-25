import Vuex, { createStore } from "vuex";

const store = createStore({
  modules: {
    layout: {
      namespaced: true,
      state: () => ({
        isLoading: false,
      }),
      getters: {
        getLoadingState(state) {
          return state.isLoading;
        },
      },
      actions: {
        callMutation({ state, commit }, { value }) {
          commit("setLoading", value);
        },
      },
      mutations: {
        setLoading(state, value) {
          state.isLoading = value;
        },
      },
    },
  },
});
export default store;
