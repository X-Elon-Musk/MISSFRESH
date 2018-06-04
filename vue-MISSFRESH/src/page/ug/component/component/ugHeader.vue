<template>
    <div class="clearfix ug-header">
    	<!-- <div class="delivery-info" @click="goAddressChose"> -->
    	<router-link :to="{path: '/ug/addressChose'}" tag="div" class="delivery-info">
	        <div class="delivery-time">
	        	<img :src="view.img_url" alt="">
	        </div>
	        <div class="delivery-place">
	        	{{choseAddress}}
	        </div>
	        <div class="short-tips" v-show="tips" @click.stop="closeTips">{{view.first_page_addr_text}}</div>
        <!-- </div> -->
        </router-link>
        <router-link :to="{path: '/ug/search'}" tag="div" class="f_r search-button"></router-link>
    </div>  
</template>
<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return {
				//提示信息显示
				tips: true
			}
		},
		props: ['view'],
        computed: {
	    	...mapState([
                's_choseAddress'
            ]),
            //选择的配送地址
            choseAddress: function () {
            	return this.s_choseAddress ? this.s_choseAddress : '';
            },
        },
		methods: {
			closeTips: function () {
				this.tips=false;
			},
			// goAddressChose: function () {
			// 	this.$router.push('/ug/addressChose');
			// }			
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
			height: 1em;
			flex: 1;
			font-size: 0.8em;
			line-height: 1em;
			.delivery-time{
				display: inline-block;
				line-height: 100%;
				position: relative;
				vertical-align: top;
				img{
					height: 1em;
				}
				
			}
			.delivery-place{
				display: inline-block;
				line-height: 100%;
				max-width: 10em;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    vertical-align: top;
			    line-height: 100%;
			    // font-size: 0.8em;
			    margin-left: 0.4em;
			    &:after{
			    	content: '';
				    display: inline-block;
				    // width: 1em;
				    // height: 1em;
				    // background: url(~images/icon/arrow.png) no-repeat center;
				    // background-size: 0.6rem;
				    .bg(1em,1em,transparent,'~images/icon/arrow.png',0.6rem);
				    vertical-align: top;
				    // color: transparent;
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
			    // font-size: 0.6em;
			    // line-height: 1.2em;
			    background: transparent url(~images/icon/header-prompt.png) no-repeat;
			    background-size: 100% 100%;
			    padding: 1.2em 1em 1em;
			    // color: #262626;
			    .font(1.2em,0.6em,#262626);
			}
		}
		
		.search-button{
			position: absolute;
			right: 0.6em;
			top: 0;
			// height: 100%;
			// width: 24px;
			// background: url(~images/icon/search.png) no-repeat center;
			// background-size: 1.2rem;
			.bg(24px,100%,transparent,'~images/icon/search.png',1.2rem);
		}
	}
</style>
