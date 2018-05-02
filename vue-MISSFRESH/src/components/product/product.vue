<template>
    <div class="product">
    	<router-link :to="{path: '/ug/productDetail',query:{id}}" tag="div" class="clearfix product-link">
			<div class="f_l product-img">
				<span v-bind:class="{hot_0:product.hot==0,hot_1:product.hot==1,hot_2:product.hot==2}"></span>
				<img src="~images/product_0.jpg">
			</div>
			<div class="f_r product-info">
				<p class="name">{{product.name}}</p>
				<p class="point">{{product.point}}</p>
				<ul class="preferential">
					<li v-for="item in product.preferential">{{item}}</li>
				</ul>
				<p class="price">
					商城价
					<!-- <span>{{product.price}}</span> -->
					<price :price="product.price"></price>
				</p>
				<p class="vip">
					会员专享价
					<price :price="product.vip"></price>
				</p>
				<img src="~images/icon/shopping-cart.png" class="shopping-cart-img">
			</div>
		</router-link>
	</div> 
</template>
<script>
	import price from 'src/components/price/price'
	export default{
		data(){
			return {
				
			}
		},
		props: ['product','id'],
		components: {
			price
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.product{
		width: 100%;
	    background-color: #fff;
		display: flex;
		position: relative;
		border: none;
		border-color: #f5f5f5;
		padding-top: 18px;
		padding-bottom: 18px;
		border-bottom: 1px solid #f5f5f5;
		.product-link{
			position: relative;
			height: auto;
			width: 100%;
		}
		.product-img{
			width: 40%;
			height: auto;
			position: relative;
			img{
				display: block;
				border-radius: 0;
				width: 120px;
				height: 120px;
			}
			span{
				position: absolute;
				height: 32px;
				width: 24px;
				top: 0;
				left: 0px;
				// z-index: 2;
			}
			// .hot_0{
			// 	background: url(../images/index/hot_0.png) no-repeat;
			// 	background-size: 100% 100%;
			// }
			// .hot_1{
			// 	background: url(../images/index/hot_1.png) no-repeat;
			// 	background-size: 100% 100%;
			// }
			// .hot_2{
			// 	background: url(../images/index/hot_2.png) no-repeat;
			// 	background-size: 100% 100%;
			// }
		}
		.product-info{
			width: 60%;
			text-align: left;
			margin: 0;
			color: #262626;
			line-height: 20px;
			position: relative;
			padding-left: 2%;
			box-sizing: border-box;
			.name{
				padding-top: 11px;
				font-size: 16px;
				padding-top: 15px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				letter-spacing: -1px;
				color: #474245;
			}
			.point{
				font-size: 12px;
				color: #969696;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.preferential{
				li{
					display: inline-block;
					border-radius: 2px;
					font-size: 9px;
					height: 13px;
					line-height: 11px;
					border: 1px solid #d165e1;
					padding: 1px;
					color: #d165e1;
					background: #fff;
					margin-right: 5px;
					background-color: rgb(255, 255, 255);
					border-color: rgb(198, 198, 198);
					color: rgb(198, 198, 198);
				}
			}
			.price{
				line-height: 1.4;
				font-size: 12px;
				color: @color_main;
			}
			.vip{
				line-height: 1.4;
				font-size: 12px;
				color: @color_assist;
			}
			.shopping-cart-img{
				width: 46px;
				height: 46px;
				position: absolute;
				right: 6px;
				bottom: -16px;
			}
		}
	}
</style>
