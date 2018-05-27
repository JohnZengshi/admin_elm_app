<template>
    <div class="login">
        <el-form :model="loginFromData" status-icon :rules="rules_login" ref="loginFromData" label-width="100px" class="demo-ruleForm loginFrom">
            <el-form-item label="管理员" prop="admin">
                <el-input type="text" v-model="loginFromData.admin" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
                <el-input type="password" v-model="loginFromData.passWord" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginFromData')">登录</el-button>
                <el-button class="register" @click="dialogTableVisible = true">注册</el-button>
            </el-form-item>
        </el-form>
        <el-dialog title="管理员注册" :close-on-click-modal="false" :modal="true" :visible.sync="dialogTableVisible">
            <el-form :model="registeFormData" status-icon :rules="rules_register" ref="registeFormData" label-width="100px" class="demo-ruleForm registerFrom">
                <el-form-item label="管理员" prop="admin">
                    <el-input type="text" v-model="registeFormData.admin" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="passWord">
                    <el-input type="password" v-model="registeFormData.passWord" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="sencondPassWord">
                    <el-input type="password" v-model="registeFormData.sencondPassWord" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="registeForm('registeFormData')">注册</el-button>
                    <el-button class="register" @click="closeRegiste('registeFormData')">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
    import Api from '../api/api';
    export default {
        data() {
            return {
                loginFromData: {
                    admin: '',
                    passWord: '',
                },
                rules_login: {
                    admin: [{
                        validator: async (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入管理员名'));
                            }
                        },
                        trigger: 'blur'
                    }],
                    passWord: [{
                        validator: async (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入密码'));
                            }
                        },
                        trigger: 'blur'
                    }],
                },
                registeFormData: {
                    admin: '',
                    passWord: '',
                    sencondPassWord: ''
                },
                rules_register: {
                    admin: [{
                        validator: async (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入管理员名'));
                            }
                        },
                        trigger: 'blur'
                    }],
                    passWord: [{
                        validator: async (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入密码'));
                            }
                        },
                        trigger: 'blur'
                    }],
                    sencondPassWord: [{
                        validator: async (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入密码'));
                            } else if (value != this.registeFormData.passWord) {
                                callback(new Error('两次密码不一样'));
                            } else {

                            }
                        },
                        trigger: 'blur'
                    }]
                },
                dialogTableVisible: false
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        const res = await Api.adminLogin({
                            user_name: this.loginFromData.admin,
                            password: this.loginFromData.passWord
                        })
                        if (res.data) {
                            const status = res.data.status;
                            const msg = res.data.msg;
                            if (status == 1) {
                                this.$message({
                                    type: 'success',
                                    message: msg,
                                    onClose: () => {
                                        this.$router.replace({
                                            path: '/homePage'
                                        })
                                    }
                                });

                            } else {
                                this.$message({
                                    type: 'warning',
                                    message: msg
                                });
                            }
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            registeForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        (async () => {
                            const res = await Api.adminRegister({
                                user_name: this.registeFormData.admin,
                                password: this.registeFormData.sencondPassWord
                            })
                            const msg = res.data.message;
                            const status = res.data.status;
                            if (status == 1) {
                                this.$message({
                                    type: 'success',
                                    message: msg,
                                    onClose: () => {
                                        this.$refs[formName].resetFields();
                                        this.dialogTableVisible = false;
                                    }
                                });
                            } else {
                                this.$message({
                                    type: 'warning',
                                    message: msg,
                                    onClose: () => {

                                    }
                                });
                            }
                        })()
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            closeRegiste(formName) {
                this.$refs[formName].resetFields();
                this.dialogTableVisible = false;
            }
        }
    }

</script>
<style lang="less">
    .login {
        width: 100%;
        height: 100%;
        .loginFrom {
            width: 500px;
            height: 500px;
            margin: 0 auto;
            transform: translateY(50%);
        }
        .registerFrom {
            margin: 0 auto;
        }
        .register {
            float: right;
        }
    }

</style>
