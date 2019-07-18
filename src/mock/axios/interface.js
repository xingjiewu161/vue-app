import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import store from '../../store'

// 创建axios实例
const service = axios.create({
  baseURL: '',
  timeout: 15000, // 请求超时时间
  headers: {'Content-Type': 'application/json'}
});

// respone拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
    const res = response;
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
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json'
    }
    console.log(config)
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  })

export default service
