// import axios from 'axios'
// import {
//   Message, MessageBox
// } from 'element-ui'
// import store from '../../store';
// // import store from 'store'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// // 创建axios实例
// const service = axios.create({
//   baseURL: process.env.BASE_API, // api的base_url
//   timeout: 5000 // 请求超时时间
// })

// // 请求拦截器
// service.interceptors.request.use((config) => {
//   // if (store.getters.token) {
//   //   config.headers['X-Token'] = getToken()
//   // }
//   return config
// }, (error) => {
//   return Promise.reject(error)
// })

// // 响应拦截
// service.interceptors.response.use(response => {
//   const res = response.data;
//   if (res.code !== '200' && res.code !== 200) {
//     if (res.code === '4001' || res.code === 4001) {
//       MessageBox.confirm('用户名或密码错误，请重新登录', '重新登录', {
//         confirmButtonText: '重新登录',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//         store.dispatch('FedLogOut').then(() => {
//           location.reload() // 为了重新实例化vuerouter对象避免bug
//         })
//       })
//     }
//     if (res.code === '4009' || res.code === 4009) {
//       MessageBox.confirm('该用户名已存在，请重新注册！', '重新注册', {
//         confirmButtonText: '重新注册',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//         store.dispatch('FedLogOut').then(() => {
//           location.reload()
//         })
//       })
//     }
//     return Promise.reject(res)
//   } else {
//     return response.data
//   }
// }, error => {
//   Message({
//     message: error.message,
//     type: 'error',
//     duration: 5 * 1000
//   });
//   return Promise.reject(error)
// })

// // 封装axios的post请求
// export function fetch(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params).then(response => {
//       resolve(response.data);
//     }).catch((error) => {
//       reject(error)
//     })
//   })
// }
// export function get(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.get(url).then(response => {
//       resolve(response.data);
//     }).catch((error) => {
//       reject(error)
//     })
//   })
// }

// export function post(url, data) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, {...data})
//       .then(response => {
//         resolve(response.data);
//       }).catch((error) => {
//         reject(error)
//       })
//   })
// }

// export default service
