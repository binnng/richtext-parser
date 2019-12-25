# richtext-parser

小程序richtext解析器

## demo

```js
let richTextParser = require('../../wxParser/index')

let html = '<p>这是一段<b>加粗文本</b></p>';

Page({
  data: {},
  onLoad: function () {
    this.setData({
      nodes: richTextParser(html)
    })
  }
})
```

## 参考

- [https://github.com/pacochan/wxParser](https://github.com/pacochan/wxParser)
- [https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)
