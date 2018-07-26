<template>
	<div class="ug">
		<tabbar v-on:hideLoading="hideLoading"></tabbar>
		<mfooter></mfooter>
		<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
		<loading :loading="loading" zIndex="10"></loading>
	</div>
</template>
<script>
	import mfooter from 'src/components/mfooter/mfooter'
	import tabbar from './component/tabbar'
	import loading from 'src/components/loading/loading'

	import {getValue} from 'src/config/mUtils'
	export default{
		data(){
			return {
				selected:'热卖',
				product:{
					buy_permission:0,
					seckill_limit:0,
					sell_out:0,
					sku:"p-blmlxlx4-6-500g",
					vip_price_pro:{
						price_up: {
							color:"9868950"
						}, 
						price_down: {
							color:"9868950"
						}
					}
				},
				loading: true
			}
		},
		methods: {
			// 加载动画
			hideLoading(status){
				this.loading=status;
			}
		},
		components: {
	    	mfooter,
	    	tabbar,
	    	loading
	    }
	}
</script>
<style lang='less' scoped rel="stylesheet/less">
	@import '~src/style/mixin';
	.ug ::-webkit-scrollbar {
	    .wh(0,0);
	}
</style>