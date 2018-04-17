<template>
	<div>
		<tabbar></tabbar>
		<div class="category-nav-wrap">
			<mt-tabbar v-model="selected">  
	            <mt-tab-item id="热卖">  
	                热卖  
	            </mt-tab-item>  
	            <mt-tab-item id="火锅">  
	                火锅  
	            </mt-tab-item>  
	        </mt-tabbar>  
		</div>
		

		<mt-tab-container class="category-items" v-model="selected">  
            <mt-tab-container-item id="热卖">
            	<hot></hot>  
            </mt-tab-container-item>  
            <mt-tab-container-item id="火锅">  
                <pot></pot>
            </mt-tab-container-item>   
        </mt-tab-container>  
		<foot-guide></foot-guide>
	</div>
</template>
<script>
	import footGuide from 'src/components/footer/footGuide'
	import tabbar from 'src/components/tabbar/tabbar'
	import hot from 'src/page/msite/children/hot'
	import pot from 'src/page/msite/children/pot'
	export default{
		data(){
			return {
				selected:'热卖'
			}
		},
		components: {
	    	footGuide,
	    	tabbar,
	    	hot,
	    	pot
	    }
	}
</script>
<style lang='less'>
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