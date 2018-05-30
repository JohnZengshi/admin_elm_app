import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import store from './store/'
import 'element-ui/lib/theme-default/index.css';
import './common/style/base.css';
import './common/style/common.css';
import moment from 'moment';
// Vue去掉警告 You are running Vue in development mode
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.moment = moment;
new Vue({
    el: "#app",
    template: "<App/>",
    router,
    store,
    components: { App }
})
