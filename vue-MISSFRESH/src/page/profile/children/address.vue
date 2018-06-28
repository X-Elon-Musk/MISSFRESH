<template>
    <div class="profile-item-page profile-item-page-address">
    	<mheader title="收货地址">
    		<router-link :to="{path: '/profile/addressNew'}" tag="div" class="add-address">添加</router-link>
    	</mheader>

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
                // 's_userInfo'
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
		.header-component{
			text-align: center;
			.add-address{
				position: absolute;
				right: 0;
				top: 0;
				height: 100%;
				padding: 0 1em;
			}
		}
	}
</style>
