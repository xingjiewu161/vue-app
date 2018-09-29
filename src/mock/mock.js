const Mock = require('mockjs');

const Random = Mock.Random;

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

const auth = () => {
  return {auth: {cellphone: '15761673395', token: 'quwwewehhh2328743876429323nzbxhsgdhq3'}}
}

Mock.mock('/news/index', 'post', dataList)
Mock.mock('/auth/auther', 'post', auth)
