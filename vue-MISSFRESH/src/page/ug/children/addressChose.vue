<template>
    <div class="address-chose">
    	<div class="header">
    		<h2>选择收货地址<i>新增地址</i></h2>
    	</div>
    	<div class="address-bar">
    		<div class="address-input">
    			<router-link :to="{path: '/ug/citylist'}" replace tag="div" class="address-city">{{choseCity}}</router-link>
    			<router-link :to="{path: '/ug/locationsearch'}" replace tag="div" class="address-position">请输入要收货的小区/写字楼</router-link>
    		</div>
    	</div>
    	<div class="trans-tip">因各地区商品和配送服务不同，请您选择准确收货地址</div>
    	<div class="clearfix location-bar">
    		<span>
    			<span class="location-success">{{currentCity}}</span> 
    			<span class="location-info">当前位置</span>
    		</span> 
    		<span class="location-refresh location-loading" @click="locationRefresh"></span>
    	</div>
    </div>  
</template>
<script>
	import {mapMutations} from 'vuex'
	import {getStore} from 'src/config/mUtils.js'
	export default{
		data(){
			return {
				refreshtext: ''
			}
		},
		computed: {
	    	//当前城市
            currentCity: function () {
            	return this.refreshtext || getStore('currentCity');
            },
            //选择的城市
            choseCity: function () {
            	return getStore('choseCity');
            }
        },
        beforeRouteLeave(to, from, next){
        	console.log(to);
        	console.log(from);
        	// if (to.name=='http://localhost:8080/#/ug') {
        	if (to.fullPath=='/ug/') {
        		from.meta.keepAlive=true;
        		// to.meta.keepAlive=true;
        		console.log(1);
        	} else{
        		from.meta.keepAlive=false;
        		// to.meta.keepAlive=true;
        		// this.$route.meta.keepAlive=true;
        		console.log(this.$route.meta.keepAlive);
        		console.log(2);
        	}
        	next();
        },
		methods: {
			...mapMutations([
                'SET_CURRENTCITY'
            ]),
			//刷新当前位置
			locationRefresh(){
				let _this=this;
				this.refreshtext="正在获取";
				this.axios.get('http://localhost:3390/position/location')
				.then(function (response) {
					_this.SET_CURRENTCITY({
						currentCity: response.data.ad_info.city
					})
					_this.refreshtext='';
				})
				.catch(function (error) {
				  	console.log(error);
				});	
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
					width: 25%;
					padding-left: 4%;
					position: relative;
					&:after{
						content: '';
						display: inline-block;
						vertical-align: top;
						margin-top: 0.6em;
						margin-left: 6%;
						.bg(0.8em,0.8em,transparent,'~images/icon/address-city.png',100% 100%);
					}
				}
				.address-position{
					width: 75%;
					position: relative;
					// margin-left: 1em;
					&:before{
						content: '';
						display: inline-block;
						vertical-align: top;
						margin-top: 0.6em;
						margin-right: 2%;
						.bg(0.8em,0.8em,transparent,'~images/icon/address-position.png',100% 100%);
					}
				}
			}
		}
		.trans-tip{
			// font-size: 0.7em;
			// color: #f4a22d;
			padding-left: 0.9em;
			height: 2em;
			// line-height: 2em;
			.font(2em,0.7em,#f4a22d);
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
			&:before{
				content: '';
				display: inline-block;
				vertical-align: top;
				.bg(2.5em,2.5em,transparent,'~images/icon/location-bar.png',70% 70%);
			}
			.location-info{
				color: #969696;
				font-size: 0.875rem;
			}
			.location-refresh{
				float: right;
				// width: 2.5em;
				// height: 2.5em;
				.bg(2.5em,2.5em,transparent,'~images/icon/location-refresh.png',70% 70%);
			}
		}
	}
</style>
