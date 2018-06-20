import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

import App from './App'
import routes from './router/router'
import {getValue} from 'src/config/mUtils'
import store from './store'

// import './config/rem'

import { Picker } from 'mint-ui';
import 'mint-ui/lib/style.css'; 
Vue.component(Picker.name, Picker);


/*import MintUI from 'mint-ui'
Vue.use(MintUI)*/



// import 'swiper/dist/css/swiper.min.css';
// import Swiper from "swiper";

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'



axios.defaults.withCredentials=true;

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(MintUI)
// Vue.use(Swiper)

const defaultImage=require('images/default-image-product.png');
Vue.use(VueLazyload, {
  	preLoad: 1.3,
  	error: defaultImage,
  	loading: defaultImage,
  	attempt: 1
})

Vue.prototype.axios=axios
Vue.prototype.getValue=getValue


const router = new VueRouter({
	routes,
	mode: 'hash',
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})


new Vue({
	router,
	store
}).$mount('#app')
Vue.config.devtools = false
