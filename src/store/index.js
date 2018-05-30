import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../api/api'
Vue.use(Vuex);

const state = {
    adminInfo: {},
}

const mutations = {
    saveAdminInfo(state, adminInfo) {
        state.adminInfo = adminInfo
    }
}

const actions = {
    async checkAdminLogin() {
        const res = await Api.checkAdminLogin();
        console.log(res);
        // 请求返回结果无误
        if (res.data) {
            const status = res.data.status;
            if (status == 1) {
                // 把adminInfo存起来
                commit('saveAdminInfo', res.data.data);
                this.$message({
                    type: 'success',
                    message: "检测到之前登录过，自动登录",
                    onClose: () => {
                        this.$router.replace({
                            path: '/homePage'
                        })
                    }
                });
            } else {
                console.log("session无效或不存在，请重新登录")
            }
        } else {
            console.log("返回参数有误")
        }
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
