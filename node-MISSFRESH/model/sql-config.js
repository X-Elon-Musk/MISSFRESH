var mysql=require('mysql');
var connection=mysql.createConnection({
	host: '39.104.65.227',
	user: 'root',
	password: 'Beijing@0983',
	database: 'missfresh'
})

connection.connect();
var Mysql=function () {};
Mysql.prototype={
	constructor: Mysql,
	async mysql_(sql,params){
		var result=await new Promise((resolve, reject) =>{
			connection.query(sql,params,function (err,result) {
				if(err){
	              	reject(err)
	            }
	            resolve(result)	
			})
	    })
	    return result;
	}
}
export default new Mysql();