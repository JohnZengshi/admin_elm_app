import request from '../common/js/request';
const testApi = "http://192.168.1.101:8081";
// 用户登录
const adminLogin = async (data) => {
    const res = await request('POST', data, testApi + '/admin/login');
    return res;
}
// 用户注册
const adminRegister = async (data) => {
    const res = await request('POST', data, testApi + '/admin/register');
    return res;
}
// 检测用户是否已经登录
const checkAdminLogin = async (data) => {
    const res = await request('GET', data, testApi + '/admin/info?t=' + new Date().getTime().toString());
    return res;
}
// 获取api请求总数
const apiCount = async (data) => {
    const res = await request('GET', data, testApi + '/statis/api/count');
    return res;
}
export default {
    adminLogin,
    adminRegister,
    checkAdminLogin,
    apiCount
}
