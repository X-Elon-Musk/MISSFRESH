<template>
    <div class="profile-item-page feedback">
    	<mheader title="意见反馈"></mheader>	
        <div class="feedback-form">
        	<textarea class="feedback-text" placeholder="请写下您的意见或建议"></textarea>
        	<p class="tip">每一条反馈小鲜都会认真对待。我们将定期选出优秀反馈意见，发送积分奖励哦~</p>
        	<div class="submit-btn">提交</div>
        </div>
    </div>  
</template>
<script>
	import mheader from 'src/components/mheader/mheader'
	export default{
		data(){
			return {
				
			}
		},
		components: {
			mheader
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.profile-item-page.feedback{
		background-color: #f0f0f0;
		.feedback-form{
			padding: 1em 3%;
			box-sizing: border-box;
			.feedback-text{
				padding: 10px;
			    border: 1px solid #e6e6e6;
			    color: #262626;
			    background: #f5f5f5;
			    min-height: 140px;
			    border-radius: 4px;
			    width: 100%;
			    margin-bottom: 6px;
			    resize: none;
			    box-sizing: border-box;
			}
			.tip{
				.font(1.6em,0.8em,initial);
				padding-bottom: 1em;
			}
			.submit-btn{
			    .wh(44px);
			    text-align: center;
			    .font(44px,16px,#fff);
			    background: #ff4891;
			}
		}
	}
</style>
