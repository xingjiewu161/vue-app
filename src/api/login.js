import service from 'mock/axios/interface.js'
export function login(telephone, name, faceImage, department) {
  return service({
    // url: 'http://192.168.43.83:8080/api/meetApply',
    // 真正向后端发起请求的地址
    // url: 'http://106.13.12.17:8080/api/meetApply',
    // 前端mock数据地址
    url: '/news/index',
    method: 'post',
    emulateJSON: true,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name: name,
      telephone: telephone,
      faceImage: faceImage,
      uUserId: telephone,
      data: `{ "email": ${department}, "username": ${department} }`
    }
  })
}

export function logout() {

}

export function regist() {

}
