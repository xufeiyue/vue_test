import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant'
import $ from 'jquery'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import 'vant/lib/index.css'
import './assets/css/styles.less'
// import './assets/css/reset.css'
Vue.use(Vant)

Vue.prototype.$ajax = axios

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{})

require("./mock.js")

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')

