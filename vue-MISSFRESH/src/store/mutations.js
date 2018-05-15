import {setStore, getStore} from '../config/mUtils'

export default {
	ADD_CART: (state,{id})=>{
		let cart=state.cartList;
		if (cart[id]) {
			cart[id]['num']++;		
		} else{
			cart[id]={
				'num': 1,
				'id': id
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
				state.cartList = {...cart};
				//存入localStorage
				setStore('buyCart', state.cartList);	
			} else{
				cart[id]=null;
			}
		}
		
	},
}