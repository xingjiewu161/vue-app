import axios from 'axios'
import { Message } from 'element-ui'
// import store from 'store'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use((config) => {
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken()
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use((response) => {
  return response;
}, (error) => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }).catch((error) => {
        reject(error)
      })
  })
}

export default {
  Moke_Data(url, params) {
    return fetch(url, params)
  }
}
