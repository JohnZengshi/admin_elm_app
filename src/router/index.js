import Vue from 'vue';
import Router from 'vue-router';

import adminLogin from '../page/adminLogin';
import homePage from '../page/homePage';
import path1 from '../page/view/path1';
import path2 from '../page/view/path2';
import register from '../page/view/register'
// const adminLogin = r => require.ensure([], () => r(require('@/view/adminLogin')), 'adminLogin');
Vue.use(Router);
const routes = [{
        path: '/',
        redirect: '/adminLogin',
    }, {
        path: '/adminLogin',
        component: adminLogin,
        children: []
    },
    {
        path: '/homePage',
        component: homePage,
        children: [{
                path: 'path1',
                component: path1
            },
            {
                path: 'path2',
                component: path2
            }
        ]
    }
]

export default new Router({
    routes,
})
