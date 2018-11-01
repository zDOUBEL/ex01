import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import indexlist from './modules/indexlist'
import daka from './modules/daka'
import indexLishi from './modules/indexLishi'
import getters from './getters'



Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
   login,
   indexlist,
   daka,
   indexLishi
  },
  getters
})

export default store
