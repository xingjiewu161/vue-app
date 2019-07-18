import service from 'mock/axios/interface.js'
export function getCode(url) {
  return service({
    url: url,
    // url: '/sweetApply',
    method: 'get'
  })
}
