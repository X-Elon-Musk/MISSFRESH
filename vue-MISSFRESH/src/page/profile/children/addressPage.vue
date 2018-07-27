<template>
    <div class="profile-item-page profile-item-page-address" :style="{zIndex:addressIndex}">
    	<mheader title="收货地址" :functionOrLink="isComponent" v-on:backFunction="backFunction">
    		<div class="header-right-buttom" v-show="!isComponent" @click="newAction(true)">添加</div>
    	</mheader>
    	<ul class="address-list">
    		<li class="address-item" v-for="(item,index) in addressList" :key="index">
    			<div class="address-content-container" :style="{width:isComponent?'85%':'92%'}" @click="checkedAddress(item,index)">
	    			<i class="marquee" v-show="isComponent" :class="{active:index==addressChose}"></i>
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
    			</div>
    			<div class="address-write" @click="writeAddress(item)">编辑</div>
    		</li>
    	</ul>
    	<div class="not-address" v-show="addressList.length==0">您还没有收货地址,请新增地址</div>
    	<!-- <div class="add-address-button" :style="{bottom:isComponent?'0px':'53px'}" @click="newAction(true)">新增收货地址</div> -->
    	<div class="add-address-button" v-if="!isComponent" @click="newAction(true)">新增收货地址</div>
    	<div class="add-address-button add-address-button-isComponent" v-else @click="newAction(true)">新增收货地址</div>
    	<!-- 编辑收货地址/新增收货地址 -->
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
				defaultAddress: '',
				addressChose: 99999
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
			getAddressList(){
				let userId=this.s_userInfo.userId||getStore('userId');
				if (userId) {
					getAddressListAxios(userId).then(response=>{
						this.addressList=response;
					})				
				}
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
			},
			// 页面显示或者隐藏
			backFunction(){
				this.$emit("backFunction");
			},
			// 选择收货地址
			checkedAddress(item,index){
				if (this.isComponent) {
					this.addressChose=index;	
					
					this.$emit("addressConfirm", item);
					this.backFunction();
				}
			}
		},
		props: ['isComponent'],
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
			z-index: 3;
		}
		.address-list{
			.address-item{
				.wh(auto);
			    padding: 15px 15px 12px 0;
			    border-bottom: 1px solid #ddd;
			    background: #fff;
			    margin-bottom: 9px;
			    position: relative;
		        
		        .marquee{
		        	margin-right: 0;
		        }
		        .address-content-container{
		        	width: 83%;
					width: 74%;
					display: flex;
			        flex-direction: row;
			        align-items: center;
			        .address-content{
						width: 90%;
						padding-left: 20px;
						box-sizing: border-box;
						.font(26px,14px,#4b4b4b);
						.address-text{
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						.address-phone{
						    color: #666;
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
		        }
				.address-write{
					.positionY();
					right: 7%;
					padding: 0.375rem;
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
		    width: 100%;
	        height: 3rem;
		    background: @color_main;
		    text-align: center;
	        .font(3rem,1.1rem,#fff);
    		font-weight: 900;
		    border-radius: 5px;
		    position: fixed;
		    left: 0;
		    bottom: 53px;
		    z-index: 1;
		}
		.add-address-button-isComponent{
			bottom: 0;
		}
	}
</style>
