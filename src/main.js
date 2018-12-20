// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './mock/mock.js'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import './../static/scss/style.scss'
import './../static/scss/icon.css'
import 'animate.css/animate.min.css'
import 'antd/dist/antd.min.css'
import touch from './core/tool/touch'
Vue.use(ElementUI)
Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]
Vue.use(touch)
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
