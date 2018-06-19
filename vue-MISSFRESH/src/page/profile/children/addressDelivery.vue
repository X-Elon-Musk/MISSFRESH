<template>
    <div class="profile-item-page profile-item-page-addressDelivery">
    	<mheader title="收货地址"></mheader>

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
	.profile-item-page-addressDelivery{
		
	}
</style>
