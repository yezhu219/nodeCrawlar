const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sfHotDaySchema = new Schema({
  title: String,
  author: String,
  authorImg:String,
  des: String,
  desImg:String,
  date: {
    type: Date,
    default:Date.now()
  },
  content: String
})

mongoose.model('sfHotDay', sfHotDaySchema)