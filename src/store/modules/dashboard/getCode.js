import { getCode } from 'api/code'

const user = {
  state: {
  },
  mutations: {
  },
  actions: {
    GetCode({ commit }, info) {
      let urls = info.paramUrl.trim();
      return new Promise((resolve, reject) => {
        getCode(urls).then(response => {
          resolve(response);
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default user
