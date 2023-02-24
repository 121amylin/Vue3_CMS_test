var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('login')
});

router.post('/success', function (req, res, next) {
  const { username, password } = req.body
  if (username === 'admin' && password === '123') {
    res.send({ ok: 1 })
  } else {
    res.send({ ok: 0 })
  }
});


module.exports = router;

// http://localhost:3000/users/loginsuccess
