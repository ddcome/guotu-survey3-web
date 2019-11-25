<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        <el-button @click="resetForm('ruleForm')">清空</el-button>
        <el-button @click="toBack()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
    data () {
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        let validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        let username = (rule, value, callback) => {
            if (value.trim() === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '',
                checkPass: '',
                username: ''
            },
            rules: {
                username: [
                    {validator: username, trigger: 'blur'}
                ],
                pass: [
                    {validator: validatePass, trigger: 'blur'}
                ],
                checkPass: [
                    {validator: validatePass2, trigger: 'blur'}
                ]
            }
        };
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm (formName) {
            this.$refs[formName].resetFields();
        },
        toBack () {
            this.$router.push({ path: '/' });
        }
    }
};
</script>
<style lang="less" scoped>
  .login {
    display: table;
    width: 600px;
    height: 100%;
    margin: 0 auto;
    .el-form {
      display: table-cell;
      width: 100%;
      vertical-align: middle;
    }
  }
</style>
