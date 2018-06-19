<template>
    <div class="profile-item-page profile-item-page-address">
    	<mheader title="收货地址">
    		<!-- <div class="add-address">
    			添加
    		</div> -->
    		<router-link :to="{path: '/profile/addressNew'}" tag="div" class="f_r add-address">添加</router-link>
    	</mheader>

    </div>  
</template>
<script>
	import {mapState} from 'vuex'
	import mheader from 'src/components/mheader/mheader'
	// import profileItem from '../component/profileItem'
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
			/*addAddress(){
				this.$router.go(-1);
			}*/
		},
		components: {
			mheader
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.profile-item-page-address{
		a{
			.text-prompt.active{
				color: @color_gray;
			}
		}
	}
</style>
