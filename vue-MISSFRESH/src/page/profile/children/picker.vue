<template>
    <div class="profile-item-page profile-item-page-address">
    	<mt-picker :slots="slots" value-key="name" ref="picker" @change="onValuesChange"></mt-picker> 

    </div>  
</template>
<script>
	import {mapState} from 'vuex'
	import {CITY_DATA} from 'src/api/cityData'  
	import mheader from 'src/components/mheader/mheader'
	export default{
		data () {
			return {
				myAdress:null,
				slots: [{
					flex: 1,
					values: CITY_DATA,
					defaultIndex: 0,
					className: 'province',
					textAlign: 'center'
				}, {
					flex: 1,
					values: CITY_DATA[0].child,
					defaultIndex: 0,
					className: 'district',
					textAlign: 'center'
				}]
			}
		},
		methods: {
			onValuesChange(picker, values) {
				if(!values[0]){
					console.log(1);
					this.$nextTick(()=>{
						if(this.myAdress){
	                        // 赋默认值
	                    }else{
	                     	picker.setValues([CITY_DATA[0],CITY_DATA[0].child[0]])
	                    }
	                });
				}else{
					picker.setSlotValues(1, values[0].child);
					let town = [];
					if(values[1]){
						town = values[1].child;
					}
					picker.setSlotValues(2,town);
					console.log(values[0].name, values[1].name);
				}
			}
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.picker {
	    overflow: hidden;

	}
</style>
