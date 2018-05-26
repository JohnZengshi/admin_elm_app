import Vue from 'vue';
import App from './App';
// Vue去掉警告 You are running Vue in development mode
Vue.config.productionTip = false;

new Vue({
    el: "#app",
    template: "<App/>",
    components: { App }
})
