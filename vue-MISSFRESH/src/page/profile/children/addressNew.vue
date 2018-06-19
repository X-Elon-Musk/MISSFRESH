<template>
    <div class="profile-item-page profile-item-page-address">
    	<mheader title="新增收货地址"></mheader>
    	<ul class="list">
    		<li class="item-block">
    			<span class="input-label">收件人</span>
    			<input type="text" placeholder="收货人姓名" class="item-input">
    			<img src="~images/icon/close.png" alt="" class="clear-button">
    		</li>
    	</ul>	
    </div>  
</template>
<script>
	import {mapState} from 'vuex'
	import mheader from 'src/components/mheader/mheader'

	export default{
		data(){
			return {
				
			}
		},
		computed: {
	    	...mapState([
                's_userInfo'
            ]),
        },
        methods: {
			addAddress(){
				this.$router.go(-1);
			}
		},
		components: {
			mheader
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.profile-item-page-address{
		.list{
			padding: 0 4%;
			box-sizing: border-box;
			.item-block{
				border-bottom: 1px solid #eee;
				display: inline-block;
				vertical-align: middle;
				margin: 0;
				padding: 0;
				.input-label{

				}
				.item-input{

				}
				.clear-button{

				}
			}
		}
	}
</style>
