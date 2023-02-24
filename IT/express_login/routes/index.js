var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(req.signedCookies.username)
  const { username, password } = req.signedCookies
  if (username === "admin" && password === "123") {
    res.render('index', { username: req.signedCookies.username });
  }else{
    res.redirect('/users/Loginfailed')
  }
});

module.exports = router;
