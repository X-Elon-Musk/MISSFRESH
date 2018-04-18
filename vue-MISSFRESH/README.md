# vue-missfresh

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


***
#### 问题解决:

- 跨域解决方法：jsonp只能解决get请求的跨域，xmlhttprequest可以实现post跨域
- backgroundImage中url的使用
- image的src引入图片
    方法一：通过相对路径去查找`<img src="../../images/fresh-news/0.jpg">`
    方法二：用require方法将图片作为模块加载进去
    方法三：`<img src="~src/images/fresh-news/0.jpg">`
- mint-ui的引入
- swiper的使用
- @impot引入less问题
    ```
    <style lang='less' scoped rel="stylesheet/less">
        @import 'src/style/mixin'(报错)
        @import 'src/style/mixin';(报错)
        @import '~src/style/mixin';(正确)
    </style>
    ```




