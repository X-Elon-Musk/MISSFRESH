let mysql=require('mysql');
let connection=mysql.createConnection({
	host: '39.104.65.227',
	user: 'root',
	password: '************',
	database: 'missfresh',
	useConnectionPooling: true
})

connection.connect();

export default class Mysql{
	constructor(){
		this.mysqlAnalysis=this.mysqlAnalysis.bind(this);
	}
	async mysqlAnalysis(sql,params){
		let result=await new Promise((resolve, reject) =>{
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
