import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/forgetpwd',
    name: 'Forgetpwd',
    component: Forgetpwd
  }
  ]
})
