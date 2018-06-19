import {baseUrl} from './env.js'
import axios from 'axios'

export default async(url='', parameter={}, type='get')=>{
	type=type.toLowerCase();
	if (type=='get') {
		let result=await new Promise((resolve, reject) =>{
			let params={};
			if (parameter) {
				Object.keys(parameter).forEach(key => {
					params[key]=parameter[key];
				})			
			}
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
	    return result.data;	
	} else if(type=='post'){
		let result=await new Promise((resolve, reject) =>{
			let params={};
			if (parameter) {
				Object.keys(parameter).forEach(key => {
					params[key]=parameter[key];
				})			
			}
			axios.post(baseUrl+url,{
				...params
			}, {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
			.then(function (response) {
				resolve(response)	
			})
			.catch(function (error) {
				reject(err)
			});	

	    })	
	    // console.log(result.data);
	    return result.data;	
	}
}