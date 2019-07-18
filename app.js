
const rq = require('request-promise')
const cheerio = require('cheerio')

const mongoose = require('mongoose')
const TurndownService = require('turndown')

const turndownService = new TurndownService()

const { initSchema, connect } = require('./database/init')

const { getData } = require('./getNews')


 
const sfOption = {
  uri: 'https://segmentfault.com/hottest',
  json: true
}

  
  
//获取文章详情页数据
const sfDetail = async (url,imgSrc) => {
  let str = await rq({ url })
  const $ = cheerio.load(str)
  let title = $('#articleTitle').find('a').text()
  let author = $('.article__authormeta').find('strong').text()
  let authorImg = $('.article__authorleft').find('img').attr('src')
  let html = $('.article__content').html()
  let content = turndownService.turndown(html)
  return {
    title,
    authorImg,
    desImg: imgSrc,
    author,
    content
  }
}
  
//获取文章列表
let getsf = async () => {
  const data = await rq(sfOption)
  const $ = cheerio.load(data)
  const list = []
  let arr = $('.news-item')
  console.log(arr.length)
  // const newsSchema = mongoose.model('news')
  for (let i = 0; i < arr.length; i++) {
    let item = $(arr[i])
    let link = item.find('a[target="_blank"]').attr('href')
    link = 'https://segmentfault.com' + link
    console.log(link,"------------------")
    let title = item.find('.news__item-title').text()
    
    let imgSrc = item.find('.news-img').attr('style')
    if (imgSrc) {
      imgSrc = imgSrc.match(/^background-image:url\((\S*)\)$/)[1]
    }
    let des = item.find('.article-excerpt').text()
    try {
      let obj = await sfDetail(link, imgSrc)
      // list.push(obj)
      obj.des = des
      const sfHotDay = mongoose.model('sfHotDay')
      let res = await sfHotDay.findOne({ 'title': obj.title })
      if (!res) {

        let oneNew = new sfHotDay(obj)
        await oneNew.save()
      }
    } catch (error) {
      console.log(error)
    }
  }
}
  ; (async () => {
    initSchema()
    await connect()
    getsf()
    getData()
    let timer =null
    clearInterval(timer)
    timer = setInterval(() => {
      getData()
    },1000*60*60)
  })()
