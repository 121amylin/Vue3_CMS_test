var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // console.log(req.params)
  res.send('respond with a resource');
});
router.get('/login', function (req, res, next) {
  res.render('login')
});
router.post('/loginsuccess', function (req, res, next) {
  const { username, password } = req.body
  if (username === "admin" && password === "123") {

    res.cookie('username', username, { signed: true, maxAge: 600000 }); //set cookie，需要配合 app.use(cookieParser("123"));設置
    res.cookie('password', password, { signed: true, maxAge: 600000 }); //set cookie，需要配合 app.use(cookieParser("123"));設置
    res.redirect('/')
  } else {
    res.redirect('./Loginfailed')
  }
});

router.get('/Loginfailed', (req, res) => {
  res.render('Loginfailed')
  // 行不通
  // res.send(`
  // 帳號或密碼不正確!
  // `)
  // setTimeout(() => {
  //   res.redirect('/cookie/login.html')
  // }, 2000)
})


router.get('/logout', function (req, res, next) {
  // console.log(req.params)
  res.clearCookie('username');
  res.clearCookie('password');
  res.render('logout')
});
module.exports = router;
