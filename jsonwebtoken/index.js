const jwt = require('jsonwebtoken')
const http = require('http')
const secret = "amy"



// 加密測試
var token = jwt.sign(
    {
        data: "Amy", // 被加密的數據
    },
    "anydata", // 密鑰
    { expiresIn: "10s" } //過期時間
);
console.log("加密："+token);



// 解密測試
var decoded = jwt.verify(token, "anydata");
console.log("解密："+decoded);



// 期效測試
// setTimeout(() => {
//     var decoded = jwt.verify(token, "anydata");
//     console.log(decoded);
// }, 9000);

// setTimeout(() => {
//     var decoded = jwt.verify(token, "anydata");
//     console.log(decoded);
// }, 11000);


// ================================
// jwt封裝
const JWT = {
    // 生成token
    generate(value, expires) {
        return jwt.sign({
            value
        }, secret, { expiresIn: expires });
    },
    // 校驗token
    verify(token) {
        try {
            return jwt.verify(token, secret);
        } catch {
            return false
        }
    }
}



// ================================
// const app = http.createServer((res, req) => {
// })

// app.listen(3002)