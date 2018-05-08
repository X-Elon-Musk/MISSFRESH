<template>
	<div class="ug">
		<!-- <router-link :to="{path: '/ug/productDetail'}" tag="div" style="position: relative; z-index: 1000000000; padding: 3em; background: #fff;" class="product-link">dddddddd</router-link> -->
		<tabbar></tabbar>
		<foot-guide></foot-guide>

		<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
	</div>
</template>
<script>
	import footGuide from 'src/components/footer/footGuide'
	import tabbar from './component/tabbar'

	export default{
		data(){
			return {
				selected:'热卖'
			}
		},
		mounted: function () {
			this.axios.get('http://10.0.8.11:3390/sql')
			.then(function (response) {
				console.log(response.data);
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		components: {
	    	footGuide,
	    	tabbar
	    }
	}
</script>
<style lang='less' scoped rel="stylesheet/less">
	@import '~src/style/mixin';
	.category-nav-wrap{
		position: fixed;
		top: 2em;
	    width: 100%;
	    height: 26px;
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
	    width: 0;
	    height: 0;
	}
</style>