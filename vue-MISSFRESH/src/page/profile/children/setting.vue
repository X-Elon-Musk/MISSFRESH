<template>
    <div class="profile-item-page profile-item-page-setting">
    	<mheader :title="设置"></mheader>	
        <profileItem to="/" text="版本" arrow="true"></profileItem>
        <profileItem to="/" text="清除缓存" arrow="true"></profileItem>
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
	.profile-item-page-setting{
		.fullscreen(3);
		background: #fff;
	}
</style>
