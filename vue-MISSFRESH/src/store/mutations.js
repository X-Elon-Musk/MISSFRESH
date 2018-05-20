import {setStore, getStore} from '../config/mUtils'

export default {
	/*constructor(){
		this.POSITION_ANALYSIS=this.POSITION_ANALYSIS.bind(this);
	},*/
	//添加购物车
	ADD_CART: (state,{id,image,name,product_tags,price_up,price_down})=>{
		let cart=state.s_cartList;
		if (cart[id]) {
			cart[id]['num']++;		
			cart[id]['total_price']=cart[id]['num']*parseFloat(price_down);		
		} else{
			cart[id]={
				"num": 1,
				"id": id,
				"image": image,
				"name": name,
				"product_tags": product_tags,
				"price_up": {
					"price": price_up
				},
				"price_down": {
					"price": price_down
				},
				"total_price": price_down,
				//状态，是否选中
				"status": true
			}
		}
		state.s_cartList = {...cart};
		//存入localStorage
		setStore('buyCart', state.s_cartList);
	},
	//减少购物车
	REDUCE_CART: (state,{id})=>{
		let cart=state.s_cartList;
		if (cart[id]) {
			if (cart[id]['num']>0) {
				cart[id]['num']--;
				if (cart[id]['num']==0) state.s_mpromptStatus=true;	
				cart[id]['total_price']=cart[id]['num']*parseFloat(cart[id]['price_down']['price']);	
				state.s_cartList = {...cart};
				setStore('buyCart', state.s_cartList);	
			} else{
				cart[id]=null;
			}
		}
	},
	//设置单个商品在购物车中状态，是否被选中
	SET_STATUS: (state,{id})=>{
		let cart=state.s_cartList;
		if (cart[id]) {
			cart[id]['status']=!cart[id]['status'];	
			state.s_cartList = {...cart};
			setStore('buyCart', state.s_cartList);	
		}
	},
	//设置提示内容的状态
	SET_MPROMPT: (state,{status})=>{
		state.s_mpromptStatus=status;
		setStore('s_mpromptStatus', state.s_mpromptStatus);	
	},
	//设置城市信息，存入store和localStorage
	SET_POSITION: (state,{type, city={}, building={}, location={}, position={}, station={}})=>{
		let region=state.s_choseRegion;
		/*let keys=['city', 'building', 'location', 'position', 'station'];
		console.log(arguments);
		console.log(city);
		
		Object.keys(arguments).forEach(key => {
			if(JSON.stringify(arguments[key])!=="{}"){
				Object.keys(arguments).forEach(argument_key => {
					region[keys[key]][argument_key]=arguments[key][argument_key];
				})
			}
		})*/

		/*
		region={
			building:{
				name: building_name||"", 
				address: building_address||""
			},
			city:{
				id: city_id||"", 
				name: city_name||"", 
				province: city_province||"", 
				district: city_district||""
			},
			location:{
				lat: location_lat||"",
				lan: location_lan||""
			},
			position:{
				lat: position_lat||""
			},
			station:{
				id: station_id||""
			},
		}*/

		let parameter={
			city: city||{},
			building: building||{},
			location: location||{},
			position: position||{},
			station: position||{}
		}
		/*if (type==0) {
			
			if(JSON.stringify(region)!=="{}"){
				Object.keys(region).forEach(key => {
					if(JSON.stringify(region[key])!=="{}"){
						Object.keys(region[key]).forEach(region_key => {
							region[key][region_key]='';
						})			
					}
				})	
			}
						
		} else if(type==1){
			state.s_currentCity = state.s_currentCity||currentcity;	
		}*/


		/*console.log('=================');
		console.log(type);
		console.log(parameter);
		console.log('=================');*/

		Object.keys(parameter).forEach(key => {
			if(JSON.stringify(parameter[key])!=="{}"){
				region[key]=region[key]||{};
				Object.keys(parameter[key]).forEach(parameter_key => {
					region[key][parameter_key]=parameter[key][parameter_key];
				})
			}
		})
		if (type==0&&JSON.stringify(region)!=="{}") {
			// if(JSON.stringify(region)!=="{}"){
				Object.keys(region).forEach(key => {
					if(key!=='city'&&JSON.stringify(region[key])!=="{}"){
						Object.keys(region[key]).forEach(region_key => {
							region[key][region_key]='';
						})			
					}
				})	
			// }			
		}
		console.log(region);
		let currentcity=parameter['city']&&parameter['city']['name'];
		let choseaddress=parameter['building']&&parameter['building']['name'] || parameter['city']&&parameter['city']['name'];
		state.s_choseRegion = {...region};
		state.s_currentCity = state.s_currentCity||currentcity;
		state.s_choseCity = currentcity;
		state.s_choseAddress = choseaddress;
		//存入localStorage
		setStore('choseRegion', state.s_choseRegion);
		setStore('currentCity', state.s_currentCity);
		setStore('choseCity', state.s_choseCity);
		setStore('choseAddress', state.s_choseAddress);





		/*let parameter={
			city: city||{},
			building: building||{},
			location: location||{},
			position: position||{},
			station: position||{}
		}
		console.log(parameter);
		// return;
		Object.keys(parameter).forEach(key => {
			if(JSON.stringify(parameter[key])!=="{}"){
				region[key]=region[key]||{};
				Object.keys(parameter[key]).forEach(parameter_key => {
					// console.log(parameter_key);
					region[key][parameter_key]=parameter[key][parameter_key];
				})
			}
		})
		console.log('=================');
		console.log(region);
		console.log('=================');



		let currentcity=region['city']&&region['city']['name'];
		let choseaddress=region['building']&&region['building']['name'] || region['city']&&region['city']['name'];
		state.s_choseRegion = {...region};
		if (type==0) {
			state.s_currentCity = state.s_currentCity||currentcity;			
		} else if(type==1){
			state.s_currentCity = state.s_currentCity||currentcity;	
		}
			
		state.s_currentCity = state.s_currentCity||currentcity;
		state.s_choseCity = currentcity;
		state.s_choseAddress = choseaddress;
		//存入localStorage
		setStore('choseRegion', state.s_choseRegion);
		setStore('currentCity', state.s_currentCity);
		setStore('choseCity', state.s_choseCity);
		setStore('choseAddress', state.s_choseAddress);
		return;



		POSITION_ANALYSIS(region, 'city', city);
		POSITION_ANALYSIS(region, 'building', building);
		POSITION_ANALYSIS(region, 'location', location);
		POSITION_ANALYSIS(region, 'position', position);
		POSITION_ANALYSIS(region, 'station', station);

		
		let currentcity=region['city']&&region['city']['name'];
		let choseaddress=region['building']&&region['building']['name'] || region['city']&&region['city']['name'];
		state.s_choseRegion = {...region};
		state.s_currentCity = state.s_currentCity||currentcity;
		state.s_choseCity = currentcity;
		state.s_choseAddress = choseaddress;
		//存入localStorage
		setStore('choseRegion', state.s_choseRegion);
		setStore('currentCity', state.s_currentCity);
		setStore('choseCity', state.s_choseCity);
		setStore('choseAddress', state.s_choseAddress);*/
		// setStore('currentRegion', state.s_currentRegion);
		// }
	},
	//设置选择的城市
	SET_CHOSECITY: (state,{choseCity})=>{
		state.s_choseCity=choseCity;
		setStore('choseCity', choseCity);	
	},
	//设置当前城市
	SET_CURRENTCITY: (state,{currentCity})=>{
		state.s_currentCity=currentCity;
		setStore('currentCity', currentCity);	
	},
}
//解析地址参数
let POSITION_ANALYSIS=(region, region_key, parameters)=>{
	// console.log(parameters);
	if(parameters&&JSON.stringify(parameters)!=="{}"){
		region[region_key]={};
		Object.keys(parameters).forEach(key => {
			region[region_key][key]=parameters[key];
		})
	}
}