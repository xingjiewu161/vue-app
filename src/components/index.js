import Dashboard from './Dsahboard.vue'
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/components/mdCore/index.css'
import 'vue-material/dist/components/mdButton/index.css'
import 'vue-material/dist/components/mdIcon/index.css'
import 'vue-material/dist/components/mdSidenav/index.css'
import 'vue-material/dist/components/mdToolbar/index.css'

Vue.use(VueMaterial.mdCore)
Vue.use(VueMaterial.mdButton)
Vue.use(VueMaterial.mdIcon)
Vue.use(VueMaterial.mdSidenav)
Vue.use(VueMaterial.mdToolbar)

const component = {
  install: function (Vue) {
    Vue.component('Dashboard', Dashboard)
  }
}
// 导出该组件
export default component
