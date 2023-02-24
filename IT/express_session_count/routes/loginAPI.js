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

    //如果輸入的,在session store已有儲存..
    if (req.body.username == req.session.username
      && req.body.password == req.session.password) {
      req.session.time++; //同一連線的登入次數, 就加 1

      console.log(req.session.time)
      //  res.render('index', { count: req.session.time });    //就直接導向到...
      res.render('index', { title: req.body.username, count: req.session.time });
    }
    //session store裡沒有的，就會重新設置
    else {
      req.session.username = req.body.username;
      req.session.password = req.body.password;
      req.session.time = 1;
      console.log(req.session.time)
      res.render('index', { title: req.body.username, count: req.session.time });
    }

    // res.redirect('/login')
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
