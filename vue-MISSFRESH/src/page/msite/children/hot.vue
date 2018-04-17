<template>
	<div class="index-hot">
		<!-- 轮播图 -->
    	<swipe></swipe>
    	<ul class="ensure">
    		<li>
    			<span></span>
    			<strong>优鲜严选</strong>
    		</li>
    		<li>
    			<span></span>
    			<strong>安心检测</strong>
    		</li>
    		<li>
    			<span></span>
    			<strong>赔付保障</strong>
    		</li>
    	</ul>
    	<div class="special">
    		<div class="special-container clearfix">
    			<div class="special-left f_l">
	    			<a href="#">
	    				<img src="src/images/index/0.png">
	    			</a>
	    		</div>
	    		<div class="special-right f_r">
	    			<a href="#">
	    				<img src="src/images/index/1.png">
	    			</a>
	    			<div class="invitation-sign">
	    				<a href="#">
		    				<img src="src/images/index/2.png">
		    			</a>
		    			<a href="#">
		    				<img src="src/images/index/3.png">
		    			</a>
	    			</div>
	    		</div>
    		</div>
    	</div>
    	<!-- <img src="../assets/images/index/best_sellers.png"> -->
    	<!-- <div class="hot-products products">
    		<Product :products="products"></Product>
    	</div> -->
	</div>  
</template>
<script>
	import swipe from 'src/components/swipe/swipe.vue';
	// import Product from './Product.vue';
	export default{
		name:'Index-hot',
		data(){
			return {
				products: [
					{
						hot: 0,
						img: '',
						name: '月盛斋羔羊肉片300g',
						point: '商品为兑换券，预计11月26日后兑换',
						preferential: [
							'限每人1份',
							'进口检验合格'
						],
						price: 29.9,
						vip: 19.9
					},
					{
						hot: 1,
						img: '',
						name: '月盛斋羔羊肉片300g',
						point: '商品为兑换券，预计11月26日后兑换',
						preferential: [
							'限每人1份',
							'进口检验合格'
						],
						price: 29.9,
						vip: 19.9
					},
					{
						hot: 3,
						img: '',
						name: '月盛斋羔羊肉片300g',
						point: '商品为兑换券，预计11月26日后兑换',
						preferential: [
							'限每人1份',
							'进口检验合格'
						],
						price: 29.9,
						vip: 19.9
					},
					{
						hot: 2,
						img: '',
						name: '月盛斋羔羊肉片300g',
						point: '商品为兑换券，预计11月26日后兑换',
						preferential: [
							'限每人1份',
							'进口检验合格'
						],
						price: 29.9,
						vip: 19.9
					},
					{
						hot: 3,
						img: '',
						name: '月盛斋羔羊肉片300g',
						point: '商品为兑换券，预计11月26日后兑换',
						preferential: [
							'限每人1份',
							'进口检验合格'
						],
						price: 29.9,
						vip: 19.9
					}
				]
			}
		},
		props:['isActive'],
		components: {
			swipe,
			// Product
		}
	}
</script>
<style lang='less'>
	.index-hot{
		padding-bottom: 47px;
		.ensure{
			height: 49px;
			display: flex;
			li{
				flex:1;
				font-size: 12px;
				line-height: 49px;
				text-align: center;
				span{
					vertical-align: top;
					display: inline-block;
					width: 16px;
					height: 16px;
					margin-top: 16px;
				}
				strong{
					vertical-align: top;
				}
				/* &:nth-of-type(1){
					span{
						background: url(../images/index/icon_0.png) no-repeat;
						background-size: 100% 100%;
					}
				}
				&:nth-of-type(2){
					span{
						background: url(../images/index/icon_1.png) no-repeat;
						background-size: 100% 100%;
					}
				}
				&:nth-of-type(3){
					span{
						background: url(../images/index/icon_2.png) no-repeat;
						background-size: 100% 100%;
					}
				} */
			}
		}
		.special{
			width: 100%;
	    	padding: 0 15px;
	    	box-sizing: border-box;
	    	.special-container{
	    		padding-bottom: 15px;
	    		border-bottom: 1px solid #e6e6e6;
	    	}
	    	.special-left{
	    		width: 53.7%;
	    		position: relative;
	    		overflow: hidden;
	    		border-radius: 4px;
	    	}
	    	.special-right{
	    		width: 44.4%;
	    		margin-left: .12rem;
	    		.invitation-sign{
	    			margin-top: .28rem;
	    			width: 100%;
	    			a{
	    				display: inline-block;
	    				height: 100%;
	    				width: 48%;
	    				img{
		    				width: 100%;
		    			}
		    			&:nth-of-type(2){
		    				margin-left: .13rem;
		    			}
	    			}
	    		}
	    	}
		}
	}
</style>
