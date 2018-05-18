import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

var state={
	s_currentRegion: {},//当前区域信息
	s_cartList: {},//购物车商品列表
	s_mpromptStatus: false,//提示信息的状态
}

export default new Vuex.Store({
	state,
	mutations
})