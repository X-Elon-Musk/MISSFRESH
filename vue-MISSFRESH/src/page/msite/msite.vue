<template>
	<div class="full">
		<tabbar></tabbar>
		<foot-guide></foot-guide>
	</div>
</template>
<script>
	import footGuide from 'src/components/footer/footGuide'
	import tabbar from './children/tabbar'
	
	export default{
		data(){
			return {
				selected:'热卖'
			}
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
</style>