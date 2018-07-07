<template>
    <div class="clearfix header-component">
        <span class="title">{{title}}</span>
        <span class="back" v-if="!functionOrLink" @click="goBack"></span>
        <span class="back" v-else @click="backAction"></span>
        <slot class="slot"></slot>
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
			},
			backAction(){
				this.$emit("backFunction");
			}
		},
		props: ['title', 'functionOrLink']
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.header-component{
	    .wh(42px);
	    .font(42px,17px);
	    text-align: center;
	    background: #fff;
	    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.06);
	    border-bottom: 1px solid #eee;
	    position: fixed;
	    left: 0;
	    top: 0;
	    z-index: 1;
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
		.header-right-buttom{
			position: absolute;
			right: 0;
			top: 0;
			height: 100%;
			padding: 0 1em;
		}
	}
</style>
