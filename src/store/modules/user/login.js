import { login, regist, logout } from 'api/login'
// import { setName, setToken } from './auth.js'
import getters from './getters.js'
// import { MessageBox } from 'element-ui'

const user = {
  state: {
    cellphone: '',
    token: ''
  },
  getters: getters,
  mutations: {
    SET_NAME: (state, cellphone) => {
      state.cellphone = cellphone;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
      window.localStorage.setItem('token', token)
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      let name = userInfo.password.trim()
      let telephone = userInfo.cellphone.trim()
      // let faceImage = userInfo.uploadinfo;
      // let department = userInfo.department;
      // let faceImages = faceImage.replace('data:image/jpeg;base64,', '');
      // console.log(faceImages)
      return new Promise((resolve, reject) => {
        login(telephone, name, '', '').then(response => {
          resolve(response);
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 注册
    Regist({ commit }, userInfo) {
      const cellphone = userInfo.cellphone.trim();
      const password = userInfo.password.trim();
      return new Promise((resolve, reject) => {
        regist(cellphone, password).then(response => {
          const data = response.data;
          commit('SET_NAME', data.auth.cellphone);
          commit('SET_TOKEN', data.auth.token);
          resolve(response);
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(response => {
          commit('SET_NAME', '');
          commit('SET_TOKEN', '');
          resolve(response);
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        // setToken(false);
        commit('SET_TOKEN', false);
        resolve()
      })
    }
  }
}
export default user
