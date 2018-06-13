<template>
    <div class="profile-item-page safe">
    	<mheader title="账户与安全"></mheader>	
        <profileItem to="/profile/phone" text="手机号" :arrow="true">
        	<span class="f_r text-prompt" :class="{active:s_userInfo.telephone}">{{s_userInfo.telephone?s_userInfo.telephone:'立即绑定'}}</span>
        </profileItem>
        <profileItem to="/" text="微信账号" :arrow="false"></profileItem>
        <profileItem to="/" text="支付密码" :arrow="true"></profileItem>
    </div>  
</template>
<script>
	import {mapState} from 'vuex'
	import mheader from 'src/components/mheader/mheader'
	import profileItem from '../component/profileItem'
	export default{
		data(){
			return {
				
			}
		},
		computed: {
	    	...mapState([
                's_userInfo'
            ]),
        },
		components: {
			mheader,
			profileItem
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.safe{
		a{
			.text-prompt.active{
				color: @color_gray;
			}
		}
	}
</style>
