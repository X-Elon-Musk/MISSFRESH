import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/router'

import FastClick from 'fastclick'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(MintUI)
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
}).$mount('#app')
