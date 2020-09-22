/**'
 * 链接数据库案例
 */
const express = require('express') // 引入一个基于node的框架（require 等同于 import）
const path = require("path") // 引入node内置的path包
const app = express(); // 获取express上下文
const dbUtil = require('./db/db.js'); // 引入数据库操作工具

app.use(express.static(path.join(__dirname, 'public'))); // 设置静态资源访问目录

// 查询所有用户
app.get('/user/list', function (req, res, next) {
  dbUtil.exec({
    sql: 'select * from user',
    params: [],
    callback: function (data) {
      res.json({ data: data })
    }
  })
})

// 新增用户
app.get('/user/add', function (req, res, next) {
  const { username, password } = req.query;
  dbUtil.exec({
    sql: `insert into user (username,password) values ("${username}","${password}")`,
    callback: function (data) {
      res.json({ data: data })
    }
  })
})
// 根据id删除用户
app.get('/user/del', function (req, res, next) {
  const { id } = req.query;
  dbUtil.exec({
    sql: `delete from user where id = ${id}`,
    params: [],
    callback: function (data) {
      res.json({ data: data })
    }
  })
})

// 根据id查询用户
app.get('/user/query', function (req, res, next) {
  const { id } = req.query;
  dbUtil.exec({
    sql: `select * from user where id = ${id}`,
    callback: function (data) {
      res.json({ data: data })
    }
  })
})


// 根据id更新用户
app.get('/user/update', function (req, res, next) {
  const { username, password, id } = req.query;
  dbUtil.exec({
    sql: `update user set username=${username},password=${password} where id = ${id}`,
    params: [],
    callback: function (data) {
      res.json({ data: data })
    }
  })
})

app.listen('12580', function () { // 启动端口为12580 的http 服务
  console.log('http服务启动了:端口号为12580')
})