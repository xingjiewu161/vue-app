import service from 'mock/axios/interface.js'
function carouse() {
  return service({
    url: '/dashboard/carouse',
    method: 'get',
    data: {}
  })
}

function newbook() {
  return service({
    url: '/dashboard/newBook',
    method: 'get',
    data: {}
  })
}

function sellbook() {
  return service({
    url: '/dashboard/sellBook',
    method: 'get',
    data: {}
  })
}

function scorebook() {
  return service({
    url: '/dashboard/scoreBook',
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

export function getNewBook() {
  return new Promise((resolve, reject) => {
    newbook().then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err)
    });
  })
}

export function getSellBook() {
  return new Promise((resolve, reject) => {
    sellbook().then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err)
    });
  })
}

export function getScoreBook() {
  return new Promise((resolve, reject) => {
    scorebook().then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err)
    });
  })
}
