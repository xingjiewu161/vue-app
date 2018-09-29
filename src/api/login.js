import service from 'mock/axios/interface.js'
export function login(name, password) {
  return service({
    url: '/auth/auther',
    method: 'post',
    data: {
      name,
      password
    }
  })
}

export function logout() {

}

export function regist() {

}
