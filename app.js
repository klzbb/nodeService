const express = require('express') // 引入一个基于node的框架（require 等同于 import）

const app = express(); // 获取express上下文
const bodyParser = require('body-parser'); // 解析post方法的body参数（也就是解析前端通过post请求传来的参数）

// 解析post请求参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/hello', function (req, res) { // 写一个get方法： 前端调用路径为 http://localhost:4000/hello?name=moliguang
  // req通过这对象获取前端传来的参数
  console.log(req.query) // 获取前端传来的链接后面的 query 参数 ?name=moliguang
  res.json({ name: 'konkkk' }) // 返回json数据给前端
})

app.post('/getUserInfo', function (req, res) { // 写一个get方法： 前端调用路径为 http://localhost:4000/getUserInfo?name=moliguang
  // req通过这对象获取前端传来的参数
  console.log(req.body) // 获取post 方法的 x-www-form-urlencoded 格式的参数
  res.json({ name: 'konkkk' }) // 返回json数据给前端
})

app.listen('4000', function () { // 启动端口为4000 的http 服务
  console.log('http服务启动了:端口号为4000')
})