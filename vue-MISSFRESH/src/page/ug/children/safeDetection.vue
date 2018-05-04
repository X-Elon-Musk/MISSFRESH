<template>
    <div class="safe-detection">
        <ul class="tab-nav">
			<li @click="switchOver(0)" :class="{active:show==0}" class="safe-list">
				<img src="~images/icon/security_1_0.png" alt="" v-if="show==0">
     	        <img src="~images/icon/security_1_1.png" alt="" v-else-if="show==1">
				<span class="list-text test-report">优鲜安心检测</span>
			</li>
			<li @click="switchOver(1)" :class="{active:show==1}" class="safe-list">
				<img src="~images/icon/security_2_0.png" alt="" v-if="show==1">
     	        <img src="~images/icon/security_2_1.png" alt="" v-else-if="show==0">
				<span class="list-text test-question">100%品控检测</span>
			</li>
		</ul>
		<ul class="tab-content">
			<li v-show="show==0">
				<img src="~src/images/section1.jpg" alt="">
			</li>
			<li v-show="show==1">
				<img src="~src/images/section2.jpg" alt="">
			</li>
		</ul>
    </div>  
</template>
<script>
	export default{
		data(){
			return {
				show: 0,
			}
		},
		methods: {
			switchOver(index){
				this.show=index;
			}
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.safe-detection{
		position: absolute; 
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 4; 
		background: #fff;
		overflow-y: auto;
		color: @color_common;
		.tab-nav{
			position: fixed; 
			left: 0;
			top: 0;
			z-index: 2;
			.wh(36px);
			line-height: 36px;
			text-align: center;
			background: #fff;
			box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.06);
    		border-bottom: 1px solid #eee;
			.safe-list{
				display: inline-block;
				.wh(100%,auto);	
				position: relative;
				color: @color_common;
				.list-text{
					vertical-align: middle;
					.font(36px,0.8em,@color_common);
				}
				img{
					display: inline-block;
					vertical-align: top;
					.wh(18px,18px);	
					margin-top: 11px;
				}
				&:nth-of-type(2) {
					margin-left: 0.4em;
					img{
						.wh(16px,16px);	
						margin-top: 12px;
					}
				}
			}
			.safe-list.active{
				&:after{
					.border(1%,-1px,2px,99%,@color_main);
				}
				.list-text{
					color: @color_main;
				}
			}
		}
		.tab-content{
			padding-top: 36px;
			height: auto;
			li{
				img{
					display: inline-block;
					.wh(auto,100%);
				}
			}
		}
	}
</style>
