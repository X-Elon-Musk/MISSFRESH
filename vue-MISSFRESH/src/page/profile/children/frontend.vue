<template>
    <div class="profile-item-page frontend">
    	<mheader></mheader>	
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
	.frontend{
		.fullscreen(3);
		background: #fff;
	}
</style>
