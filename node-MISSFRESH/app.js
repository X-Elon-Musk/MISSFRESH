var express = require("express");
var app = express();
var router=require('./router/router.js');
var session =require('express-session');

//使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

//设置模板引擎
// app.set("view engine", "ejs");

//静态。(设置Response Headers请求头的Cache-Control为max-age=7200)
app.use(express.static("./public",{
   maxage: '30d'
}));
// app.use(express.static("./public"));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/test',router.test);
app.get('/sql',router.sql);

app.listen(3390);
app.listen(app.get('port'), function () {
    console.log('======启动服务======');
});
