var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.signedCookies)
  const { username, password } = req.signedCookies
  if (username === "admin" && password === "123") {
    res.render('index', { title: username, logstatus: true })
  } else {
    res.send('登入失敗')
  }
  res.send('login success');
});
router.post('/post', function (req, res, next) {
  const { username, password } = req.body
  if (username === "admin" && password === "123") {
    res.cookie('username', username, {
      signed: true,
      maxAge: 600000
    })
    res.cookie('password', password, {
      signed: true,
      maxAge: 600000
    })
    res.redirect('/login')
  } else {
    res.redirect('/cookie/login.html')
  }
});

router.get('/logout', function (req, res, next) {
  res.clearCookie('username');
  res.clearCookie('password');
  return res.redirect('/cookie/login.html');
});


module.exports = router;
