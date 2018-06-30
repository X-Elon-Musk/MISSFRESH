<template>
    <div class="profile-item-page profile-item-page-address">
    	<mheader title="收货地址">
    		<!-- <router-link :to="{path: '/profile/addressNew'}" tag="div" class="add-address">添加</router-link> -->
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
		<transition name="bottom" mode="out-in">
    		<addressNew v-show="newShow" v-on:newAction="newAction" :defaultAddress="defaultAddress"></addressNew>
		</transition>
		<!-- <transition name="bottom" mode="out-in">
    		<addressNew v-show="writeAddressShow" v-on:newAction="newAction" :defaultAddress="defaultAddress"></addressNew>
		</transition> -->
    </div>  
</template>
<script>
	import {mapState} from 'vuex'
	import {getAddressListAxios} from 'src/service/getData'
	import mheader from 'src/components/mheader/mheader'
	import addressNew from './addressNew'
	export default{
		data(){
			return {
				newShow: false,
				writeAddressShow: false,
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
        },
        methods: {
			/*addAddress(){
				this.$router.go(-1);
			}*/
			// 收货地址列表
			getAddressList: function () {
				console.log('___________________________');
				console.log(this.s_userInfo.userId);
				getAddressListAxios(this.s_userInfo.userId).then(response=>{
					// this.searchResult=response.data;
					console.log(response);
					this.addressList=response;
					console.log('___________________________');
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
		background: #F9F9F9;
		a{
			.text-prompt.active{
				color: @color_gray;
			}
		}
		.header-component{
			text-align: center;
			/* .add-address{
				position: absolute;
				right: 0;
				top: 0;
				height: 100%;
				padding: 0 1em;
			} */
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
					.address-text{
						.font(1.7em,0.8em,#4b4b4b);
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
							margin-right: 0.5em;
						}
					}
					
				}
				.address-write{
					.positionY();
					right: 7%;
					padding: 0.5em;
					font-size: 0.8em;
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
	}
</style>
