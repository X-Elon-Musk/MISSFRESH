<template>
	<div class="swiper-slide slidepage swiper-container gif-show">
        <pullRefresh :tabIndex="tabIndex" @getData="getData" :pullEnd="pullEnd">
            <gif></gif>
            <!-- 内容部分 -->
            <carousel :banner="banner" :link="true"></carousel>
            <slot></slot>
            <!-- 上滑加载、下拉刷新 -->
            <div class="clearfix list-group-item ticket-item" v-for="(item,index) in productsShowList" :key="index">
                <product :product="item" :subtitle="true" :priceUp="getValue(item,'price_up')" :priceDown="getValue(item,'price_down')" :mpromptExist="false" v-on:callbackFunction=""></product>
            </div>
        </pullRefresh>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    import pullRefresh from 'src/components/pullRefresh/pullRefresh'
    import gif from 'src/components/gif/gif'
    import carousel from 'src/components/carousel/carousel'
    import product from 'src/components/product/product'

    export default{
		data(){
			return {
                // 当前导航栏所处位置
                tabIndex: 0,
                productsEnd: 8,
                pullEnd: false,
			}
		},
        mounted: function () {
            this.SET_MPROMPTEXIST({status: false});
        },
        computed: {
            // 产品列表
            productsList: function (){
                return this.products?this.products:[];
            },
            // 显示的产品
            productsShowList: function (){
                return this.productsList.slice(0,this.productsEnd);
            },
        },
        methods: {
            ...mapMutations([
                'SET_MPROMPTEXIST'
            ]),
            // 上滑加载
            getData() {
                let length=this.productsList.length;
                this.productsEnd+=8;
                if (this.productsEnd>=length) {
                    this.productsEnd=length;
                    this.pullEnd=true;
                }
            },
        },
        props: ['products','banner'],
        components: {
            pullRefresh,
            gif,
            carousel,
            product
        }
	}
</script>
<style lang="less">
	
</style>