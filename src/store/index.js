import Vue from 'vue'
import vuex from 'vuex'
import user from './modules/login.js'
import getters from './modules/getters'

Vue.use(vuex);
export default new vuex.Store({
  modules: {
    login: user,
    getters: getters
  }
})
