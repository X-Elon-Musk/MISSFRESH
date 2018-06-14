import {baseUrl} from './env.js'
import axios from 'axios'

export default async(url='', parameter={}, type='get')=>{
	type=type.toLowerCase();
	if (type=='get') {
		/*let params={};
		Object.keys(parameter).forEach(key => {
			params[key]=parameter[key];
		})
		axios.get(baseUrl+url,{
			params: {...params}
		})
		.then(function (response) {

		})
		.catch(function (error) {
		  	console.log(error);
		});	*/


		let result=await new Promise((resolve, reject) =>{
			/*connection.query(sql,params,function (err,result) {
				if(err){
	              	reject(err)
	            }
	            resolve(result)	
			})*/

			let params={};
			Object.keys(parameter).forEach(key => {
				params[key]=parameter[key];
			})
			axios.get(baseUrl+url,{
				params: {...params}
			})
			.then(function (response) {
				resolve(response)	
			})
			.catch(function (error) {
				reject(err)
			});	

	    })	
	    return result;	
	} else{

	}
		
}