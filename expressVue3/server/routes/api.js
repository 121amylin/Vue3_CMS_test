var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function (req, res, next) {
  res.send({
    aaa: 111,
    bbb: 222
  })
})
router.post('/login', function (req, res, next) {
  const { name, login } = req.body

  if (name === 'admin' && login === '123456') {
    // console.log(1)
    res.send({
      aaa: 111,
      bbb: 222
    })
  } else {
    // console.log(2)
    res.send({
      ok: 0
    })
  }
})
module.exports = router;
