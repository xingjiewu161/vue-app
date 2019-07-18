import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from '@/components/dashboard/Dashboard'
import Basic from '@/components/Basic'
// import Login from '@/components/Login/Login'
// import Login from '@/components/Login/Login1'
import Forgetpwd from '@/components/Login/Forgetpwd'
import PhotoWall from '@/components/photowall/PhotoWall'
import Carousel from '@/components/carousel/carousel'
import store from '../store'
// import Mine from '@/components/mine/Mine'

if (sessionStorage.getItem('token')) {
  store.commit('SET_TOKEN', sessionStorage.getItem('token'))
}

Vue.use(Router)

const router = new Router({
  routes: [{
    // path: '/',
    // name: 'Login',
    // component: Login
    path: '/carousel',
    name: Carousel,
    component: Carousel
  },
  {
    path: '/basic',
    component: Basic,
    children: [
      {
        path: '/',
        component: (resolve) => {
          require(['@/components/dashboard/Dashboard'], resolve)
        }
      },
      {
        path: 'mine',
        component: (resolve) => {
          require(['@/components/mine/Mine'], resolve)
        }
      }
    ]
  },
  {
    path: '/forgetpwd',
    name: 'Forgetpwd',
    component: Forgetpwd
  },
  {
    path: '/photowall',
    name: PhotoWall,
    component: PhotoWall
  },
  {
    path: '/carousel',
    name: Carousel,
    component: Carousel
  }
  ]
})

export default router
