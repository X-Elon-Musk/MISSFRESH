import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

var state={
	s_choseRegion: {},//选择的区域信息，第一次刷新页面时获得的是当前位置的区域信息
	s_currentCity: '',//当前城市
	s_choseCity: '',//选择的城市
	s_choseAddress: '',//选择的地址
	s_viewType: 0,//配送的类型:1,次日到达;0,2小时达;2,全国送
	s_cartList: {},//购物车商品列表
	s_cartCount: 0,//购物车商品总数
	s_mpromptStatus: false,//提示信息的状态
}

export default new Vuex.Store({
	state,
	mutations
})