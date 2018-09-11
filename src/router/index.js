import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login/Login'
import Forgetpwd from '@/components/Login/Forgetpwd'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/forgetpwd',
    name: 'Forgetpwd',
    component: Forgetpwd
  }
  ]
})
