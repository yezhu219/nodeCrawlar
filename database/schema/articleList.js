const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleListSchema = new Schema({
  title: String,
  from: String,
  fromgImg: String,
  date: String,
  time: String,
  content: String
})

mongoose.model('articleList', articleListSchema)