<template>
	<div class="swiper-slide slidepage swiper-container gif-show">
        <pullRefresh :tabIndex="tabIndex" @getData="getData">
            <gif></gif>
            <!-- 内容部分 -->
            <carousel></carousel>
            <guarantee></guarantee>
            <card></card>
            <!-- 上滑加载、下拉刷新 -->
            <!-- <div class="clearfix list-group-item ticket-item" v-for="item in products[0]">
                <product :product="item" :id="item.id"></product>
            </div> -->
            <div class="clearfix list-group-item ticket-item" v-for="item in productsHot">
                <product :product="item"></product>
            </div>
        </pullRefresh>
    </div>
</template>
<script>
    import pullRefresh from 'src/components/pullRefresh/pullRefresh'
    import gif from 'src/components/gif/gif'
    import carousel from 'src/components/carousel/carousel'
    import guarantee from './guarantee'
    import card from './card'
    import product from 'src/components/product/product'
    export default{
		data(){
			return {
                //当前导航栏所处位置
                tabIndex: 0,
				//上拉刷新数据
                products: [
                    [
                        {
                            id: 0,
                            hot: 0,
                            img: '',
                            name: '11111月盛斋羔羊肉片300g',
                            point: '预计11月26日后兑换兑换券',
                            preferential: [
                                '限每人1份',
                                '进口检验合格'
                            ],
                            price: 29.9,
                            vip: 19.9
                        },
                        {
                            id: 0,
                            hot: 1,
                            img: '',
                            name: '11111月盛斋羔羊肉片300g',
                            point: '预计11月26日后兑换兑换券',
                            preferential: [
                                '限每人1份',
                                '进口检验合格'
                            ],
                            price: 29.9,
                            vip: 19.9
                        },
                        {
                            id: 0,
                            hot: 3,
                            img: '',
                            name: '月盛斋羔羊肉片300g',
                            point: '预计11月26日后兑换兑换券',
                            preferential: [
                                '限每人1份',
                                '进口检验合格'
                            ],
                            price: 29.9,
                            vip: 19.9
                        }
                    ],
                    [
                        {
                            id: 0,
                            hot: 0,
                            img: '',
                            name: '222月盛斋羔羊肉片300g',
                            point: '预计11月26日后兑换兑换券',
                            preferential: [
                                '限每人1份',
                                '进口检验合格'
                            ],
                            price: 29.9,
                            vip: 19.9
                        },
                        {
                            id: 0,
                            hot: 1,
                            img: '',
                            name: '2222月盛斋羔羊肉片300g',
                            point: '预计11月26日后兑换兑换券',
                            preferential: [
                                '限每人1份',
                                '进口检验合格'
                            ],
                            price: 29.9,
                            vip: 19.9
                        }
                    ]
                ]
			}
		},
        props: ['productsHot'],
        methods: {
            //发送ajax,请求数据
            getData: function () {
                //发送ajax请求
                for(var i = 0; i <3; i++) {
                    this.products[this.tabIndex].push({
                        id: 0,
                        hot: 0,
                        img: '',
                        name: this.tabIndex+'月盛斋羔羊肉片300g',
                        point: '预计11月26日后兑换兑换券',
                        preferential: [
                            '限每人1份',
                            '进口检验合格'
                        ],
                        price: 29.9,
                        vip: 19.9
                    });
                }
                // this.axios.get('http://10.0.8.11:3390/sql')
                // .then(function (response) {
                //     console.log(response.data);
                //     console.log(response);
                // })
                // .catch(function (error) {
                //     console.log(error);
                // });
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