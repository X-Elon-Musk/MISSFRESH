'use strict';


var express = require("express");
var app = express();
var session =require('express-session');


import router from './router/index.js';

//使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

//静态。(设置Response Headers请求头的Cache-Control为max-age=7200)
app.use(express.static("./public",{
    maxage: '30d'
}));

app.get('/public/images/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
    console.log("Request for " + req.url + " received.");
})

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router(app);


let server = app.listen(3390, 'localhost', function () {
    console.log("地址信息:",server.address());
    const host = server.address().address;
    const port = server.address().port;
    console.log("======启动服务http://%s:%s======", host, port);
})