var formidable=require('formidable');

var mysql=require('../model/sql-config.js').mysql;
var md5=require('../model/md5.js');
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
/*const accessKeyId = 'LTAINkfU7xNmo0qb'
const secretAccessKey = 'WNce8J1x0TQFkb57jYOnXW2xyM8pD7'*/


/*//操作备产品数据库
var Product_sql=function () {};
Product_sql.prototype={
    constructor: Product_sql,
    init: function () {
        
    },
    selectAll: function (column,condition,additional) {
        return 'select '+column+' from products where '+condition+'=?'+additional;
    },
    insert: function (user_id,text,time) {
        return 'insert into notes('+user_id+','+text+','+time+') values(?,?,?)';
    },
    select: function (column,condition,additional) {
        if (!additional) additional=''; 
        return 'select '+column+' from notes where '+condition+'=?'+additional;
    },
    //模糊查找
    select_fuzzy: function (text,column) {
        if (!column) column='*';
        return 'select '+column+' from notes where '+text+' like concat("%",?,"%") and user_id=?'  
    },
    update: function (condition) {
        return 'update notes set time=?,text=? where '+condition+'=?';
    },
    delete: function (condition) {
        return 'delete from notes where '+condition+'=?';   
    },
    //删除后显示下一条信息
    delete_select: function () {
        return 'select * from notes where id=(select min(id) from notes where id>? and user_id=?)';
    }
}*/

//操作备产品数据库
var Product_sql=function () {};
Product_sql.prototype={
    constructor: Product_sql,
    init: function () {
        
    },
    selectAll: function () {
        return 'select * from products';
    },
    insert: function (user_id,text,time) {
        return 'insert into notes('+user_id+','+text+','+time+') values(?,?,?)';
    },
    select: function (column,condition,additional) {
        if (!additional) additional=''; 
        return 'select '+column+' from notes where '+condition+'=?'+additional;
    },
    //模糊查找
    select_fuzzy: function (text,column) {
        if (!column) column='*';
        return 'select '+column+' from notes where '+text+' like concat("%",?,"%") and user_id=?'  
    },
    update: function (condition) {
        return 'update notes set time=?,text=? where '+condition+'=?';
    },
    delete: function (condition) {
        return 'delete from notes where '+condition+'=?';   
    },
    //删除后显示下一条信息
    delete_select: function () {
        return 'select * from notes where id=(select min(id) from notes where id>? and user_id=?)';
    }
}

var product_sql=new Product_sql();



exports.test=function (req,res) {
    // res.send('测试数据');
    var obj={
        'text': '测试数据'
    };
    res.type('application/json');
    res.jsonp(obj);
}
exports.sql=function (req,res) {
    mysql(product_sql.selectAll(),function (err,result) {
        console.log(result);
        res.type('application/json');
        res.jsonp(result);
    })
}
    

//获取当前时间
function getNowFormatDate(date) {
    var seperator=":";
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var currentdate=year+"年"+month+"月"+day+"日"+date.getHours()+seperator+date.getMinutes();
    return currentdate;
}
//改变电话号码显示效果
function telephone_change(telephone) {
    var new_telephone=telephone.substr(0,3)+'****'+telephone.substr(7);
    return new_telephone;
}
//生成随机短信验证码
function createParam() {
    var param='';
    for (var i=0;i<6;i++) {
        param+=Math.floor(Math.random()*10);
    }  
    return param;
}






    



