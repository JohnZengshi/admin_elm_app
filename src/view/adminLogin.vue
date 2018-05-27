<template>
    <div class="login">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="管理员" prop="admin">
                <el-input type="text" v-model="ruleForm2.admin" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
                <el-input type="password" v-model="ruleForm2.passWord" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button class="register" @click="registeForm('ruleForm2')">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import Api from '../api/api';
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var checkAdmin = async (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入管理员名'));
                } else {

                }
            };
            var checkPassWord = async (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    // callback();
                }
            };
            return {
                ruleForm2: {
                    admin: '',
                    passWord: '',
                },
                rules2: {
                    admin: [{
                        validator: checkAdmin,
                        trigger: 'blur'
                    }],
                    passWord: [{
                        validator: checkPassWord,
                        trigger: 'blur'
                    }],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        const res = await Api.adminLogin({
                            user_name: this.ruleForm2.admin,
                            password: this.ruleForm2.passWord
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
                        console.log(this.ruleForm2)
                        alert('register!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }

</script>
<style lang="less">
    .login {
        width: 500px;
        height: 500px;
        margin: 0 auto;
        transform: translateY(50%);
        .register {
            float: right;
        }
    }

</style>
