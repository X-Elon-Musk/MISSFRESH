<template>
	<div class="ug">
		<tabbar v-on:hideLoading="hideLoading"></tabbar>
		<mfooter></mfooter>
		<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
		<loading :loading="loading" zIndex="2"></loading>
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
		mounted: function () {
		},
		methods: {
			hideLoading(){
				this.loading=!this.loading;
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
	.category-nav-wrap{
		position: fixed;
		top: 2em;
	    // width: 100%;
	    // height: 26px;
	    .wh(26px);
	    z-index: 100;
	    background-color: #fff;
	    border-bottom: 1px solid #e6e6e6;
	    .mint-tabbar{
	    	background: none;
	    	.mint-tab-item{
				position: relative;
			}
			.mint-tab-item.is-selected{
				background: transparent;
			}
			.mint-tab-item.is-selected:after{
				content: "";
				position: absolute;
				left: 0;
				bottom: 0px;
				height: 0;
				width: 100%;
				border-bottom: 2px solid #ff4891;
			}
	    }
	}
	.ug ::-webkit-scrollbar {
	    // width: 0;
	    // height: 0;
	    .wh(0,0);
	}
</style>