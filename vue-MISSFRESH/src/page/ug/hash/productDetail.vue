<template>
    <div class="product-detail">
    	<div class="section-header">
    		<span class="header-text">商品详情</span>
    		<strong class="share-icon"></strong>
    	</div>
    	<div class="product-img-container">
    		<carousel></carousel>
    	</div>
    	<div class="product-name">2018升级版摩奇桃汁首发，出游全靠它</div>
    	<p class="sub-title">【4盒】升级版摩奇桃汁饮料250ml*4</p>
    	<div class="price-original">
    		<price :price="13.9"></price>
    	</div>
    	<div class="clearfix price-sales">
    		<span class="price-vip">
    			优享会员价<price :price="13.9"></price>
    		</span>
    		<span class="f_r sales-volume">
    			已售<i>9809</i>份
    		</span>
    	</div>
    	<ul class="product-attrs">
    		<li>产地<span>北京</span></li>
    		<li>次日达</li>
    		<li>实付满<span>69</span>包邮</li>
    	</ul>
    </div>  
</template>
<script>
	import carousel from 'src/components/carousel/carousel'
	import price from 'src/components/price/price'
	export default{
		data(){
			return {
				
			}
		},
		components: {
			carousel,
			price
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.product-detail{
		position: absolute; 
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 3; 
		// padding: 3em; 
		background: #fff;
		font-size: 30px;
		overflow-y: auto;
	}
</style>
