const mongoose = require('mongoose')
const glob = require('glob')
const { resolve } = require('path')

//配置数据库地址
const db = 'mongodb://localhost/aa'
//配置数据库链接
const config = {
  useNewUrlParser: true, 
}
//开启debug
mongoose.set('debug', true)
//设置mongoose 使用node的Promise
mongoose.Promise = global.Promise
//处理链接异常
const handleUnusual = (max) => {
  max++
  if (max <= 3) {
    mongoose.connect(db)
  } else {
    reject()
  }
}

//加载所有schema
exports.initSchema = () => {
  glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}
//链接数据库
exports.connect = () => {
  return new Promise((resolve,reject) => {
    let max = 1
    mongoose.connect(db,config)
  
    //链接失败处理
    mongoose.connection.on('disconnected', () => {
      console.log('链接断开！！！！')
      handleUnusual(max)
    })
    //链接错误
    mongoose.connection.on('error', (err) => {
      console.log('链接断开！！！！')
      handleUnusual(max)
      throw new Error(err)
     
    })
    //链接成功
    mongoose.connection.once('open', () => {
      console.log('链接成功！！！！')
      resolve()
    })
  })
}