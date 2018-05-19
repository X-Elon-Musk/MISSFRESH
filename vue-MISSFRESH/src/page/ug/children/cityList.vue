<template>
    <div class="city-list">
    	<div class="list-item">
    		<h4 class="area-list">极速达（配送时效以自动定位为准）</h4>
    		<span class="area-city">北京</span>
    		<span class="area-city">北京</span>
    		<span class="area-city">北京</span>
    		<span class="area-city">北京</span>
    	</div>
    </div>  
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		methods: {
			switchOver(index){
				
			}
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.city-list{
		position: absolute; 
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 4; 
		background: #fff;
		overflow-y: auto;
		color: @color_common; 
		.list-item{
			.wh(auto,100%);
			padding: 0 4%;
			box-sizing: border-box;
			.area-list{
				color: #000;
				font-size: 0.875em;
				padding-left: 0.9375em;
				position: relative;
				padding-top: 1.25em;
				&:before{
					content: '';
					width: 0.5em;
					height: 0.125em;
					background: #000;
					position: absolute;
					left: 0;
					bottom: 0.5em;
				}
				&:after {
					content: '';
					width: 0.5em;
					height: 0.125em;
					background: #000;
					position: absolute;
					bottom: 0.5em;
					margin-left: 0.375em;
				}
			}
			.area-city{
				width: 4.25em;
				border: 1px solid #000;
				margin-top: 1.25em;
				display: inline-block;
				color: #000;
				font-size: 0.8125em;
				line-height: 1.875em;
				text-align: center;
				margin-right: 1.25em;
				background: #f1f4f4;
			}
		}
	}
</style>
