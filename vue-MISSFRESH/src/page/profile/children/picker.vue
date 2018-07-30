<template>
    <div class="profile-item-page profile-item-page-address">
    	<div class="region-picker-backdrop">
    		<div class="mt-picker">
	    		<div class="clearfix picker-header">
	    			<span class="f_l picker-header-button picker-cancle">取消</span>
	    			<span class="">请选择城市</span>
	    			<span class="f_r picker-header-button picker-sure">确定</span>
	    		</div>
	    		<mt-picker :slots="slots" value-key="name" ref="picker" @change="onValuesChange"></mt-picker> 
	    	</div>
    	</div>
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
	.region-picker-backdrop{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		background-color: #000;
		opacity: .6;
		.mt-picker{
			position: absolute;
			left: 0;
			bottom: 0;
			.wh(216px);
			.picker-header{
				text-align: center;
				background-color: #F9F9F9;
				line-height: 36px;
				font-size: 14px;
				span{
					padding: 10px;
				}
				.picker-header-button{
					line-height: 1;
					color: @color_main;
				}
			}
			.picker-center-highlight{
				background: linear-gradient(180deg,rgba(105,94,107,.2),rgba(105,94,107,.2) 50%,transparent 50%) top left/100% 1px no-repeat,linear-gradient(0deg,rgba(105,94,107,.2),rgba(105,94,107,.2) 50%,transparent 50%) bottom left/100% 1px no-repeat;
			}
			.picker {
			    overflow: hidden;
				font-size: 14px;
				background: #fff;
				.picker-item{
					font-size: 14px;
				}
			}
		}
	}
</style>
