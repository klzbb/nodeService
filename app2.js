/**
 * 配置访问静态资源
 * 静态资源有（css,png;jpg,html,js,txt 等等文件都可以是静态资源）
 * 前端在浏览器访问public文件夹里面的 index.html 路径为 ：http://localhost:5000/index.html
 * 前端在浏览器访问public文件夹里面的 图片 路径为 ：http://localhost:5000/iamges/图片名称.png
 */

const express = require('express') // 引入一个基于node的框架（require 等同于 import）
const path = require("path") // 引入node内置的path包
const app = express(); // 获取express上下文

app.use(express.static(path.join(__dirname, 'public'))); // 设置静态资源访问目录

app.listen('5000', function () { // 启动端口为5000 的http 服务
  console.log('http服务启动了:端口号为5000')
})