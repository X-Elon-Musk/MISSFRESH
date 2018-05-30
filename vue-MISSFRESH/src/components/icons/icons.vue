<template>
    <ul class="icons">
    	<li class="icon" v-for="(item,index) in icons" :key="index">
			<img :src="item.src">
			<span>{{item.text}}</span>
		</li>
	</ul> 
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		props: ['icons']
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.icons{
		overflow-x: scroll;
		width: 100%;
		white-space: nowrap;
		.icon{
			display: inline-block;
			min-width: 5.2em;
			text-align: center;
			img{
				// width: 2.25em;
				// height: 2.25em;
				display: inline-block;
				.wh(2.25em,2.25em);
				margin-bottom: 0.25em;
			}
			span{
				font-size: 0.75em;
				display: block;
			}
		}

	}
</style>
