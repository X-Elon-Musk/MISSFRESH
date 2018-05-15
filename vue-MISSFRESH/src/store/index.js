import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

var state={
	cartList: {},//购物车商品列表
}

export default new Vuex.Store({
	state,
	mutations
})