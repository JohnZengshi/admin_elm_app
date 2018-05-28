import request from '../common/js/request';
const testApi = "http://192.168.1.101:8081";

const adminLogin = async (data) => {
    const res = await request('POST', data, testApi + '/admin/login');
    return res;
}
const adminRegister = async (data) => {
    const res = await request('POST', data, testApi + '/admin/register');
    return res;
}
const checkAdminLogin = async (data) => {
    const res = await request('GET', data, testApi + '/admin/info?t=' + new Date().getTime().toString());
    return res;
}
export default {
    adminLogin,
    adminRegister,
    checkAdminLogin
}
