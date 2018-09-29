import { login, regist, logout } from 'api/login'
// import { setName, setToken } from './auth.js'

const user = {
  state: {
    cellphone: '',
    token: ''
  },
  mutations: {
    SET_NAME: (state, cellphone) => {
      state.cellphone = cellphone;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      const cellphone = userInfo.cellphone.trim();
      const password = userInfo.password.trim();
      return new Promise((resolve, reject) => {
        console.log(resolve, reject)
        login(cellphone, password).then(response => {
          const data = response.data;
          commit('SET_NAME', data.cellphone);
          commit('SET_TOKEN', data.token);
          // setName(cellphone);
          // setToken(data.token);
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
          commit('SET_NAME', data.cellphone);
          commit('SET_TOKEN', data.token);
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
