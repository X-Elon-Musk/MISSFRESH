<template>
    <div class="clearfix ug-header">
    	<router-link :to="{path: '/ug/addressChose'}" tag="div" class="delivery-info">
	        <div class="delivery-time">
	        	<img :src="view.img_url" alt="">
	        </div>
	        <div class="delivery-place">
	        	{{s_choseAddress}}
	        </div>
	        <div class="short-tips" v-show="tips&&view.first_page_addr_text" @click.stop="tipsStatus(false)">{{view.first_page_addr_text}}</div>
        </router-link>
        <router-link :to="{path: '/ug/search'}" tag="div" class="f_r search-button"></router-link>
    </div>  
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import {getStore} from 'src/config/mUtils.js'
	import {getDataPositionAxios, getViewAxios} from 'src/service/getData'
	export default{
		data(){
			return {
				// 提示信息显示
				tips: true,
				// 配送的信息
				view: {}
			}
		},
		mounted: function () {
	    	this.INIT_CHOSEADDRESS();
	    	if (!getStore('choseAddress')) {
				this.getDataPosition();			
			}
			this.getView();		
	    },
	    watch: {
        	s_choseAddress: function () {
    			this.getView();			
        	}
        },
        computed: {
	    	...mapState([
                's_choseAddress', 's_viewType'
            ])
        },
		methods: {
			...mapMutations([
                'INIT_CHOSEADDRESS', 'SET_POSITION'
            ]),
            // 提示信息状态
			tipsStatus(status) {
				this.tips=status;
			},
			// 获取当前地址
			async getDataPosition() {
				let response=await getDataPositionAxios();
				let ad_info=response.ad_info
				let chosecity={
					id: ad_info.adcode,
					name: ad_info.city,
					province: ad_info.province,
					district: ad_info.district
				}
				this.SET_POSITION({
					type: 0,
					city: chosecity
				});
			},
			// 获取配送的类型信息
			getView() {
				getViewAxios(this.s_viewType).then(response=>{
					this.view=response;
				})
			}		
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.ug-header{
		height: 36px;
		text-align: center;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		.delivery-info{
			height: 1rem;
			.delivery-time{
				display: inline-block;
				line-height: 100%;
				position: relative;
				vertical-align: middle;
				img{
					height: 1rem;
				}
				
			}
			.delivery-place{
				display: inline-block;
				line-height: 1rem;
				max-width: 10em;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    vertical-align: middle;
			    line-height: 100%;
			    margin-left: 0.4em;
			    &:after{
			    	content: '';
				    display: inline-block;
				    .bg(1em,1em,transparent,'~images/icon/arrow.png',0.6rem);
				    vertical-align: top;
			    }
			}
			.short-tips{
				position: absolute;
				left: 50%;
				top: 2em;
				z-index: 2;
				width: 50%;
				transform: translateX(-50%);
			    white-space: normal;
			    background: transparent url(~images/icon/header-prompt.png) no-repeat;
			    background-size: 100% 100%;
			    padding: 1.2em 1em 1em;
			    .font(1.2em,0.6em,#262626);
			}
		}
		
		.search-button{
			position: absolute;
			right: 0.6em;
			top: 0;
			.bg(24px,100%,transparent,'~images/icon/search.png',1.2rem);
		}
	}
	.page-search{
		position: absolute; 
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 4; 
		background: #fff;
		overflow-y: auto;
		color: @color_common;
		.search-box{
			background-color: #fff;
			color: #4b4b4b;
			box-shadow: 0 0 0.6em rgba(0, 0, 0, 0.1);
			border-bottom: none;
			top: 0;
			position: fixed;
			border-top-width: 0;
			width: 100%;
			height: @header_height;
			padding: 6px 4%;
			box-sizing: border-box;
			.search-bar{
				.wh(100%,100%);
				.search-form{
					display: block;
					.wh(100%,100%);
					position: relative;
					.search-logo{
						position: absolute;
						left: 0;
						top: 1px;
						.bg(24px,24px,transparent,'~images/icon/search-logo.png',66% 66%);
					}
					.search-input{
						background-color: #f5f5f5;
						.wh(100%,100%);
						border-radius: 0.25rem;
						font-size: 0.875rem;
						text-indent: 1.875rem;
						border: none;
						outline: none;
					}
					.search-submit{
						display: none;
					}
				}
			}
		}
		.search-result{
			.wh(auto, 100%);
			padding: 42px 4% 0;
			box-sizing: border-box;
			background: #fff;
			.search-list{
				color: #4C4440;
				border-bottom: 1px solid #f5f5f5;
				line-height: 1.6em;
				font-size: 0.7em;
				padding: 0.35em 0;
				
			}
		}
	}
</style>
