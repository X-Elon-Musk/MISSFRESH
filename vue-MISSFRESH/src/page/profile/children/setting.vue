<template>
    <div class="profile-item-page profile-item-page-setting">
    	<mheader title="设置"></mheader>
    	<div v-show="s_login">
    		<profileItem to="/" text="" :arrow="false" class="portrait-container">
    			<img :src="s_userInfo.portrait" alt="" class="f_l portrait">
    		</profileItem>
    		<profileItem to="/" text="昵称" :arrow="false">
    			<span class="f_r nick-name">{{s_userInfo.nick_name}}</span>
    		</profileItem>
    	</div>	
    	<div>
    		<profileItem to="/" text="版本" :arrow="true"></profileItem>
    		<profileItem to="/" text="清除缓存" :arrow="true"></profileItem>
    	</div>
    	<div v-show="s_login">
    		<div class="button-login-out" @click="loginOut">退出登录</div>
    	</div>
    </div>  
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import mheader from 'src/components/mheader/mheader'
	import profileItem from '../component/profileItem'
	export default{
		data(){
			return {
				
			}
		},
		computed: {
            ...mapState([
                's_userInfo', 's_login'
            ]),
        },
        methods: {
			...mapMutations([
           		'OUT_LOGIN'
            ]),
			//退出登录
			loginOut(){
				this.OUT_LOGIN();
				this.$router.replace('/ug');
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
	.profile-item-page-setting{
		.fullscreen(3);
		background: #fff;
		.portrait-container{
			line-height: normal;
			padding: 10px 0;
			.portrait{
				.wh(auto,48px);
				border-radius: 100%;
				overflow: hidden;
			}
		}
		.button-login-out{
			.wh(2.4em, 90%);
			margin: 54px auto 0;
			background: #FC6D41;
			text-align: center;
			color: #fff;
			line-height: 2.4em;
			border-radius: 5px;
			margin-bottom: 1em;
		}
	}
</style>
