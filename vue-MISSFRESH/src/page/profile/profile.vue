<template>
	<div class="my-center">
		<div class="my-center-content">
			<div class="sign-in">
				<span>用户登录</span>
			</div>
			<ul class="wallet">
				<li>
					<span>
						<i>0</i>元
					</span>
					<span>余额</span>
				</li>
				<li>
					<span>
						<i></i>张
					</span>
					<span>红包</span>
				</li>
				<li>
					<span>
						<i></i>张
					</span>
					<span>商品券</span>
				</li>
				<li>
					<span>
						<i></i>分
					</span>
					<span>积分兑换></span>
				</li>
			</ul>
			<div class="rights clearfix">
				<span>会员权益</span>
				<span class="open-membership">开通会员></span>
			</div>
			<div class="rights-detail">
				成为优享会员，预计1年将为你
				<span>节省1121.30元</span>
			</div>
			<icons :icons="icons"></icons>
			<img src="~images/invitation.png" class="invitation-img">
			<div class="other-items">
				<!-- <div v-for="otherItem in otherItems">
					<router-link :to="otherItem.to">
						<span>{{otherItem.text}}</span>
						<span class="arrow"></span>
					</router-link>
				</div> -->
				<profileItem v-for="(item,index) in otherItems" :to="item.to" :text="item.text" :arrow="true" :key="index"></profileItem>
			</div>
		</div>
		
		<transition name="sideslip" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
		<mfooter></mfooter>
	</div>
</template>
<script>
	import mfooter from 'src/components/mfooter/mfooter'
	import icons from 'src/components/icons/icons'
	import profileItem from './component/profileItem'
	export default{
		data(){
			return {
				otherItems: [
					{
		  				to: '/profile/safe',
		  				text: '账户与安全'
		  			},
		  			{
		  				to: '/',
		  				text: '我的订单'
		  			},
		  			{
		  				to: '/',
		  				text: '我的地址'
		  			},
		  			{
		  				to: '/',
		  				text: '下载每日优鲜App'
		  			},
		  			{
		  				to: '/',
		  				text: '联系客服'
		  			},
		  			{
		  				to: '/profile/feedback',
		  				text: '意见反馈'
		  			},
		  			{
		  				to: '/',
		  				text: '消息'
		  			},
		  			{
		  				to: '/profile/about_us',
		  				text: '关于我们'
		  			},
		  			{
		  				to: '/profile/frontend',
		  				text: '设置'
		  			}
		  		],
		  		icons: [
					{
						src: require('images/icon/privilege_0.png'),
						text: '会员专享价'
					},
					{
						src: require('images/icon/privilege_1.png'),
						text: '购物返现'
					},
					{
						src: require('images/icon/privilege_2.png'),
						text: '1小时送达'
					},
					{
						src: require('images/icon/privilege_3.png'),
						text: '会员商品'
					},
					{
						src: require('images/icon/privilege_4.png'),
						text: '专享客服'
					}
				]
			}
		},
		components:{
	        mfooter,
	        icons,
	        profileItem
	    },
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.my-center{
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		overflow-y: scroll;
		.my-center-content{
			padding-bottom: 47px;
			.sign-in{
				.bg(100%,110px,#fff,'~images/my-bg.png',100% 100%);
				text-align: center;
				padding-top: 17px;
				box-sizing: border-box;
				span{
					display: inline-block;
					margin-top: 36px;
					background: 0 0;
					min-width: 83px;
					min-height: 36px;
					line-height: 36px;
					font-size: 14px;
					color: #ff4891;
					text-align: center;
					border: 1px solid #ff4891;
					border-radius: 4px;
					position: relative;
					padding: 0 12px;
					box-sizing: border-box;
				}
			}
			.wallet{
				.wh(84px);
				background: #fff;
				display: table;
				table-layout: fixed;
				padding: 12px 0;
				li{
					display: table-cell;
					text-align: center;
					padding-top: 10px;
					span{
						display: block;
						text-align: center;
						display: block;
		    			color: #4d4d4d;
		    			font-size: 12px;
		    			line-height: 2;
		    			i{
		    				font-size: 18px;
		    			}
					}
				}
			}
			.rights{
				.wh(45px);
				padding-left: 15px;
				padding-right: 10px;
				padding-top: 15px;
				background-color: #fff;
		    	// height: 30px;
		    	box-sizing: border-box;
		    	// height: 45px;
		    	span{
		    		&:nth-of-type(1){
		    			line-height: 30px;
		    			font-size: 20px;
		    			color: #474245;
		    		}
		    	}
		    	.open-membership{
		    		float: right;
		    		line-height: 30px;
		    		color: #969696;
		    		font-size: 12px;
		    	}
			}
			.rights-detail{
				font-size: 12px;
				color: #969696;
				line-height: 18px;
				padding-left: 15px;
				padding-bottom: 20px;
				span{
				    color: #ff4891;
				}
			}
			.invitation-img{
				margin-top: 15px;
				width: 100%;
			}
			.other-items{
				padding-bottom: 30px;
				padding-top: 25px;
				width: 100%;
				background: #fff;
				
			}
		}
		.profile-item-page{
			.fullscreen(3);
			background: #fff;
		}
		
	}
	.sideslip-enter-active, .sideslip-leave-active {
        transition: all .4s;
    }
    .sideslip-enter, .sideslip-leave-active {
        transform: translate3d(100%, 0, 0);
        // opacity: 0;
    }
	.my-center ::-webkit-scrollbar{
		display: none;
	}
</style>