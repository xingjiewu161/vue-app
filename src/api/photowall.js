import service from 'mock/axios/interface.js'
function userList() {
  return service({
    url: '/photowall/userList',
    method: 'get',
    data: {}
  })
}
export function getuserList() {
  return new Promise((resolve, reject) => {
    userList().then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err)
    });
  })
}
