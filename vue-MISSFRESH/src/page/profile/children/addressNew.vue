<template>
    <div class="profile-item-page profile-item-page-addressNew">
    	<mheader title="新增收货地址"></mheader>
    	<ul class="list">
    		<li class="item-block">
    			<span class="input-label">收件人</span>
    			<input v-model="name" type="text" placeholder="收货人姓名" class="item-input">
    			<img src="~images/icon/close.png" alt="" class="clear-button" v-show="name" @click="clear('name')">
    		</li>
    		<li class="item-block">
    			<span class="input-label">手机号码</span>
    			<input v-model="phone_number" type="text" placeholder="配送员联系您的电话" class="item-input">
    			<img src="~images/icon/close.png" alt="" class="clear-button" v-show="phone_number" @click="clear('phone_number')">
    		</li>
    		<li class="clearfix item-block">
    			<span class="input-label">收货地址</span>
    			<router-link :to="{path: '/profile/addressDelivery'}" tag="div" class="f_r go-right">
    				<span class="address-icon"></span>
	    			<span v-show="1" class="item-placeholder">{{'小区/写字楼'}}</span>
	    			<span class="go-right-icon"></span>
    			</router-link>
    		</li>
    		<li class="item-block">
    			<span class="input-label">楼号门牌</span>
    			<input v-model="address_2" type="text" placeholder="楼号/单元/门牌号" class="item-input">
    			<img src="~images/icon/close.png" alt="" class="clear-button" v-show="address_2" @click="clear('address_2')">
    		</li>
    		<li class="clearfix item-block">
    			<span class="input-label">地址类型</span>
    			<ul class="f_r item-radio-container">
    				<!-- <li>住宅</li>
    				<li>公司</li>
    				<li>学校</li>
    				<li>其他</li> -->
    				<li v-for="(item,index) in tags" @click="radioSwitch(index,item.tag)" :class="{active:index==radioIndex}">{{item.text}}</li>
    			</ul>
    		</li>

    	</ul>
    	<div class="button-common save-address" @click="saveAddress">保存收货地址</div>	
    </div>  
</template>
<script>
	import {mapState} from 'vuex'
	import {saveAddressAxios} from 'src/service/getData'

	import mheader from 'src/components/mheader/mheader'

	export default{
		data(){
			return {
				address_1: '',
				area: '',
				city: '',
				code: '',
				full_address: '',
				lat_lng: '',
				province: '',

				name: '',
				phone_number: '',
				address_2: '',
				tag: '',
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
				radioIndex: 9999
				
				
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
			radioSwitch(index, itemtag){
				this.radioIndex=index;
				this.tag=itemtag;
			},
			//保存收货地址
			async saveAddress(){
				let response=await saveAddressAxios(this.address_1, this.address_2, this.area, this.city, this.code, this.full_address, this.lat_lng, this.name, this.phone_number, this.province, this.tag);
			}
		},
		components: {
			mheader
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.profile-item-page.profile-item-page-addressNew{
		background: #f0f0f0;
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
		}
		.save-address{
			width: 92%;
			margin: 1em auto 0;
		}
	}
</style>
