import Vue from 'vue'
import vuex from 'vuex'
import user from './modules/user/login.js'
import getCode from './modules/dashboard/getCode.js'
import dashboard from './modules/dashboard/dashboard.js'

Vue.use(vuex);
export default new vuex.Store({
  modules: {
    login: user,
    dashboard: dashboard,
    getCode: getCode
  }
})
