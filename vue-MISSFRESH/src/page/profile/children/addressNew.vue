<template>
    <div class="profile-item-page profile-item-page-addressNew">
    	<mheader :title="defaultAddress?'编辑收货地址':'新增收货地址'" :functionOrLink="true" v-on:backFunction="newBackFunction">
    		<div class="header-right-buttom" v-show="defaultAddress" @click="deleteAddress(true)">删除</div>
    	</mheader>
    	<ul class="list">
    		<li class="item-block">
    			<span class="input-label">收件人</span>
    			<input v-model="name" type="text" placeholder="收货人姓名" class="item-input" ref="name">
    			<img src="~images/icon/close.png" alt="" class="clear-button" v-show="name" @click="clear('name')">
    		</li>
    		<li class="item-block">
    			<span class="input-label">手机号码</span>
    			<input v-model="phone_number" type="text" placeholder="配送员联系您的电话" class="item-input">
    			<img src="~images/icon/close.png" alt="" class="clear-button" v-show="phone_number" @click="clear('phone_number')">
    		</li>
    		<li class="clearfix item-block item-block-location">
    			<span class="input-label">收货地址</span>
    			<div class="f_r go-right" @click="deliveryAction(true)">
    				<span class="address-icon"></span>
	    			<span v-show="1" class="item-placeholder">{{location||'小区/写字楼'}}</span>
	    			<span class="go-right-icon"></span>
    			</div>
    		</li>
    		<li class="item-block">
    			<span class="input-label">楼号门牌</span>
    			<input v-model="address_2" type="text" placeholder="楼号/单元/门牌号" class="item-input">
    			<img src="~images/icon/close.png" alt="" class="clear-button" v-show="address_2" @click="clear('address_2')">
    		</li>
    		<li class="clearfix item-block">
    			<span class="input-label">地址类型</span>
    			<ul class="f_r item-radio-container">
    				<li v-for="(item,index) in tags" @click="radioSwitch(item.tag)" :class="{active:item.tag==tag}">{{item.text}}</li>
    			</ul>
    		</li>

    	</ul>
    	<div class="toast-wrap" v-show="toastWrap">
    		<span>{{toastWrap}}</span>
    	</div>
    	<div class="button-common save-address" @click="saveAddress">保存收货地址</div>	


    	<transition name="bottom" mode="out-in">
    		<addressDelivery v-show="deliveryShow" v-on:locationSure="locationSure" v-on:deliveryAction="deliveryAction" :newShow="newShow"></addressDelivery>
		</transition>
		
		<transition name="" mode="out-in">
    		<mprompt1 promptTitle="提示" promptText="确认删除此收货地址信息么!" v-show="mpromptShow" v-on:cancelActionFunction="deleteAddress(false)" v-on:confirmActionFunction="confirmActionFunction"></mprompt1>
		</transition>
    </div>  
</template>
<script>
	import {testTele} from 'src/config/mUtils'
	import {mapState} from 'vuex'
	import {addAddressAxios,deleteAddressAxios,updateAddressAxios} from 'src/service/getData'

	import mheader from 'src/components/mheader/mheader'
	import mprompt1 from 'src/components/mprompt1/mprompt1'
	import addressDelivery from './addressDelivery'

	export default{
		data(){
			return {
				address_1: '',
				area: '',
				city: '',
				code: '',
				address: '',
				full_address: '',
				lat_lng: '',
				province: '',
				location: '',
				name: '',
				phone_number: '',
				address_2: '',
				tag: 'HOME',
				tags: [{
					tag: 'HOME',
					text: '住宅'
				},{
					tag: 'COMPANY',
					text: '公司'
				},{
					tag: 'SCHOOL',
					text: '学校'
				},{
					tag: 'OTHER',
					text: '其他'
				}],
				
				deliveryShow: false,
				mpromptShow: false,
				// 当前为0-“添加”状态，还是为1-“编辑”状态
				newMode: 0,
				toastWrap: ''
			}
		},
		watch: {
			defaultAddress: function () {
				this.newMode=this.defaultAddress ? 1 : 0;
				this.name=this.defaultAddress ? this.defaultAddress.name : '';
				this.phone_number=this.defaultAddress ? this.defaultAddress.phone_number : '';
	            this.address_2=this.defaultAddress ? this.defaultAddress.address_2 : '';
	            this.location=this.defaultAddress ? this.defaultAddress.province+this.defaultAddress.city+this.defaultAddress.area+this.defaultAddress.address_1 : '';
	            this.tag=this.defaultAddress ? this.defaultAddress.tag : 'HOME';


	            this.address_1=this.defaultAddress ? this.defaultAddress.address_1 : '';
	            this.area=this.defaultAddress ? this.defaultAddress.area : '';
	            this.city=this.defaultAddress ? this.defaultAddress.city : '';
	            this.code=this.defaultAddress ? this.defaultAddress.code : '';
	            this.full_address=this.defaultAddress ? this.defaultAddress.full_address : '';
	            this.lat_lng=this.defaultAddress ? this.defaultAddress.lat_lng : '';
	            this.province=this.defaultAddress ? this.defaultAddress.province : '';
			},
			newShow: function () {
				if (this.newMode==0) {
					this.location='';
					this.name='';
					this.phone_number='';
					this.address_2='';
					this.tag='HOME';			
				}
			}
		},
		computed: {
	    	...mapState([
                's_userInfo'
            ]),
        },
        methods: {
        	//清除输入内容
			clear(type){
				this[type]='';
			},
			//选择地址类型
			radioSwitch(itemtag){
				this.tag=itemtag;
			},
			//保存收货地址
			async saveAddress(){
				let response;
				if (this.name=='') {
					this.promptText('请填写收货人姓名');
					return;			
				}
				if (this.phone_number=='') {
					this.promptText('请填写收货人手机号码');
					return;			
				}
				if (!testTele(this.phone_number)) {
					this.promptText('手机号码格式错误');
					return;			
				}
				if (this.location=='') {
					this.promptText('请选择收货地址');
					return;			
				}
				if (this.address_2=='') {
					this.promptText('请填写楼号门牌');
					return;			
				}
				this.address_detail=this.address_1+this.address_2;
				if (this.newMode==0) {
					response=await addAddressAxios(this.s_userInfo.userId, this.address_1, this.address_2, this.address_detail, this.area, this.city, this.code, this.full_address, this.lat_lng, this.name, this.phone_number, this.province, this.tag);	
				} else if(this.newMode==1){
					response=await updateAddressAxios(this.defaultAddress.id, this.address_1, this.address_2, this.address_detail, this.area, this.city, this.code, this.full_address, this.lat_lng, this.name, this.phone_number, this.province, this.tag);
				}
				if (response.code==0) this.addressActionComplete();	
			},

			// 操作选择收货地址页面出现或消失
			deliveryAction(status){
				this.deliveryShow=status;
			},
			// 赋值，item为来自子级的参数
			locationSure(item){
				this.deliveryShow=false;
				this.location=item.province+item.city+item.district+item.title;
				this.address_1=item.title;
				this.area=item.district;
				this.city=item.city;
				this.code=item.adcode;
				this.full_address=item.address;
				this.lat_lng=item.location.lat+','+item.location.lng;
				this.province=item.province;
			},
			// 页面显示或者隐藏
			newBackFunction(){
				this.$emit("newAction", false);
			},
			// 显示或隐藏提示
			deleteAddress(status){
				this.mpromptShow=status;
			},
			// 点击确定按钮，删除地址
			async confirmActionFunction(){
				let response=await deleteAddressAxios(this.defaultAddress.id);
				if (response.code==0) this.addressActionComplete();
			},
			// 地址添加或修改完成
			addressActionComplete(){
				this.$emit("getAddressList");
				this.$emit("newAction", false);
				this.deleteAddress(false);
			},
			// 提示文字
			promptText(text) {
				let _this=this;
				this.toastWrap=text;
            	let timer=setTimeout(()=>{
            		_this.toastWrap='';
            		clearTimeout(timer);
            	},3000)
			}
		},
		props: ['defaultAddress', 'newShow'],
		components: {
			mheader,
			addressDelivery,
			mprompt1
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.profile-item-page.profile-item-page-addressNew{
		background: #f0f0f0;
		.header-right-buttom{
			color: #b2b2b2;
		}
		.list{
			padding: 0 4%;
			box-sizing: border-box;
			background: #fff;
			.item-block{
				border-bottom: 1px solid #eee;
				padding: 8px 0;
				height: 34px;
				line-height: 34px;
				color: #272727;
				position: relative;
				.input-label{
					display: inline-block;
					vertical-align: middle;
					width: 5em;
				}
				.item-input{
					display: inline-block;
					vertical-align: middle;
					margin: 0;
					padding: 0;
				}
				.clear-button{
					display: inline-block;
					vertical-align: middle;
					.wh(20px,20px);
					.positionY();
					right: 0;
				}
				.go-right{
					display: inline-block;
					vertical-align: middle;
					width: calc(100% - 5em);
					padding-left: 20px;
					box-sizing: border-box;
					position: relative;
					.address-icon{
						.bg(18px,20px,transparent,'~src/images/icon/location.png',80% 80%);
						.positionY(55%);
						left: 0;
					}
					.item-placeholder{
						vertical-align: middle;
						color: #757575;
						font-size: 14px;
					}
					.go-right-icon{
						.bg(18px,20px,transparent,'~src/images/icon/right-jiantou.png',100% 100%);
						.positionY();
						right: 0;
					}
				}
				.item-radio-container{
					display: inline-block;
					vertical-align: middle;
					width: calc(100% - 5em);
					li{
						display: inline-block;
						vertical-align: middle;
						border-radius: 4px;
						padding: 0;
						line-height: 16px;
						font-size: 12px;
						border: 1px solid #c5c5c5;
						color: #c5c5c5;
						padding: 2px;
						box-sizing: border-box;
						margin-right: 1em;
					}
					li.active{
						border-color: @color_main;
						background: @color_main;
						color: #fff;
					}
				}
			}
			.item-block-location{
				height: auto;
				line-height: 20px;
				padding: 14px 0;
				.input-label{
					.positionY();
					left: 0;
				}
			}
		}
		.toast-wrap{
			z-index: 200;
			.positionCenter();
			border-radius: 5px;
			background-color: rgba(0,0,0,0.8);
			padding: 10px;
			font-size: 0.9em;
			color: #fff;
			height: auto;
			text-align: center;
		}
		.save-address{
			width: 92%;
			margin: 1em auto 0;
		}
	}
</style>
