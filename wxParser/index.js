let wxParser = require('./wxparser');

function richTextParser(html) {
  let nodes = wxParser.parse(html)

  function converseNode(node) {
    let newNode = {}
    if (node.node == 'text') {
      newNode.type = 'text'
      newNode.text = node.text
    } else {
      newNode.name = node.tag
      newNode.attrs = {
        class: node.classStr || '',
        style: node.styleStr || ''
      }
    }
    if (node.nodes && node.nodes.length) {
      newNode.children = node.nodes.map(item => {
        return converseNode(item)
      })
    }
    return newNode
  }

  let conversedNode = nodes.map(item => {
    return converseNode(item)
  })

  return conversedNode
}

module.exports = richTextParser

