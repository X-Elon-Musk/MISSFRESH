<template>
    <div class="profile-item">
		<router-link :to="to" class="clearfix">
			<span>{{text}}</span>
			<slot></slot>
			<span class="arrow" v-show="arrow"></span>
		</router-link>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		props: ['to','text','arrow']
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.profile-item{
		width: 90%;
		display: block;
		.font(60px,15px,#000);
		background: #fff;
		margin-left: 16px;
		border-bottom: 1px solid #f0f0f0;
		position: relative;
		.arrow{
			content: "";
			.bg(17px,17px,transparent,'~images/icon/right-jiantou.png',100% 100%);
			background-size: 100% 100%;
			position: absolute;
			right: 0;
			top: 50%;
			transform: translate(0, -50%);
		}
		a{
			display: inline-block;
			.wh(100%);
			color: #000;
			.text-prompt{
				color: @color_main;
				margin-right: 3em;
			}
		}
	}
</style>
