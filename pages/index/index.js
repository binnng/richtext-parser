const richTextParser = require('../../richTextParser/index')

let html = '<p>这是一段<b>加粗文本</b></p>'

Page({
  data: {},
  onLoad: function () {
    this.setData({
      nodes: richTextParser(html)
    })
  }
})
