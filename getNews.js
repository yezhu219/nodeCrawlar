const rq = require('request-promise')
const cheerio = require('cheerio')
const mongoose = require('mongoose')

const option = {
  uri: 'http://news.baidu.com/guonei',
  json: true
}


//获取新闻详情页数据
const getPageDetail = async (url) => {
  let str = await rq({ url })
  const $ = cheerio.load(str)
  let title = $('.article-title').find('h2').text()
  let from = $('.author-name').text()
  let date = $('.date').text()
  let time = $('.time').text()
  let fromImg = $('.author-icon').find('img').attr('src')
  let content = ''
  $('.article-content').find('.bjh-p').each(function () {
    content += '<p>' + $(this).text() + '</p>'
  })
  return {
    title,
    from,
    fromImg,
    date,
    time,
    content
  }
}
//获取新闻列表
const getData = async () => {
  const data = await rq(option)
  const $ = cheerio.load(data)
  const list = []
  let arr = $('.ulist>li ')
  // const newsSchema = mongoose.model('news')
  for (let i = 0; i < arr.length; i++) {
    let item = $(arr[i]).find('a')
    let link = item.attr('href')
    let obj = await getPageDetail(link)
    list.push(obj)
    const ArticleList = mongoose.model('articleList')
    let res = await ArticleList.findOne({ 'title': obj.title })
    if (!res) {

      let oneNew = new ArticleList(obj)
      await oneNew.save()
    }
  }
}

module.exports = { getData }
