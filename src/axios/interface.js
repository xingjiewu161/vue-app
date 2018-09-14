import axios from 'axios'
// import { resolve } from 'path';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error)
})

// 封装axios的post请求
export function fetch (url, params) {
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
  Moke_Data (url, params) {
    return fetch(url, params)
  }
}
