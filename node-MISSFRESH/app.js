'use strict';


var express = require("express");
var app = express();
// var router=require('./router/index.js');
var session =require('express-session');
import Location from './router/location.js'
//使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
  

// router(app);
app.get('/sql',Location.sql);
// app.get('/sql',function (req,res) {
//     // res.send('测试数据');
//     var obj={
//         'text': '测试数据'
//     };
//     res.type('application/json');
//     res.jsonp(obj);
// });

app.listen(3390);
app.listen(app.get('port'), function () {
    console.log('======启动服务======');
});
