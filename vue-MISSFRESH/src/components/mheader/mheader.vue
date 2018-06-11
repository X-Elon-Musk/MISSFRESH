<template>
    <div class="header-component">
        <span class="title">{{title}}</span>
        <span class="back" @click="goBack"></span>
    </div>  
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		methods: {
			goBack(){
				this.$router.go(-1);
			}
		},
		props: ['title']
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.header-component{
		// height: 42px;
	 //    width: 100%;
	    .wh(42px);
	    // line-height: 42px;
	    // color: @color_common;
	    .font(42px);
	    text-align: center;
	    background: #fff;
	    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.06);
	    border-bottom: 1px solid #eee;
	    position: relative;
		.title{
			display: inline-block;
    		height: 100%;
		}
		.back{
			.bg(18px,100%,transparent,'~src/images/icon/back.png',100% 38%);
			position: absolute;
			left: 18px;
			top: 0;
		}
	}
</style>
