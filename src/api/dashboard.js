import service from 'mock/axios/interface.js'
function carouse() {
  return service({
    url: '/dashboard/carouse',
    method: 'get',
    data: {}
  })
}

export function getCarouse () {
  return new Promise((resolve, reject) => {
    carouse().then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err)
    });
  })
}
