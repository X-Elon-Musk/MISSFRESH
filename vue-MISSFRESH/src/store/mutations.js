import {setStore, getStore} from '../config/mUtils'

export default {
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
	SET_STATUS: (state,{id})=>{
		let cart=state.s_cartList;
		if (cart[id]) {
			cart[id]['status']=!cart[id]['status'];	
			state.s_cartList = {...cart};
			setStore('buyCart', state.s_cartList);	
		}
	},
	SET_MPROMPT: (state,{status})=>{
		state.s_mpromptStatus=status;
		setStore('s_mpromptStatus', state.s_mpromptStatus);	
	}
}