let richTextParser = require('../../wxParser/index')

let html = '<p>这是一段<b>加粗文本</b></p>'

Page({
  data: {},
  onLoad: function () {
    this.setData({
      nodes: richTextParser(html)
    })
  }
})
