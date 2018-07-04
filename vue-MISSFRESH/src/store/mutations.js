import {setStore, getStore, removeStore} from '../config/mUtils'

export default {
	// 初始数据
	INIT_CARTLIST: (state)=>{
		let cartList=JSON.parse(getStore('cartList'));
		if (cartList) state.s_cartList={...cartList};
	},
	// 添加购物车
	ADD_CART: (state,{id,image,name,product_tags,price_up,price_down})=>{
		let cart = state.s_cartList;
		if (cart[id]) {
			cart[id]['num']++;		
			cart[id]['total_price']=cart[id]['num']*parseFloat(price_down);		
		} else{
			cart[id] = {
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
				// 状态，是否选中
				"status": true
			}
		}
		state.s_cartList = {...cart};
		// 存入localStorage
		setStore('cartList', state.s_cartList);
		//  console.log(this);
		this.a.SET_CARTNUMBER(state,state.s_cartList);
	},
	// 减少购物车
	REDUCE_CART: (state,{id})=>{
		state.s_cartList={...JSON.parse(getStore('cartList'))};

		let cart = state.s_cartList;
		if (cart[id]) {
			if (cart[id]['num']>0) {
				
				if (cart[id]['num']==1&&state.s_mpromptExist) {
					console.log('删除');
					state.s_mpromptStatus=true;	
					return;
				}
				cart[id]['num']--;
				cart[id]['total_price']=cart[id]['num']*parseFloat(cart[id]['price_down']['price']);	
				state.s_cartList = {...cart};
				setStore('cartList', state.s_cartList);	
				this.a.SET_CARTNUMBER(state,state.s_cartList);
			} else{
				cart[id]=null;
			}
		}
	},
	// 删除购物车中单个商品
	DELETE_CART: (state,{id})=>{
		let cart = state.s_cartList;
		if (cart[id]) {
			delete cart[id];
			state.s_cartList = {...cart};
			setStore('cartList', state.s_cartList);	
			this.a.SET_CARTNUMBER(state,state.s_cartList);
		}
	},
	// 设置单个商品在购物车中状态，是否被选中
	SET_STATUS: (state,{id})=>{
		let cart=state.s_cartList;
		if (cart[id]) {
			cart[id]['status']=!cart[id]['status'];	
			state.s_cartList = {...cart};
			setStore('cartList', state.s_cartList);	
		}
	},
	// 设置购物车商品总数量
	SET_CARTNUMBER: (state,cartList)=>{
		let num = 0;
		Object.values(cartList).forEach((item,index) => {
	    	num += item.num;
	    })
	    state.s_cartCount = num;
		setStore('cartCount', state.s_cartCount);
	},
	// 设置是否显示提示内容
	SET_MPROMPTEXIST: (state,{status})=>{
		state.s_mpromptExist = status;
		setStore('s_mpromptExist', state.s_mpromptExist);	
	},
	// 设置提示内容的状态
	SET_MPROMPT: (state,{status})=>{
		state.s_mpromptStatus = status;
		setStore('s_mpromptStatus', state.s_mpromptStatus);	
	},
	// 设置城市信息，存入store和localStorage
	SET_POSITION: (state,{type, city={}, building={}, location={}, position={}, station={}})=>{
		let region = state.s_choseRegion;

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

		let parameter = {
			city: city||{},
			building: building||{},
			location: location||{},
			position: position||{},
			station: position||{}
		}
		Object.keys(parameter).forEach(key => {
			if(JSON.stringify(parameter[key])!=="{}"){
				region[key]=region[key]||{};
				Object.keys(parameter[key]).forEach(parameter_key => {
					region[key][parameter_key]=parameter[key][parameter_key];
				})
			}
		})
		if (type==0&&JSON.stringify(region)!=="{}") {
			Object.keys(region).forEach(key => {
				if(key!=='city'&&JSON.stringify(region[key])!=="{}"){
					Object.keys(region[key]).forEach(region_key => {
						region[key][region_key]='';
					})			
				}
			})				
		}
		let currentcity = parameter['city']&&parameter['city']['name'],
		choseaddress = parameter['building']&&parameter['building']['name'] || parameter['city']&&parameter['city']['name'];
		state.s_choseRegion = {...region};
		state.s_currentCity = state.s_currentCity||currentcity;
		state.s_choseCity = currentcity;
		state.s_choseAddress = choseaddress;

		// 存入localStorage
		setStore('choseRegion', state.s_choseRegion);
		setStore('currentCity', state.s_currentCity);
		setStore('choseCity', state.s_choseCity);
		setStore('choseAddress', state.s_choseAddress);
	},
	// 设置选择的城市
	SET_CHOSECITY: (state,{choseCity})=>{
		state.s_choseCity = choseCity;
		setStore('choseCity', choseCity);	
	},
	// 设置当前城市
	SET_CURRENTCITY: (state,{currentCity})=>{
		state.s_currentCity = currentCity;
		setStore('currentCity', currentCity);	
	},
	// 设置配送的类型
	SET_VIEWTYPE: (state,{is_chrome_city, ordering})=>{
		// 配送方式
		if (state.s_choseCity===state.s_choseAddress) {
			is_chrome_city == 1 && ordering > 90 ? state.s_viewType = 1 : state.s_viewType = 2;	
		} else{
			state.s_viewType = 0;	
		}

	},
	// 设置用户信息和登录情况
	SET_USERINFO: (state,{info})=>{
		// state.s_userInfo=info;
		state.s_userInfo={...info};
		state.s_login=true;
		setStore('userId', info.userId);
		setStore('accessToken', info.accessToken);
		// setStore('accessToken', info.userId);
		console.log(state);
	},
	// 退出登录
	OUT_LOGIN: (state)=>{
		state.s_userInfo={};
		state.s_login=false;
		// removeStore('userId');
		removeStore('accessToken');
	},
}

/*//设置购物车商品总数量
let	SET_CARTNUMBER=(state, {cartList})=>{
	let num = 0;
    Object.values(cartList).forEach((item,index) => {
    	num += item.num;
    })
    state.s_cartCount = num;
	setStore('cartCount', state.s_cartCount);
};*/