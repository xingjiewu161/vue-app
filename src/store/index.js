import Vue from 'vue'
import vuex from 'vuex'
import user from './modules/login.js'

Vue.use(vuex);
export default new vuex.Store({
  modules: {
    login: user
  }
})
