import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},
  },
  mutations,
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchUser(state) {
      return state.user;
    }
  },
  actions,
})
