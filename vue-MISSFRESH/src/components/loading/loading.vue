<template>
    <div class="loading-container" v-show="loading" :style="{zIndex: parseInt(zIndex)}">
	    <div class="loading-icon"></div>
	</div>
</template>
<script>
	export default{
		data(){
            return{
            }
        },
        props: ['loading', 'zIndex']
    }
</script>
<style lang="less">
	@import '~src/style/mixin';
	.loading-container{
		.fullscreen();
		background: #fff;
		.loading-icon{
	    	.positionCenter();
	    	.bg(215px, 100px,transparent,'~src/images/icon/loading-gif-vip.gif',50% 50%);
	    }
	}	
</style>
