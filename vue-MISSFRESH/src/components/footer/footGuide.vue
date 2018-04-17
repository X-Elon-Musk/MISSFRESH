<template>
	<div>
        <ul class="foot-nav">
        	<li class="nav-item" @click="goAddress({path: '/msite'})">
        		<span class="nav-icon nav-home" :style="{backgroundImage:$route.path.indexOf('msite')==-1?`url(${backgroundImage.home})`:`url(${backgroundImage.homeActive})`}"></span>
        		<p class="nav-label">首页</p>
        	</li>
        	<li class="nav-item" @click="goAddress({path: '/search/geohash'})">
        		<span class="nav-icon nav-newvp" :style="{backgroundImage:$route.path.indexOf('search')==-1?`url(${backgroundImage.newvp})`:`url(${backgroundImage.newvpActive})`}"></span>
        		<p class="nav-label">会员</p>
        	</li>
        	<li class="nav-item" @click="goAddress({path: '/order'})">
        		<span class="nav-icon nav-cart" :style="{backgroundImage:$route.path.indexOf('order')==-1?`url(${backgroundImage.cart})`:`url(${backgroundImage.cartActive})`}"></span>
        		<p class="nav-label">购物车</p>
        	</li>
        	<li class="nav-item" @click="goAddress({path: '/profile'})">
        		<span class="nav-icon nav-mine" :style="{backgroundImage:$route.path.indexOf('profile')==-1?`url(${backgroundImage.mine})`:`url(${backgroundImage.mineActive})`}"></span>
        		<p class="nav-label">我的</p>
        	</li>
        </ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				backgroundImage:{
					home: require('src/images/home.png'),
					newvp: require('src/images/newvp.png'),
					cart: require('src/images/cart.png'),
					mine: require('src/images/mine.png'),
					homeActive: require('src/images/home-active.png'),
					newvpActive: require('src/images/newvp-active.png'),
					cartActive: require('src/images/cart-active.png'),
					mineActive: require('src/images/mine-active.png')
				}
			}
		},
		methods: {
        	goAddress(path){
        		this.$router.push(path)
        	}
        },
	}
</script>
<style lang='less'>
	.foot-nav{
		position: fixed;
	    background-color: #fff;
	    line-height: 1;
	    display: flex;
	    z-index: 500;
	    bottom: 0;
	    width: 100%;
	    .nav-item{
	    	display: block;
	    	-webkit-box-flex: 1;
	    	-webkit-flex: 1;
	    	flex: 1;
	    	padding: 5px 0 0;
	    	font-size: 0;
	    	color: #999;
	    	text-align: center;
	    	-webkit-tap-highlight-color: rgba(0,0,0,0);
	    	.nav-icon{
				display: block;
			    width: 27px;
			    height: 27px;
			    margin: 0 auto;
			    background-size: 100% 100%; 
			    background-repeat: no-repeat;
	    	}
	    	.nav-home{
	    		// background: url(src/images/home.png) no-repeat;
	    		background-size: 100% 100%; 
	    	}
	    	.nav-newvp{
	    		// background: url(src/images/newvp.png) no-repeat;
	    		background-size: 100% 100%; 
	    	}
	    	.nav-cart{
	    		// background: url(src/images/cart.png) no-repeat;
	    		background-size: 100% 100%; 
	    	}
	    	.nav-mine{
	    		// background: url(src/images/mine.png) no-repeat;
	    		background-size: 100% 100%; 
	    	}
	    	.nav-label{
	    		text-align: center;
			    color: #999;
			    font-size: 10px;
			    line-height: 1.8;
	    	}
	    }
	}
</style>