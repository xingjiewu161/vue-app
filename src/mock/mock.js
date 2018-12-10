const Mock = require('mockjs');

const Random = Mock.Random;
/**
 * @description return courseware list
 * @author Quicksand is better than time
 */
const dataList = function () {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    let obj = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    arr.push(obj);
  }
  return {items: arr}
}
/**
 * @description return current user login infomation
 * @author Quicksand is better than time
 */
const auth = () => {
  return {auth: {cellphone: '15761673395', token: 'qqqqqqqqqqqqqqqqqq11111111111wwww'}}
}

const carouse = function () {
  let arr = [
    {
      id: Random.date() + ' ' + Random.time(),
      url: '../../static/images/carouse1.png',
      title: 'crouse image'
    },
    {
      id: Random.date() + ' ' + Random.time(),
      url: '../../static/images/carouse1.png',
      title: 'crouse image'
    },
    {
      id: Random.date() + ' ' + Random.time(),
      url: '../../static/images/carouse1.png',
      title: 'crouse image'
    },
    {
      id: Random.date() + ' ' + Random.time(),
      url: '../../static/images/carouse1.png',
      title: 'crouse image'
    }
  ];
  return {items: arr};
}

const newbook = function () {
  let arr = [
    {
      url: '../../static/images/book3.png',
      title: '不为我们改变的世界1',
      author: '一诺/华章',
      core: '7.8',
      price: '35.00',
      id: '123',
      car: '../../static/images/cart_light.png'
    },
    {
      url: '../../static/images/book3.png',
      title: '不为我们改变的世界2',
      author: '一诺/华章',
      core: '7.8',
      price: '35.00',
      id: '456',
      car: '../../static/images/cart_light.png'
    },
    {
      url: '../../static/images/book3.png',
      title: '不为我们改变的世界3',
      author: '一诺/华章',
      core: '7.8',
      price: '35.00',
      id: '789',
      car: '../../static/images/cart_light.png'
    },
    {
      url: '../../static/images/book3.png',
      title: '不为我们改变的世界4',
      author: '一诺/华章',
      core: '7.8',
      price: '35.00',
      id: '012',
      car: '../../static/images/cart_light.png'
    }
  ]
  return {items: arr};
}
const sellbook = function () {
  let arr = [
    {
      url: '../../static/images/book2.png',
      title: '生死疲劳',
      author: '莫言/作家出版社/2012-10',
      core: '8.5',
      price: '55.00',
      id: '123',
      car: '../../static/images/cart_light.png'
    },
    {
      url: '../../static/images/book2.png',
      title: '生死疲劳',
      author: '莫言/作家出版社/2012-10',
      core: '8.5',
      price: '55.00',
      id: '123',
      car: '../../static/images/cart_light.png'
    },
    {
      url: '../../static/images/book2.png',
      title: '生死疲劳',
      author: '莫言/作家出版社/2012-10',
      core: '8.5',
      price: '55.00',
      id: '123',
      car: '../../static/images/cart_light.png'
    },
    {
      url: '../../static/images/book2.png',
      title: '生死疲劳',
      author: '莫言/作家出版社/2012-10',
      core: '8.5',
      price: '55.00',
      id: '123',
      car: '../../static/images/cart_light.png'
    }
  ]
  return {items: arr};
}
const scorebook = function () {
  let arr = [
    {
      url: '../../static/images/book1.png',
      title: '野火集',
      author: '龙应台',
      core: '8.9',
      price: '25.00',
      id: '123',
      car: '../../static/images/cart_light.png'
    },
    {
      url: '../../static/images/book1.png',
      title: '野火集',
      author: '龙应台',
      core: '8.9',
      price: '25.00',
      id: '123',
      car: '../../static/images/cart_light.png'
    },
    {
      url: '../../static/images/book1.png',
      title: '野火集',
      author: '龙应台',
      core: '8.9',
      price: '25.00',
      id: '123',
      car: '../../static/images/cart_light.png'
    }
  ]
  return {items: arr};
}

// courseware list
Mock.mock('/news/index', 'post', dataList)
// auth info
Mock.mock('/auth/auther', 'post', auth)
Mock.mock('/dashboard/carouse', 'get', carouse)
Mock.mock('/dashboard/newBook', 'get', newbook)
Mock.mock('/dashboard/sellBook', 'get', sellbook)
Mock.mock('/dashboard/scoreBook', 'get', scorebook)
