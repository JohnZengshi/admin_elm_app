import Vue from 'vue';
import Router from 'vue-router';

import adminLogin from '../view/adminLogin';
import homePage from '../view/homePage';
// const adminLogin = r => require.ensure([], () => r(require('@/view/adminLogin')), 'adminLogin');
Vue.use(Router);
const routes = [{
        path: '/',
        redirect: '/adminLogin',
    }, {
        path: '/adminLogin',
        component: adminLogin
    },
    {
        path: '/homePage',
        component: homePage
    }
]

export default new Router({
    routes,
})
