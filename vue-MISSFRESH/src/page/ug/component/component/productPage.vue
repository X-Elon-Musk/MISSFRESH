<template>
	<div class="swiper-slide slidepage swiper-container gif-show">
        <pullRefresh :tabIndex="tabIndex" @getData="getData">
            <gif></gif>
            <!-- 内容部分 -->
            <carousel :banner="banner"></carousel>
            <!-- <guarantee :brands="brands"></guarantee>
            <card :categoryareas="categoryareas"></card> -->
            <slot></slot>
            <!-- 上滑加载、下拉刷新 -->
            <div class="clearfix list-group-item ticket-item" v-for="(item,index) in (products||[]).slice(productsStart,productsEnd)" :key="index">
                <product :product="item" :subtitle="true" :priceUp="getValue(item,'price_up')" :priceDown="getValue(item,'price_down')" :mpromptExist="false"></product>
            </div>
        </pullRefresh>
    </div>
</template>
<script>
    import pullRefresh from 'src/components/pullRefresh/pullRefresh'
    import gif from 'src/components/gif/gif'
    import carousel from 'src/components/carousel/carousel'
    import guarantee from './component/guarantee'
    import card from './component/card'
    import product from 'src/components/product/product'

    // import {getValue} from 'src/config/mUtils'
    export default{
		data(){
			return {
                //当前导航栏所处位置
                tabIndex: 0,
				// productsShow:[],
                productsStart: 0,
                productsEnd: 8
			}
		},
        created(){
            // console.log(this.banner);
            // console.log(this.products);
            // console.log(this.products.slice(0,8));
        },
        /*watch: {
            products: function () {
                this.productsShow=this.products.slice(this.productsStart,this.productsEnd);
            }
        },*/
        // props: ['products','banner','brands','categoryareas'],
        props: ['products','banner'],
        methods: {
            //上滑加载
            getData: function () {
                this.productsEnd+=8;
                if (this.productsEnd>=this.products.length) {
                    this.productsEnd=this.products.length;
                }
                // this.productsShow=this.products.slice(this.productsStart,this.productsEnd);
            },
        },
        components: {
            pullRefresh,
            gif,
            carousel,
            guarantee,
            card,
            product
        }
	}
</script>
<style lang="less">
	
</style>