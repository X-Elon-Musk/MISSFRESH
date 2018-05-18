import {setStore, getStore} from '../config/mUtils'

export default {
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
	SET_POSITION: (state,{city_id,city_name,city_province,city_district,building_name,building_address,location_lat,location_lan,position_lat,station_id})=>{
		let region=state.s_currentRegion;
		// if (region[city]) {
		// 	region[city]={
		// 		id: city_id, 
		// 		name: city_name, 
		// 		province: city_province, 
		// 		district: city_district
		// 	}
		// } else{
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
			}
		// }
		state.s_currentRegion = {...region};
		//存入localStorage
		setStore('currentRegion', state.s_currentRegion);
	},
}