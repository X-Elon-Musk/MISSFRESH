<template>
    <div class="product-detail">
    	<div class="clearfix section-header">
    		<span class="header-text">商品详情</span>
    		<strong class="share-icon"></strong>
    	</div>
    	<div class="product-img-container">
    		<carousel></carousel>
    	</div>
    	<div class="padding_common product-name">2018升级版摩奇桃汁首发，出游全靠它</div>
    	<p class="padding_common sub-title">【4盒】升级版摩奇桃汁饮料250ml*4</p>
    	<div class="padding_common price-original">
    		<price :price="13.9"></price>
    	</div>
    	<div class="padding_common clearfix price-sales">
    		<span class="price-vip">
    			优享会员价<price :price="13.9"></price>
    		</span>
    		<span class="f_r sales-volume">
    			已售<i>9809</i>份
    		</span>
    	</div>
    	<ul class="padding_common clearfix product-attrs">
    		<li class="f_l">产地<span>北京</span></li>
    		<li class="f_l">次日达</li>
    		<li class="f_l">实付满<span>69</span>包邮</li>
    	</ul>
    	<ul class="vip-share">
    		<li class="vip-info">
    			<div class="clearfix vip-share-item">
    				<span class="f_l item-card"></span>
    				<div class="f_l item-text">
    					<span>支付8元开会员</span>
    					<span>购买本商品更省<i>0.4</i>元+返<i>0.67</i>元</span>
    				</div>
    				<span class="f_r go-on">去开通></span>
    			</div>
    		</li>
    		<li class="share-info">
    			<div class="clearfix vip-share-item">
    				<span class="f_l item-card"></span>
    				<div class="f_l item-text">
    					分享有机会得30元红包
    					<span class="doubt"></span>
    				</div>
    				<span class="f_r go-on">去分享></span>
    			</div>
    			<div class="padding_common share-volume">已经有<span>1172</span>人分享了该商品</div>
    		</li>
    	</ul>
    	<div class="buyer-said">
    		<div class="buyer-area-person">
    			<div class="clearfix flexbox">
    				<div class="f_l buyer-area-person-icon">
    					<img src="~src/images/person-icon.png" alt="">
    				</div>
    				<span class="f_l buyer-name">摩奇复活核心团队</span>
    				<i class="f_r buyer-area-person-tip"></i>
    			</div>
    			<div class="buyer-person-des">
    				由每日优鲜商品中心VP刘啸峰发起，得到摩奇董事长姜建民，摩奇饮料工艺师张昱的大力支持。
    			</div>
    			<div class="buyer-description">
    				<div class="marks-left"></div>
    				<ul class="commodity-details">
    					<li>2018升级版摩奇桃汁，桃汁UP，不添加色素，不添加防腐剂，不添加阿斯巴甜。</li>
    					<li>摩奇复活核心团队于2018年1月25日联合复活国民饮料摩奇，一起守住老北京的味道。</li>
    					<li>摩奇生于1984年，兴于1992年，于2018年1月重现人们视野中。80 90年的老北京四合院里，孩子们最爱的三大饮品就是老酸奶、北冰洋、摩奇了。</li>
    				</ul>
    			</div>
    		</div>
    	</div>
    	<div class="padding_common graphic-list-container">
    		<h3 class="image-text">商品详情</h3>
    		<ul class="list-container">
    			<li class="list-item">规格: <span>6</span><i>盒</i></li>
    			<li class="list-item">重量: <span>250</span><span>ml</span>*<span>1</span><i>盒</i></li>
    			<li class="list-item">包装: 盒装</li>
    			<li class="list-item">保质期: 330天</li>
    			<li class="list-item">贮存方法: 室温</li></ul>
    	</div>
    	<ul class="padding_common instruction-list-container">
    		<li><img src="~src/images/productdetail/1.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/2.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/3.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/4.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/5.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/6.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/7.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/8.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/9.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/10.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/11.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/12.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/13.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/14.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/15.jpg" alt=""></li>
    		<li><img src="~src/images/productdetail/16.jpg" alt=""></li>
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
		// font-size: 30px;
		overflow-y: auto;
		color: @color_common;
		.section-header{
			position: fixed; 
			left: 0;
			top: 0;
			z-index: 2;
			.wh(36px);
			line-height: 36px;
			color: @color_main;
			text-align: center;
			background: #fff;
			box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.06);
    		border-bottom: 1PX solid #eee;
			.header-text{
				position: relative;
				display: inline-block;
				height: 100%;
				&:after{
					content: "";
					position: absolute;
					left: 0;
					bottom: -1px;
					height: 2px;
					width: 100%;
					background: @color_main;
				}
			}
			.share-icon{
				position: absolute;
				right: 0;
				top: 0;
				.bg(36px,36px,#fff,'~src/images/icon/share.png',1.4em);
			}
		}
		.product-img-container{
			margin-top: 37px;
		}
		.product-name{
			.font(1.6em,1.1em);
			font-weight: 700;
		}
		.sub-title{
			.font(1.2em);
		}
		.price-original{
			padding-top: 1em;
			.font(2.2em,0.8em,@color_main);
		}
		.price-sales{
			.font(1.4em,0.8em,@color_assist);
			padding-bottom: 1em;
			.price-vip{
				
			}
			.sales-volume{
				color: @color_gray;
			}
		}
		.product-attrs{
			.font(18px,0.8em);
			padding-bottom: 2em;
			li{
				padding-left: 0.5em;
				position: relative;
				margin-left: 1em;
				&:before{
					content: "";
					position: absolute;
					left: 0;
					top: 8px;
					height: 2px;
					width: 2px;
					background: @color_common;
				}
			}
			li:nth-of-type(1){
				margin-left: 0;
			}
		}
		.vip-share{
			font-size: 0.7em;
			.vip-share-item{
				padding: 5px 3%;
				box-sizing: border-box;
				.bg(100%,60px,transparent,'~src/images/icon/product-detail-member-bg.png',100% 100%);
				.item-card{
					margin-left: 3%;
					.bg(12%,100%,transparent,'~src/images/icon/membership_card.png',3em);
				}
				.item-text{
					margin-left: 5%;
					width: 50%;
					line-height: 25px;
					span{
						display: block;
						white-space: nowrap;
						i{
							color: @color_main;
						}
					}
				}
				.go-on{
					width: 20%;
					line-height: 50px;
				}
			}
			.vip-info{
				.vip-share-item{
					.item-text{

					}
				}
			}
			.share-info{
				color: @color_main;
				.vip-share-item{
					background-image: url(~src/images/icon/product-share-redpacket.png);
					.item-card{
						background-image: url(~src/images/icon/share_rebate.png);
					}
					.item-text{
						line-height: 50px;
					}
				}
				.share-volume{
					padding: 0.5em 3% 4em;
					color: @color_gray;
				}
			}
		}
		.buyer-said{
			margin: 1em 3% 2em;
		    box-sizing: border-box;
			.buyer-area-person{
				box-shadow: 0 0.125rem 0.5rem 0 #E7E7E7;
			    border-radius: 0.375rem;
			    padding: 0.4em 3%;
			    position: relative;
				.flexbox{
					margin-top: -2em;
					overflow: hidden;
					height: 4em;
					.buyer-area-person-icon{
						margin-left: 0.5em;
						.wh(4em,4em);
						border-radius: 100%;
						img{
							display: inline-block;
							.wh(100%,100%);
						}
					}
					.buyer-name{
						margin-left: 0.5em;
						.font(4em,0.8em,@color_common);
						font-weight: 700;
					}
					.buyer-area-person-tip{
						.bg(3em,100%,transparent,'~src/images/icon/say.png',3em);
					}
				}
				.buyer-person-des{
					.font(1.5em,0.8em,@color_common);
					padding-top: 0.4em;
					padding-bottom: 0.4em;
				}
				.buyer-description{
					padding: 0.5em 1em;
					box-sizing: border-box;
					border-radius: 5px;
					background-color: #F5F5F5;
					.marks-left{
						.bg(100%,1em,transparent,'~src/images/icon/quotation.png',1.4em);
						background-position: left center;
					}
					.commodity-details{
						li{
							.font(1.4em,0.8em,@color_common);
							padding-bottom:0.5em;
							padding-top: 0.5em; 
						}
					}
				}
			}
		}
		.graphic-list-container{
			.font(2.3em,0.8em,@color_gray);
			padding-bottom: 1em;
			.image-text{
				color: @color_common;
				font-weight: 700;
			}
			.list-container{
				.list-item{

				}
			}
		}
		.instruction-list-container{
			li{
				.wh(auto);
				img{
					display: inline-block;
					vertical-align: top;
					margin: 0;
					padding: 0;
					.wh(auto);
				}
			}
		}
	}
</style>
