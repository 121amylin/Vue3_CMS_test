const express = require('express');
const router = express.Router();

// 驗證function
function auth(req, res, next) {
  if (req.session.user) {
    console.log('authenticated')
    next()
  } else {
    console.log('not authenticated')
    return res.redirect('/')
  }
}

// 資料庫用戶
const users = [
  {
    username: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    username: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  //...後略
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
});


router.post('/login', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.body)
  const { username, password } = req.body

  if (username === '' || password === '') {
    res.redirect('/')
  }

  for (let user of users) {
    if (user.username === username && user.password === password) {
      req.session.user = user.firstName
      res.redirect('/welcome')
    }
  }

  res.redirect('/')

});


router.get('/welcome', auth, (req, res) => {
  return res.render('welcome')
})

module.exports = router;
