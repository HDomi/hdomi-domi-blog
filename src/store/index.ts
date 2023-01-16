import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    isNavOpen: false
  },
  getters: {
  },
  mutations: {
    toggleNav() {
      this.state.isNavOpen = !this.state.isNavOpen
    }
  },
  actions: {
  },
  modules: {
  }
})
