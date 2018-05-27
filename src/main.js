import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './common/style/base.css';
import './common/style/common.css';
// Vue去掉警告 You are running Vue in development mode
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
    el: "#app",
    template: "<App/>",
    router,
    components: { App }
})
