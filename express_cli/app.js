// 引用各種套件
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');


// 引用路由檔，引入路線建設藍圖
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup 視圖引擎設置
// 設定樣板引擎為ejs和撈起檔案位置，path.join(__dirname, 'views')是去拿到絕對位置的資料夾views。在伺服器使用絕對位置非常重要！__dirname是專案檔案位置，path.join則是可以將專案檔案位置後的views結合成絕對位置輸出
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// 引用套件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({  //伺服器會幫忙把絕對位置的public內的sass/scss檔案自動轉譯css
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));


// 將public設定成公開檔案，沒有製作路線也能輕鬆找到～輸入網址接資料夾名稱和檔案名稱就能被找到
app.use(express.static(path.join(__dirname, 'public')));


// // 設定網站路由，也就是路線！藉由上方引入的路線藍圖搭配這邊的設定的引導路線圖組合成整個路線
app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler 捕獲 404 並轉發給錯誤處理程序
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler 錯誤處理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development 設置本地端，供開發石的錯誤處理
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page  渲染錯誤頁面
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
