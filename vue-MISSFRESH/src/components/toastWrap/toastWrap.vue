<template>
    <div class="toast-wrap" v-show="toast">
		<span>{{toast}}</span>
	</div> 
</template>
<script>
	export default{
		data(){
			return {
				toast: ''
			}
		},
		watch: {
			toastWrap: function () {
				if (this.toastWrap!=='') this.promptText(this.toastWrap);		
			}
		},
		methods: {
			// 提示文字
			promptText(text) {
				this.toast=text;
            	let timer=setTimeout(()=>{
            		this.toast='';
            		clearTimeout(timer);
            	},3000)
			}
		},
		props: ['toastWrap']
	}
</script>
<style lang="less">
    @import '~src/style/mixin';
	.toast-wrap{
		z-index: 200;
		.positionCenter();
		border-radius: 5px;
		background-color: rgba(0,0,0,0.8);
		padding: 10px;
		font-size: 0.9em;
		color: #fff;
		height: auto;
		text-align: center;
	}
</style>
