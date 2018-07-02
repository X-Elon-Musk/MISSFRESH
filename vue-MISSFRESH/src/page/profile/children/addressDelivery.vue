<template>
    <div class="profile-item-page profile-item-page-addressDelivery">
    	<mheader title="收货地址" :functionOrLink="true" v-on:backFunction="deliveryBackFunction"></mheader>
    	<div class="addressDelivery-content">
    		<div class="address-bar">
	    		<div class="address-input">
	    			<div class="ellips address-city" @click='pickerAction(true)'>{{city||choseCity}}</div>
	    			<div class="search-box">
			        	<div class="search-bar">
			        		<form class="search-form" v-on:submit.prevent>
				        		<i class="search-logo"></i> 
				        		<input type="text" placeholder="请搜索您收货的写字楼/小区" autofocus="autofocus" class="search-input" required v-model='inputVaule'>
				        		<input type="submit" name="submit" class="search-submit" @click='suggestionLocation' value="提交">
				        	</form>
			        	</div>
			        </div>
	    		</div>
	    	</div>
			<ul class="search-result">
				<!-- <li class="search-list" v-for="(item,index) in searchResult" :key="index" @click="changeCurrentRegion(item)"> -->
				<li class="search-list" v-for="(item,index) in searchResult" :key="index" @click="locationChose(item)">
					<div class="location-title">{{item.title}}</div> 
					<div class="location-desc">{{item.address}}</div>
				</li>
			</ul>
		</div>
		<div class="not-address" v-show="searchResult.length==0">
			<div>您所选城市在“<span class="no-address-city">{{city||choseCity}}</span>”</div>
			<div>请搜索该城市内您收货的写字楼、小区</div>
		</div>
		<div class="region-picker-backdrop" v-show="pickerShow"></div>
		<transition name="sideslip" mode="out-in">
			<div class="region-picker" v-show="pickerShow">
				<div class="mt-picker">
		    		<div class="clearfix picker-header">
		    			<span class="f_l picker-header-button picker-cancle" @click='pickerAction(false)'>取消</span>
		    			<span class="">请选择城市</span>
		    			<span class="f_r picker-header-button picker-sure" @click='cityChose'>确定</span>
		    		</div>
		    		<mt-picker :slots="slots" value-key="name" ref="picker" @change="onValuesChange"></mt-picker>
		    	</div>
	    	</div>
    	</transition>
    </div>  
</template>
<script>
	import {mapState} from 'vuex'
	import {CITY_DATA} from 'src/api/cityData'  
	import {getStore} from 'src/config/mUtils.js'
	import {suggestionLocationAxios} from 'src/service/getData'
	import mheader from 'src/components/mheader/mheader'
	export default{
		data(){
			return {
				inputVaule: '',
				city: '',
				searchResult: [],
				pickerCity: '',
				myAdress:null,
				slots: [{
					flex: 1,
					values: CITY_DATA,
					defaultIndex: 0,
					className: 'province',
					textAlign: 'center'
				}, {
					flex: 1,
					values: CITY_DATA[0].child,
					defaultIndex: 0,
					className: 'district',
					textAlign: 'center'
				}],
				pickerShow: false
			}
		},
		watch: {
			newShow: function () {
				this.inputVaule='';
				this.searchResult=[];
			}
		},
		computed: {
            //选择的城市
            choseCity: function () {
            	return getStore('choseCity');
            }
        },
        methods: {
        	// 滚动选择城市列表
			onValuesChange(picker, values) {
				if(!values[0]){
					console.log(1);
					this.$nextTick(()=>{
						if(this.myAdress){
	                        // 赋默认值
	                    }else{
	                     	picker.setValues([CITY_DATA[0],CITY_DATA[0].child[0]])
	                    }
	                });
				}else{
					picker.setSlotValues(1, values[0].child);
					let town = [];
					if(values[1]){
						town = values[1].child;
					}
					picker.setSlotValues(2,town);
					console.log(values[0].name, values[1].name);
					this.pickerCity=values[1].name;
				}
			},
			// 操作选择城市列表出现或消失
			pickerAction(status){
				this.pickerShow=status;
			},
			// 搜索地址推荐
			suggestionLocation: function () {
				let _this=this;
				if (this.inputVaule) {
					let keyword=this.inputVaule,
					cityName=this.city;
					suggestionLocationAxios(keyword, cityName).then(response=>{
						this.searchResult=response.data;
					})
				}
			},
			// 确定选择城市
			cityChose(){
				// this.pickerShow=false;
				this.pickerAction(false);
				this.city=this.pickerCity;
			},
			//详细地址选择
			locationChose(item){
				this.$emit("locationSure",item);
			},
			//页面显示或者隐藏
			deliveryBackFunction(){
				this.$emit("deliveryAction", false);
			}
		},
		props: ['newShow'],
		components: {
			mheader
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.profile-item-page.profile-item-page-addressDelivery{
		padding-top: 42px;
		box-sizing: border-box;
		background: #f0f0f0;
		z-index: 5;
		.header-component{
			position: fixed;
			left: 0;
			top: 0;
		}
		.addressDelivery-content{
			position: absolute;
			left: 0;
			top: 42px;
			right: 0;
			bottom: 0;
			overflow-y: auto;
		}
		.address-bar{
			background-color: #fff;
			padding: 0.625rem 0.9375rem 0.625rem 0.9375rem;
			height: auto;
			font-size: 0.8em;
		    box-shadow: 0 0 0.625rem rgba(0,0,0,.06);
			.address-input{
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				overflow: hidden;
				white-space: nowrap;
				background-color: #eee;
				border-radius: 0.25em;
				height: 2em;
				line-height: 2em;
				.address-city{
					width: 25%;
					padding-left: 4%;
					padding-right: 0.8em;
					box-sizing: border-box;
					position: relative;
					&:after{
						content: '';
						position: absolute;
						top: 0.6em;
						right: 0;
						.bg(0.8em,0.8em,transparent,'~images/icon/address-city.png',100% 100%);
					}
				}
				.address-position{
					width: 75%;
					position: relative;
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
		.search-box{
			color: #4b4b4b;
			border-bottom: none;
			border-top-width: 0;
			width: 75%;
    		position: relative;
			box-sizing: border-box;
			position: relative;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 15%;
				height: 70%;
				width: 1px;
				background: #C6C6C6;
				z-index: 1;
			}
			.search-bar{
				.wh(100%,100%);
				.search-form{
					display: block;
					.wh(100%,100%);
					position: relative;
					line-height: 2em;
					.search-logo{
						position: absolute;
						left: 0.5em;
						top: 1px;
						.bg(24px,24px,transparent,'~images/icon/search-logo.png',66% 66%);
					}
					.search-input{
						background-color: transparent;
						.wh(100%,100%);
						border-radius: 0.25rem;
						text-indent: 1.875rem;
						border: none;
						outline: none;
						line-height: 2em;
					}
					.search-submit{
						display: none;
					}
				}
			}
		}
		.search-result{
			.wh(auto, 100%);
			padding: 0 4%;
			box-sizing: border-box;
			background: #fff;
			.search-list{
				color: #4C4440;
				border-bottom: 1px solid #f5f5f5;
				line-height: 1.6em;
				font-size: 0.7em;
				padding: 0.35em 0 0.35em 23px;
				position: relative;
				&:before{
					content: '';
					.positionY();
					left: 0;
					.bg(14px,16px,transparent,'~images/icon/location.png',100% 100%);
				}
				.location-title{
					color: #4C4440;
					font-weight: 700;
				}
			}
		}
		.not-address {
			margin: 120px auto 0;
			background: url(~images/icon/address-search.png) center no-repeat;
			background-size: 70px 70px;
			padding-top: 128px;
			text-align: center;
			font-size: 0.9em;
			color: #7f7f7f;
			line-height: 1.2em;
			.no-address-city{
			    color: #ffad3d;
			}
		}
		.region-picker-backdrop{
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 10;
			background-color: rgba(0,0,0,0.6);
		}
		.region-picker{
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 10;
			.mt-picker{
				position: absolute;
				left: 0;
				bottom: 0;
				.wh(216px);
				.picker-header{
					text-align: center;
					background-color: #F9F9F9;
					line-height: 36px;
					font-size: 14px;
					span{
						padding: 10px;
					}
					.picker-header-button{
						line-height: 1;
						color: @color_main;
					}
				}
				.picker-center-highlight{
					background: linear-gradient(180deg,rgba(105,94,107,.2),rgba(105,94,107,.2) 50%,transparent 50%) top left/100% 1px no-repeat,linear-gradient(0deg,rgba(105,94,107,.2),rgba(105,94,107,.2) 50%,transparent 50%) bottom left/100% 1px no-repeat;
				}
				.picker {
				    overflow: hidden;
					font-size: 14px;
					background: #fff;
					.picker-item{
						font-size: 14px;
					}
				}
			}
		}
		.sideslip-enter-active, .sideslip-leave-active {
	        transition: all .4s;
	    }
	    .sideslip-enter, .sideslip-leave-active {
	        transform: translate3d(0, 216px, 0);
	        // opacity: 0;
	    }
	}
</style>
