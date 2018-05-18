<template>
    <div class="clearfix ug-header">
    	<router-link :to="{path: '/ug/addressChose'}" tag="div" class="delivery-info">
		
    	<!-- <div class="delivery-info"> -->
	        <div class="delivery-time">
	        	<img src="~images/icon/delivery-time-0.png" alt="" v-if="deliveryTime=='tomorrow'">
	        	<img src="~images/icon/delivery-time-0.png" alt="" v-else-if="deliveryTime=='hours'">
	        	
	        </div>
	        <div class="delivery-place">
	        	<!-- 北京 -->
	        	{{currentCity}}
	        </div>
	        <div class="short-tips" v-show="support" @click="closeTips">本城市支持会员1小时达，选择详细地址完成匹配</div>
        <!-- </div> -->
        </router-link>
        <!-- <div class="f_r search-button"></div>    -->
        <router-link :to="{path: '/ug/search'}" tag="div" class="f_r search-button"></router-link>
    </div>  
</template>
<script>
	export default{
		data(){
			return {
				//送货到家时间
				deliveryTime: 'tomorrow',
				//本城市是否支持会员1小时达
				support: true
			}
		},
		props: ['currentCity'],
		methods: {
			closeTips: function () {
				this.support=false;
			}
				
		}
	}
</script>
<style lang="less">
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
				    width: 1em;
				    height: 1em;
				    background: url(~images/icon/arrow.png) no-repeat center;
				    background-size: 0.6rem;
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
			    font-size: 0.6em;
			    line-height: 1.2em;
			    background: transparent url(~images/icon/header-prompt.png) no-repeat;
			    background-size: 100% 100%;
			    padding: 1.2em 1em 1em;
			    color: #262626;
			}
		}
		
		.search-button{
			position: absolute;
			right: 0.6em;
			top: 0;
			height: 100%;
			width: 24px;
			background: url(~images/icon/search.png) no-repeat center;
			background-size: 1.2rem;
		}
	}
</style>
