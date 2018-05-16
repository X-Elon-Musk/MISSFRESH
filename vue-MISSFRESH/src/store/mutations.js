import {setStore, getStore} from '../config/mUtils'

export default {
	ADD_CART: (state,{id,image,name,product_tags,price_up,price_down})=>{
		let cart=state.cartList;
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
		state.cartList = {...cart};
		//存入localStorage
		setStore('buyCart', state.cartList);
	},
	REDUCE_CART: (state,{id})=>{
		let cart=state.cartList;
		if (cart[id]) {
			if (cart[id]['num']>0) {
				cart[id]['num']--;	
				cart[id]['total_price']=cart[id]['num']*parseFloat(cart[id]['price_down']['price']);	
				state.cartList = {...cart};
				setStore('buyCart', state.cartList);	
			} else{
				cart[id]=null;
			}
		}
	},
	SET_STATUS: (state,{id})=>{
		let cart=state.cartList;
		if (cart[id]) {
			cart[id]['status']=!cart[id]['status'];	
			state.cartList = {...cart};
			setStore('buyCart', state.cartList);	
		}
	}
}