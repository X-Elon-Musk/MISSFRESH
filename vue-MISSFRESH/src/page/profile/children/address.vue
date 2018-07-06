<template>
    <div class="profile-item-page profile-item-page-address" :style="{zIndex:addressIndex}">
    	<mheader title="收货地址">
    		<div class="header-right-buttom" @click="newAction(true)">添加</div>
    	</mheader>
    	<ul class="address-list">
    		<li class="address-item" v-for="item in addressList">
    			<div class="address-content">
    				<h2 class="address-text address-name">{{item.name}}</h2>
    				<p class="address-text address-phone">{{item.phone_number}}</p>
    				<p class="address-text address-id">
    					<span class="address-types" v-if="item.tag === 'HOME'">[住宅]</span>
    					<span class="address-types" v-else-if="item.tag === 'COMPANY'">[公司]</span>
    					<span class="address-types" v-else-if="item.tag === 'SCHOOL'">[学校]</span>
    					<span class="address-types" v-else>[其他]</span>
    					<span class="address-detail">{{item.province+item.city+item.area+'('+item.address_detail+')'}}</span>
    				</p>
    			</div>
    			<div class="address-write" @click="writeAddress(item)">编辑</div>
    		</li>
    	</ul>
    	<div class="not-address" v-show="addressList.length==0">您还没有收货地址,请新增地址</div>
    	<div class="add-address-button" @click="newAction(true)">新增收货地址</div>
		<transition name="bottom" mode="out-in">
    		<addressNew v-show="newShow" v-on:newAction="newAction" v-on:getAddressList="getAddressList" :defaultAddress="defaultAddress" :newShow="newShow"></addressNew>
		</transition>
    </div>  
</template>
<script>
	import {mapState} from 'vuex'
	import {getAddressListAxios} from 'src/service/getData'
	import {getStore} from 'src/config/mUtils.js'
	import mheader from 'src/components/mheader/mheader'
	import addressNew from './addressNew'
	export default{
		data(){
			return {
				newShow: false,
				addressList: [],
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
            // 页面层级
            addressIndex: function () {
            	return this.newShow ? 5 :3;
            }
        },
        methods: {
			// 收货地址列表
			getAddressList: function () {
				/*console.log('++++++++++++++');
				console.log('++++++++++++++');
				console.log(this.s_userInfo);
				console.log('++++++++++++++');*/
				let userId=getStore('userId');
				getAddressListAxios(this.s_userInfo.userId||userId).then(response=>{
					this.addressList=response;
				})
			},
			// 操作添加新地址出现或消失
			newAction(status){
				this.defaultAddress='';
				this.newShow=status;
			},
			// 编辑收货地址
			writeAddress(item){
				this.newShow=true;
				this.defaultAddress=item;
			}
		},
		components: {
			mheader,
			addressNew
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.profile-item-page.profile-item-page-address{
		background: #f0f0f0;
		overflow-y: auto; 
		padding-bottom: 91px;
		box-sizing: border-box;
		a{
			.text-prompt.active{
				color: @color_gray;
			}
		}
		.header-component{
			text-align: center;
		}
		.address-list{
			.address-item{
				.wh(auto);
			    padding: 15px 15px 12px 0;
			    border-bottom: 1px solid #ddd;
			    background: #fff;
			    margin-bottom: 9px;
			    position: relative;
				.address-content{
					width: 83%;
					padding-left: 20px;
					box-sizing: border-box;
					// .font(1.125rem,0.875rem,#4b4b4b);
					.font(26px,14px,#4b4b4b);
					.address-text{
						// .font(1.7em,0.8em,#4b4b4b);
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					.address-phone{
					    color: #666;
					    // font-size: 12px;
					}
					.address-id{
						span{
							vertical-align: middle;
						}
						.address-types{
							color: @color_main;
							margin-right: 4px;
						}
					}
				}
				.address-write{
					.positionY();
					right: 7%;
					padding: 0.375rem;
					// font-size: 0.8em;
					font-size: 13px;
					color: #969696;
					&:before{
						content: '';
						.positionY();
						left: 0;
						width: 1px;
						height: 120%;
						background: #f0f0f0;
					}
				}
			}
		}
		.not-address {
			margin: 120px auto 0;
			background: url(~images/icon/not-address.png) center no-repeat;
			background-size: 90px 90px;
			padding-top: 128px;
			text-align: center;
			font-size: 0.9em;
			color: #7f7f7f;
			line-height: 1.2em;
		}
		.add-address-button{
		    // height: 38px;
		    width: 100%;
	        height: 3rem;
		    background: @color_main;
		    text-align: center;
		    // color: #fff;
		    // line-height: 38px;
		    // font-size: 1.1rem;
	     //    line-height: 3rem;
	        .font(3rem,1.1rem,#fff);
    		font-weight: 900;
		    border-radius: 5px;
		    position: fixed;
		    left: 0;
		    bottom: 53px;
		    z-index: 1;
		}
	}
</style>
