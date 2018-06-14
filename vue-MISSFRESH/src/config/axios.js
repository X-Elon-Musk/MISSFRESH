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
	    // console.log(result.data);
	    return result.data;	
	    // return result;	
	} else{
		console.log(222);
	}
}


/*let Axios=function () {};
Axios.prototype={
	constructor: Axios,
	async axios_(url='', parameter={}, type='get'){
		type=type.toLowerCase();
		if (type=='get') {
			let result=await new Promise((resolve, reject) =>{
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
		    console.log(result.data);
		    return result.data;	
		} else{
			console.log(222);
		}
	}
}
export default new Axios();*/