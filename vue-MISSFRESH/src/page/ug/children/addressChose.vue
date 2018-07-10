<template>
    <div class="address-chose">
    	<!-- <div class="header">
    		<h2>选择收货地址<i>新增地址</i></h2>
    	</div> -->
    	<mheader title="选择收货地址">
    		<div class="header-right-buttom" @click="newAction(true)">新增地址</div>
    	</mheader>
    	<div class="address-bar">
    		<div class="address-input">
    			<router-link :to="{path: '/ug/citylist'}" replace tag="div" class="address-city ellips">{{choseCity}}</router-link>
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
    	<div class="location-list" v-show="addressList.length>0">
    		<div class="location-mine">我的收货地址</div>
    		<ul>
    			<li class="address-content"  v-for="item in addressList.slice(0,showIndex)" @click="changeCurrentRegion(item)">
	    			<div class="address-detail">
	    				<div class="address-info">
	    					<span class="address-tag" v-if="item.tag === 'HOME'">住宅</span>
	    					<span class="address-tag" v-else-if="item.tag === 'COMPANY'">公司</span>
	    					<span class="address-tag" v-else-if="item.tag === 'SCHOOL'">学校</span>
	    					<span class="address-tag" v-else>其他</span>
	    					<span class="address-location">{{item.province+' '+item.city+' '+item.area+' '+item.address_detail}}</span>
	    				</div> 
	    				<div class="address-owner">
	    					<span class="owner-name">{{item.name}}</span> 
	    					<span class="owner-phone">{{item.phone_number}}</span>
	    				</div>
	    			</div>
	    		</li>
    		</ul>
    		<div class="location-more" v-show="addressList.length>2&&showIndex<=2" @click="showAllAddress">更多收货地址</div>
    	</div>

    	<transition name="bottom" mode="out-in">
    		<addressNew v-show="newShow" v-on:newAction="newAction" v-on:getAddressList="getAddressList" :defaultAddress="defaultAddress" :newShow="newShow"></addressNew>
		</transition>
    </div>  
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import {getStore} from 'src/config/mUtils.js'
	import {getAddressListAxios, locationRefreshAxios} from 'src/service/getData'
	import mheader from 'src/components/mheader/mheader'
	import addressNew from 'src/page/profile/children/addressNew'
	export default{
		data(){
			return {
				addressList: [],
				showIndex: 2,
				refreshtext: '',
				newShow: false,
				defaultAddress: ''
			}
		},
		mounted (){
			this.getAddressList();
		},
		computed: {
			...mapState([
                's_userInfo'
            ]),
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
        	if (to.fullPath=='/ug') {
        		// from.meta.keepAlive=false;
        		// to.meta.keepAlive=true;
        		console.log(1);
        		
        	} else{
        		// from.meta.keepAlive=false;
        		// to.meta.keepAlive=true;
        		// this.$route.meta.keepAlive=true;
        		// console.log(this.$route.meta.keepAlive);
        		console.log(2);
        		// this.$router.push({path: '/ug/citylist'})
        	}
        	next();
        },
		methods: {
			...mapMutations([
                'SET_CURRENTCITY', 'SET_POSITION'
            ]),
            // 收货地址列表
			getAddressList(){
				let userId=getStore('userId');
				getAddressListAxios(this.s_userInfo.userId||userId).then(response=>{
					console.log(response);
					this.addressList=response;
				})
			},
			// 显示全部地址
			showAllAddress() {
				this.showIndex=this.addressList.length;
			},
			//改变当前城市信息
			changeCurrentRegion(city){
				let chosecity={
					// id: city.adcode,
					id: city.code,
					name: city.city,
					province: city.province,
					// district: city.district
					district: city.area
				};
				let building={
					// address: city.address,
					address: city.full_address,
					distance: city.distance||'',
					// name: city.title
					name: city.address_1
				};
				let location={
					// accuracy: city.type,
					accuracy: city.default_,
					// lat: city.location.lat,
					lat: city.lat_lng.split(',')[0],
					// lng: city.location.lng
					lng: city.lat_lng.split(',')[1]
				};
				let position={
					// accuracy: city.type,
					accuracy: city.default_,
					// lat: city.location.lat,
					lat: city.lat_lng.split(',')[0],
					// lng: city.location.lng
					lng: city.lat_lng.split(',')[1]
				}
				let station={
					id: city.id,
				};
				/*this.SET_POSITION({
					id: city.adcode,
					name: city.name,
					province: city.province,
					district: city.district
				}, {
					address: city.address,
					distance: city.distance,
					name: city.name
				}, {
					accuracy: city.type,
					lat: city.location.lat,
					lng: city.location.lng
				}, {
					accuracy: city.type,
					lat: city.location.lat,
					lng: city.location.lng
				}, {
					id: city.id,
				});*/
				this.SET_POSITION({
					type: 1,
					city: chosecity, 
					building, 
					location, 
					position, 
					station
				});
				// this.$router.push('/ug');
				this.$router.replace('/ug');
			},
			//刷新当前位置
			async locationRefresh(){
				this.refreshtext="正在获取";
				let response=await locationRefreshAxios();
				this.SET_CURRENTCITY({
					currentCity: response.ad_info.city
				})
				this.refreshtext='';
			},
			// 操作添加新地址出现或消失
			newAction(status){
				this.defaultAddress='';
				this.newShow=status;
			},
		},
		components: {
			mheader,
			addressNew
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
		padding-top: 42px;
		/* .header{
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
		} */
		.address-bar{
			background-color: #fff;
			padding: 0.625rem 0.9375rem 0.625rem 0.9375rem;
			height: auto;
			.address-input{
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				overflow: hidden;
				white-space: nowrap;
				background-color: #f5f5f5;
				border-radius: 0.25em;
				height: 2.1875rem;
    			line-height: 2.1875rem;
				.address-city{
					width: 25%;
					padding-left: 3%;
    				padding-right: 0.8rem;
					box-sizing: border-box;
					position: relative;
					&:after{
						content: '';
						.positionY();
		    			right: 0;
						.bg(1rem,1rem,transparent,'~images/icon/address-city.png',80% 80%);

					}
				}
				.address-position{
					width: 75%;
					position: relative;
					&:before{
						content: '';
						display: inline-block;
						vertical-align: top;
						margin-top: 0.5rem;
						.bg(1.1875rem,1.1875rem,transparent,'~images/icon/address-position.png',80% 80%);
					}
				}
			}
		}
		.trans-tip{
			padding-left: 0.9rem;
			.font(2.25rem,0.75rem,#f4a22d);
		}
		.location-bar{
			line-height: 2.5rem;
			height: 2.5rem;
			background: white;
			padding-left: 0.9375rem;
			position: relative;
			overflow: hidden;
			white-space: nowrap;
			&:before{
				content: '';
				display: inline-block;
				vertical-align: top;
				.bg(2.5rem,2.5rem,transparent,'~images/icon/location-bar.png',60% 60%);
			}
			.location-info{
				color: #969696;
				font-size: 0.875rem;
			}
			.location-refresh{
				float: right;
				.bg(2.5rem,2.5rem,transparent,'~images/icon/location-refresh.png',60% 60%);
			}
		}
		.location-list{
		    background: #fff;
		    .location-mine{
		    	border-bottom: 0.0625rem solid #ddd;
		    	.font(2.0625rem,0.75rem,#666);
		    	height: 2.0625rem;
		    	position: relative;
		    	padding-left: 0.9375rem;
		    	background: @bg_color;
		    }
		    .address-content{
		    	margin: 0 0.9375rem;
		    	border-bottom: 0.0625rem solid #f5f5f5;
		    	.address-detail{
		    		padding: 1.25rem 0;
		    		white-space: nowrap;
		    		overflow: hidden;
		    		.font(1.25rem,1rem,#b8b8b8);
		    		position: relative;
		    		&:after {
		    			content: '';
		    			.bg(1.2rem,1.2rem,transparent,'~images/icon/right-jiantou.png',100% 100%);
		    			.positionY();
		    			right: 0;
		    		}
		    		.address-info{
		    			.address-tag{
		    				background-color: @color_main;
		    				color: #fff;
		    				font-size: 0.5rem;
		    				border-radius: 0.125rem;
		    				padding: 0.1rem;
		    			}
		    			.address-location{
		    				display: inline-block;
		    				width: 85%;
		    				overflow: hidden;
		    				text-overflow: ellipsis;
		    				white-space: nowrap;
		    				vertical-align: middle;
		    				color: #4b4b4b;
		    			}
		    		}
		    		.address-owner{
		    			line-height: 1.5rem;
		    			.owner-name{

		    			}
		    			.owner-phone{

		    			}
		    		}
		    	}
		    }
		    .location-more{
		    	// color: #b8b8b8;
		    	text-align: center;
		    	height: 3.125rem;
		    	// font-size: 1rem;
		    	position: relative;
		    	// line-height: 3.125rem;
		    	.font(3.125rem,1rem,#b8b8b8);
		    	&:after{
					content: '';
					display: inline-block;
					vertical-align: middle;
				    transform: rotate(90deg);
					.bg(3.125rem,3.125rem,transparent,'~images/icon/right-jiantou.png',36% 36%);
				}
		    }
		}
	}
</style>
