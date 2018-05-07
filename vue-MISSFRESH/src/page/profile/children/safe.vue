<template>
    <div class="safe">
    	<mheader></mheader>	
        <profileItem to="/" text="手机号" arrow="true">
        	<span class="f_r text-prompt">立即绑定</span>
        </profileItem>
        <profileItem to="/" text="微信账号" arrow="false"></profileItem>
        <profileItem to="/" text="支付密码" arrow="true"></profileItem>
    </div>  
</template>
<script>
	import mheader from 'src/components/mheader/mheader'
	import profileItem from '../component/profileItem'
	export default{
		data(){
			return {
				
			}
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
		.fullscreen(3);
		background: #fff;
	}
</style>
