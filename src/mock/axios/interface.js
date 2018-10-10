import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import store from '../../store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
});

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response;
    // service.defaults.headers.common['Authentication-Token'] = store.state.getters;
    if (res.status !== '200' && res.status !== 200) {
      if (res.status === '4001' || res.status === 4001) {
        MessageBox.confirm('用户名或密码错误，请重新登录', '重新登录', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      if (res.status === '4009' || res.status === 4009) {
        MessageBox.confirm('该用户名已存在，请重新注册！', '重新注册', {
          confirmButtonText: '重新注册',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error)
  }
)

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  })

export default service
