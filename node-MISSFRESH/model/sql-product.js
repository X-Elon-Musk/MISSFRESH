
//操作备产品数据库
var Sql_product=function () {};
Sql_product.prototype={
    constructor: Sql_product,
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

export default new Sql_product();