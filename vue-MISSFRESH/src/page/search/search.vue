<template>
	<div class="member">
		<div class="vip-card">
			<div class="card-bg"></div>
			<div class="card-container">
				<img src="~images/vip.png">
			</div>
		</div>
		<icons></icons>
		<div class="vip-calculator">
			<div class="calculator-content">
				<div class="calculator-header">
					<span></span>
					会员省钱计算器
				</div>
				<div class="save clearfix">
					<span>优享会员将为你节省</span>
					<span class="save-count">¥1121.30</span>
				</div>
				<div class="basis">根据优鲜用户年平均消费3504元计算</div>
				<ul class="specific">
					<li>
						<div class="clearfix">
							<span class="item-name">购物返现</span>
							<span>¥175.20</span>
						</div>
						<p>单单返现5%无上限</p>
					</li>
					<li>
						<div class="clearfix">
							<span class="item-name">购物返现</span>
							<span>¥175.20</span>
						</div>
						<p>单单返现5%无上限</p>
					</li>
					<li>
						<div class="clearfix">
							<span class="item-name">购物返现</span>
							<span>¥175.20</span>
						</div>
						<p>单单返现5%无上限</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="vip-products">
			<div class="products-header">
				<div class="area-header">会员商品&会员专享价</div>
				<div class="area-introduce">精选全球美食 成为会员抢先购买</div>
			</div>
			<!-- <div class="member-products products">
	    		<Product :products="products"></Product>
	    	</div> -->
		</div>
		<foot-guide></foot-guide>
	</div>
</template>
<script>
	import footGuide from 'src/components/footer/footGuide'
	import icons from './children/icons'
	export default{
		data(){
			return {

			}
		},
		components:{
	        footGuide,
	        icons
	    },
	}
</script>
<style lang="less">
	// .full{
	// 	height: auto;
	// }
	/*会员页面*/
	.member{
		width: 100%;
		height: 2000px;
		padding-bottom: 47px;
		.vip-card{
			width: 100%;
			.card-bg{
				width: 100%;
	    		height: 8.4375rem;
	    		background: #FFB53E;
			}
			.card-container{
				line-height: 1;
	    		margin-top: -5.6875rem;
	    		padding: 0 0.5rem;
	    		position: relative;
	    		img{
	    			width: 100%;
	    		}
			}
		}
		.vip-calculator{
			margin: 1.5rem 0 0 0;
	    	padding: 0 0.9375rem;
	    	.calculator-content{
	    		background: #FFFBEF;
	    		border-radius: 0.5rem;
	    		padding: 0 0.625rem 0.625rem;
	    		.calculator-header{
	    			height: 3.375rem;
	    			line-height: 3.375rem;
	    			// margin: 0 0.9375rem;
	    			border-bottom: 0.0625rem dashed #ECE7D8;
	    			overflow: hidden;
	    			white-space: nowrap;
	    			text-overflow: ellipsis;
	    			color: #B9AF91;
					span{
						display: inline-block;
	    				ontent: '';
	    				width: 1.25rem;
	    				height: 1.375rem;
	    				background: url(~images/icon/calculator.png) no-repeat;
	    				background-size: 100% 100%;
	    				margin-top: -2px;
	    				margin-right: 4px;
	    				vertical-align: middle;
					}
				}
				.save{
					margin: 0.8125rem 0 0;
	    			font-size: 1.125rem;
	    			color: #443E42;
	    			position: relative;
	    			white-space: nowrap;
	    			text-overflow: ellipsis;
	    			overflow: hidden;
	    			.save-count{
	    				float: right;
	    				color: #ff4891;
	    			}
				}
				.basis{
					font-size: 0.75rem;
					padding: 0 0 0.625rem;
					color: #969696;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					line-height: 1.6;
				}
				.specific{
					padding: 0 0.9375rem;
	    			background: white;
	    			li{
	    				padding: 0.375rem 0;
	    				font-size: 0.875rem;
	    				color: #443E42;
	    				position: relative;
	    				border-bottom: 0.0625rem dashed #ECE7D8;
	    				padding-top: 0.6875rem;
	    				color: rgb(150, 150, 150);
	    				line-height: 1.4;
	    				div{
	    					white-space: nowrap;
	    					text-overflow: ellipsis;
	    					overflow: hidden;
	    					span{
	    						float: right;
	    					}
	    					.item-name{
	    						color: #000;
	    						float: left;
	    					}
	    				}
	    			}
				}
	    	}
			
		}
		.vip-products{
			padding-top: 2rem;
			.products-header{
				padding: 0 0.9375rem;
				.area-header{
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 1.25rem;
					color: #474245;
					line-height: 1.4;
				}
				.area-introduce{
					font-size: 0.75rem;
					color: #969696;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					line-height: 1.4;
				}
			}
			
		}
	}
	.member ::-webkit-scrollbar {
	    width: 0;
	    height: 0;
	}
</style>