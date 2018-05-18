<template>
    <div class="address-chose">
    	<div class="header">
    		<h2>选择收货地址<i>新增地址</i></h2>
    	</div>
    	<div class="address-bar">
    		<div class="address-input">
    			<!-- <div class="address-city">北京市</div> 
    			<div class="address-position">请输入要收货的小区/写字楼</div> -->
    			<router-link :to="{path: '/ug/citylist'}" tag="div" class="address-position">北京市</router-link>
    			<router-link :to="{path: '/ug/locationsearch'}" tag="div" class="address-position">请输入要收货的小区/写字楼</router-link>
    		</div>
    	</div>
    	<div class="trans-tip">因各地区商品和配送服务不同，请您选择准确收货地址</div>
    	<div class="clearfix location-bar">
    		<span>
    			<span class="location-success">北京市</span> 
    			<span class="location-info">当前位置</span>
    		</span> 
    		<span class="location-refresh location-loading"></span>
    	</div>
    </div>  
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		methods: {
			switchOver(index){
				
			}
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.address-chose{
		position: absolute; 
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 4; 
		background: @bg_color;
		overflow-y: auto;
		color: @color_common; 
		.header{
			height: 36px;
		    line-height: 36px;
		    background-color: #fff;
		    margin-bottom: 1px;
			h2{
				font-size: 17px;
				width: 100%;
			    text-align: center;
			    font-weight: normal;
			    position: relative;
			    i{
			    	display: none;
			    	position: absolute;
			    	top: 0;
			    	right: 0;
			    	line-height: 36px;
			    	padding: 0 0.625rem;
			    	color: #999;
			    }
			}
		}
		.address-bar{
			background-color: #fff;
			padding: 0.625rem 0.9375rem 0.625rem 0.9375rem;
			height: auto;
			font-size: 0.8em;
			.address-input{
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				overflow: hidden;
				white-space: nowrap;
				background-color: #f5f5f5;
				border-radius: 0.25em;
				height: 2em;
				line-height: 2em;
				.address-city{
					width: auto;
					padding: 0 0em;
					position: relative;
				}
				.address-position{
					position: relative;
					margin-left: 2em;
				}
			}
		}
		.trans-tip{
			font-size: 0.7em;
			color: #f4a22d;
			padding-left: 0.9em;
			height: 2em;
			line-height: 2em;
		}
		.location-bar{
			font-size: 0.8em;
			line-height: 2.5em;
			height: 2.5em;
			background: white;
			padding-left: 0.9375rem;
			position: relative;
			overflow: hidden;
			white-space: nowrap;
			.location-success{
				margin-left: 1.6875rem;
			}
			.location-info{
				color: #969696;
				font-size: 0.875rem;
			}
			.location-refresh{
				float: right;
				width: 3.4375rem;
				height: 2.5em;
			}
		}
	}
</style>
