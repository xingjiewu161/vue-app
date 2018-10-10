// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default-dark.css'
import './../static/scss/style.scss'
import 'font-awesome/css/font-awesome.css'
import store from './store'
import './mock/mock.js'

Vue.use(ElementUI)
Vue.use(VueMaterial)
// Vue.material.registerTheme('default', {
//   primary: 'blue',
//   accent: 'red',
//   background: 'white'
// })
// Vue.material.setCurrentThem('default')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

// 时间整理过滤器 getYMD
Vue.filter('getYMD', function (input) {
  return input.split(' ')[0];
})
