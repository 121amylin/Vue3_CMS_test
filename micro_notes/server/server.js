const http = require('http');
const url = require('url')
http.createServer(function (request, response) {
    let urlObj = url.parse(request.url, true)
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8', 'Access-Control-Allow-Orinin': '*'
    });

    // response.writeHead(200, { 
    //     'Content-Type': 'application/jsom;charset=utf-8', 'Access-Control-Allow-Orinin': '*' 
    // });

    // 发送响应数据 "Hello World"

    switch (urlObj.pathname) {
        case '/api/login':
            response.end(JSON.stringify({
                message: "ok"
            }));
            break
        case '/api/notes':
            response.end(JSON.stringify({
                message: "notes"
            }));
            break
        default:
            response.end("沒有內容!");
    }
    // response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');