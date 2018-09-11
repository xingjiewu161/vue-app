import Vue from 'vue'
import vuex from 'vuex'
import login from './login.js'

Vue.use(vuex);
export default new vuex.Store({
  modules: {
    Login: login
  }
})
