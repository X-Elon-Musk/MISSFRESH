<template>
	<div class="my-center">
		<div class="my-center-content">
			<div class="sign-in">
				<router-link :to="{path: '/profile/phone'}" v-show="!s_login" class="login-button" tag="span">用户登录</router-link>
				<div class="home-header-user" v-show="s_login">
					<div class="home-head-user-icon">
						<img :src="s_userInfo.portrait" alt="" class="home-head">
					</div>
					<div class="home-des-detail">
						<span class="home-name">{{s_userInfo.nick_name}}</span>
						<!-- <img src="https://j-image.missfresh.cn/img_20171028220456485.png" alt="" class="home-img"> -->
					</div>
				</div>
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
	import {mapState, mapMutations} from 'vuex'
	import {getStore} from 'config/mUtils'
	import {getUserAxios} from 'src/service/getData'

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
		  				to: '/profile/address',
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
		  				to: '/profile/setting',
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
		computed: {
            ...mapState([
                's_userInfo', 's_login'
            ]),
        },
        mounted (){
			this.$nextTick(() => {
				this.getUser();
				/*
				//第二种写法
				getUserAxios().then(response=>{
					if (response.code==0) {
						console.log(typeof response);
						console.log(response);
						this.SET_USERINFO({
							info: {...response}
						})
					}
				})*/
				
			})
		},
        methods: {
			...mapMutations([
           		'SET_USERINFO'
            ]),
			//获取用户信息
			async getUser(){
				let response=await getUserAxios();
				if (response.code==0) {
					this.SET_USERINFO({
						info: {...response}
					})
				}
			},
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
		.fullscreen();
		overflow-y: scroll;
		.my-center-content{
			padding-bottom: 47px;
			.sign-in{
				.bg(100%,110px,#fff,'~images/my-bg.png',100% 100%);
				text-align: center;
				padding-top: 17px;
				box-sizing: border-box;
				.login-button{
					display: inline-block;
					margin-top: 36px;
					background: 0 0;
					min-width: 83px;
					min-height: 36px;
					.font(36px,14px,#ff4891);
					text-align: center;
					border: 1px solid #ff4891;
					border-radius: 4px;
					position: relative;
					padding: 0 12px;
					box-sizing: border-box;
				}
				.home-header-user{
					padding-top: 20px;
					padding-left: 4%; 
					.wh(100%);
					box-sizing: border-box;
					text-align: left;
					.home-head-user-icon{
						display: inline-block;
						vertical-align: middle;
							.wh(100%,auto);
						.home-head{
							.wh(100%,auto);
							border-radius: 100%;
							overflow: hidden;
						}
					}
					.home-des-detail{
						display: inline-block;
						vertical-align: middle;
						.home-name{
							display: inline-block;
							max-width: 100px;
							font-size: 16px;
							color: #474245;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							vertical-align: middle;
						}
						/* .home-img{
							margin-left: 6px;
							min-width: 50px;
							height: 15px;
							vertical-align: middle;
						} */
					}
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
		    			.font(2,12px,#4d4d4d);
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
		    	box-sizing: border-box;
		    	span{
		    		&:nth-of-type(1){
		    			.font(30px,20px,#474245);
		    		}
		    	}
		    	.open-membership{
		    		float: right;
		    		.font(30px,12px,#969696);
		    	}
			}
			.rights-detail{
				.font(18px,12px,#969696);
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