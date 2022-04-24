import Vue from 'vue'
import App from './App.vue'
import Swiper from "swiper";
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引用css
import 'swiper/css'
// 挂载到vue实例上
Vue.use(VueAwesomeSwiper, Swiper)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')