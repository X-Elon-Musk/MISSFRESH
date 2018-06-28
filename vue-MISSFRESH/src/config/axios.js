import {baseUrl} from './env.js'
import axios from 'axios'

export default async(url='', parameter={}, type='get')=>{
	type=type.toLowerCase();
	let params={},result;
	if (parameter) {
		Object.keys(parameter).forEach(key => {
			params[key]=parameter[key];
		})			
	}
	if (type=='get') {
		result=await new Promise((resolve, reject) =>{
			/*let params={};
			if (parameter) {
				Object.keys(parameter).forEach(key => {
					params[key]=parameter[key];
				})			
			}*/
			axios.get(baseUrl+url,{
				params: {...params}
			})
			.then(function (response) {
				resolve(response)	
			})
			.catch(function (error) {
				reject(error)
			});	

	    })	
	    return result.data;	
	} else if(type=='post'){
		// console.log(params);
		result=await new Promise((resolve, reject) =>{
			/*let params={};
			if (parameter) {
				Object.keys(parameter).forEach(key => {
					params[key]=parameter[key];
				})			
			}*/
			axios.post(baseUrl+url,{
				...params
			}, {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
			.then(function (response) {
				// console.log('正确');
				resolve(response)	
			})
			.catch(function (error) {
				// console.log('错误');
				reject(error)
			});	

	    })	
	    // console.log(result.data);
	    return result.data;	
	}
}