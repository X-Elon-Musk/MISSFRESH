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



app.get('/test',router.test);

app.listen(3390);
app.listen(app.get('port'), function () {
    console.log('node-note');
});
