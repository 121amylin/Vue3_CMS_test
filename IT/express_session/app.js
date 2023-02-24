const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 連接數據庫
app.use(
  session({
    name: "Amy",
    secret: '123456',
    cookie: {
      maxAge: 60 * 1000,
      secure: false,
    },
    store: MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1:27017/sessiondb',
      ttl: 1000 * 60 * 60,
    }),
    resave: false,
    saveUninitialized: true
  })
)


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
