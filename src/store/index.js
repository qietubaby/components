import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    product: '产品111111'
  },
  mutations: {

  },
  actions: {

  },
  getters
})
