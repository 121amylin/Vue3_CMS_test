var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id': () => {
            return Mock.mock('@id')
        },
        'name': () => {
            return Mock.Random.cname()
        },
        'enname': () => {
            return Mock.mock('@name')
        },
        'email': () => {
            return Mock.mock('@email')
        },
        'url': () => {
            return Mock.mock('@url')
        },
        'sentence': () => {
            return Mock.mock('@csentence')
        }
    }]
})

const http = require('http')
const server = http.createServer()
server.on('request', (request, res) => {
    res.writeHead(200, {
        'Coontent-Type': 'application/json;charset=utf-8',
        'access-control-allow-origin': '*'
    })
    res.end(JSON.stringify({
        data
    }))
})
server.listen(4000)