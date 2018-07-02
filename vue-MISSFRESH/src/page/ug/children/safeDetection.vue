<template>
    <div class="safe-detection">
    	<ul class="tab-nav">
			<li @click="switchOver(0)" :class="{active:show==0}" class="safe-list">
				<img :src="detectionResult_0.securityTagUrl" alt="" v-if="show==0">
     	        <img :src="detectionResult_0.securityUnselectedTagUrl" alt="" v-else-if="show==1">
				<span class="list-text test-report">{{detectionResult_0.securityTagName}}</span>
			</li>
			<li @click="switchOver(1)" :class="{active:show==1}" class="safe-list">
				<img :src="detectionResult_1.securityTagUrl" alt="" v-if="show==1">
     	        <img :src="detectionResult_1.securityUnselectedTagUrl" alt="" v-else-if="show==0">
				<span class="list-text test-report">{{detectionResult_1.securityTagName}}</span>
			</li>
		</ul>
		<ul class="tab-content">
			<li v-show="show==0">
				<img :src="detectionResult_0.securityDetailUrl" alt="">
			</li>
			<li v-show="show==1">
				<img :src="detectionResult_1.securityDetailUrl" alt="">
			</li>
		</ul>
    </div>  
</template>
<script>
	import {getSafeDetectionAxios} from 'src/service/getData'
	export default{
		data(){
			return {
				show: 0,
				product_id: 0,
				detectionResult_0: {},
				detectionResult_1: {}
			}
		},
		created(){
            this.product_id=this.$route.query.product_id;
        },
        mounted(){
            this.getSafeDetection();
        },
		methods: {
			//获取品质认证
			async getSafeDetection(){
				let response=await getSafeDetectionAxios(this.product_id);
				if (response.code==0) {
					this.detectionResult_0=response.result[0];	
					this.detectionResult_1=response.result[1];	
				}	
			},
			switchOver(index){
				this.show=index;
			}
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.safe-detection{
		.fullscreen(4);
		position: absolute;
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
