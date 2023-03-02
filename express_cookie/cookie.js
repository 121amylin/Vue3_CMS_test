var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser("amy")) // 設置 cookie 密鑰

app.get('/', function (req, res) {
    console.log(req.cookies);  // 獲取沒有簽名前端 cookie
    console.log(req.signedCookies);  // 獲取前端含有簽名的 cookie
    res.cookie('aaa', '1111') // 給前端設置沒有簽名的 cookie
    res.cookie('bbb', '2222') // 給前端設置沒有簽名的 cookie
    res.cookie('ccc', '2222', { signed: true, maxAge: 1000 }) // 給前端設置簽名的 cookie
    res.clearCookie('aaa') // 刪除前端的cookie，aaa
    res.clearCookie() // 不是刪除前端的所有cookie；而是什麼都沒刪除
    res.send({ ok: 1 })
})

app.listen(8080)




// ============================================

// 前端設置 cookie
// document.cookie = "username=John Doe";