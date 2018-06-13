<template>
    <div class="profile-item-page profile-item-page-phone">
    	<mheader title="绑定手机"></mheader>	
        <div class="login-panel">
        	<ul class="list-inset">
        		<li class="list-item">
        			<input v-model="telephone" type="tel" autofocus="autofocus" maxlength="11" placeholder="请输入手机号" class="panel-input panel-phone">
        			<i class="button-clear" v-show="telephone" @click="clear"></i>
        			<button class="item-right" :disabled="disabled" @click="getCode" :class="{active:disabled}">{{!disabled?'获取验证码':'验证码发送'}}</button>
        		</li>
        		<li class="list-item">
        			<input v-model="message" type="tel" maxlength="6" placeholder="输入验证码" class="panel-input panel-code">
        		</li>
        	</ul>
        	<div class="button-login">
        		<div class="button-login-block" @click="submitMessage">绑定</div>
        		<h2 class="tip">绑定手机号有助于向您及时同步订单的最新进展</h2>
        	</div>
        </div>
    </div>  
</template>
<script>
	import {testTele} from 'src/config/mUtils'
	import {mapMutations} from 'vuex'

	import mheader from 'src/components/mheader/mheader'
	import profileItem from '../component/profileItem'
	export default{
		data(){
			return {
				disabled: false,
				telephone: '',
				message: ''
			}
		},
		methods: {
			...mapMutations([
           		'SET_USERINFO'
            ]),
			//清除输入内容
			clear(){
				this.telephone='';
			},
			//点击“获取验证码”按钮，获取验证码
	        getCode(){
	        	let _this=this;
	        	if (!this.disabled) {
	        		this.teleCode();
		            this.disabled=true;
	                let timer=setTimeout(function () {
	                    _this.disabled=false;
	                    clearTimeout(timer);
	                },120000)				
	        	}
	        },
	        //ajax获取手机验证码
	        teleCode(){
	        	let _this=this;
	        	this.axios.get('http://localhost:3390/customer/getBindingInfo',{
			    	params: {
				      	telephone: _this.telephone
				    }
				})
				.then(function (response) {
					console.log(response.data);

				})
				.catch(function (error) {
				  	console.log(error);
				});	
	        },
	        //短信登录
	        submitMessage(){
	            let _this=this;
	            this.axios.get('http://localhost:3390/customer/telBinding',{
			    	params: {
				      	telephone: _this.telephone,
				      	message: _this.message
				    }
				})
				.then(function (response) {
					console.log(response.data);
					if (response.data.code==0) {
						_this.SET_USERINFO({
							info: {
								userId: response.data.userId,
								telephone: response.data.telephone
							}
						})
						_this.$router.replace('/profile');
					}
				})
				.catch(function (error) {
				  	console.log(error);
				});
	        },
		},
		components: {
			mheader,
			profileItem
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.profile-item-page-phone{
		.fullscreen(3);
		background: #fff;
		.login-panel{
			padding: 100px 10% 0 10%;
			.list-inset{
				.list-item{
					position: relative;
					.wh(3em);
					border-bottom: 1px solid #e6e6e6;
					.panel-input{
						display: inline-block;
						border: none;
						box-sizing: border-box;
						.wh(100%);
						// font-size: 1.1em;
						color: #262626;
					}
					.button-clear{
						position: absolute;
						right: 6em;
						top: 0.8em;
						.bg(1.4em,1.4em,transparent,'~images/icon/share-close.png',100% 100%);
					}
					.item-right{
						position: absolute;
						right: 0;
						top: 0.6em;
						.wh(1.5em,auto);
						padding: 0 0.3em;
						// color: @color_main;
						// line-height: 1.5em;
						// font-size: 1em;
						.font(1.5em,1em,@color_main);
					    border: 1px solid @color_main;
					    // box-sizing: border-box;
					    border-radius: 5px;
					    background: #fff;
					}
					.item-right.active{
						color: @color_gray;
						border-color: @color_gray;
						// background: @color_gray;
					}
				}
			}
			.button-login{
				margin-top: 130px;
				.button-login-block{
					.wh(2.4em);
					background: @color_main;
					text-align: center;
					color: #fff;
					line-height: 2.4em;
					border-radius: 5px;
					margin-bottom: 1em;
				}
				.tip{
					text-align: center;
					color: @color_gray;
					font-size: 12px;
				}
			}
		}
	}
</style>
