<template>
<div class="user">
  <el-card class="box-card">

<el-form size="mini" label-width="120px">
  <el-col :span="24" align="center"><i class="user-icon"></i></el-col>
  <el-form-item label="用户名：">
    <el-input size="mini" v-model="fromInfo.userName" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="当前密码：">
    <el-input size="mini" show-password="true" v-model="fromInfo.password" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="新密码：">
    <el-input size="mini" show-password="true" v-model="fromInfo.newPassWord"  placeholder="请输入新密码"></el-input>
  </el-form-item>
  <el-form-item label="手机号码：">
    <el-input size="mini" v-model="fromInfo.phoneNumber"  placeholder="请输入手机号码"></el-input>
  </el-form-item>
  <el-form-item label="电子邮箱：">
    <el-input size="mini" v-model="fromInfo.email"  placeholder="请输入电子邮箱地址"></el-input>
  </el-form-item>
  <el-col :span="24" align="center"> <el-button size="mini" class="save-button" type="primary">保存</el-button></el-col>
</el-form>
  </el-card>
</div>
</template>

<script>
export default {
    data () {
        return {
            fromInfo: {
                userName: '',
                password: '',
                newPassWord: '',
                phoneNumber: '',
                email: ''
            }
        };
    }
};
</script>

<style lang="less" scoped>
  @deep:~">>>";
  .el-card{
    width: 40%;
    margin: 0 auto;
    border: none;
    box-shadow: unset;
    .user-icon{
      display: inline-block;
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background-color: #8c939d;
      margin-bottom: 20px;
    }
    @{deep}.el-form-item__label{
      background-color: #EEEEEE;
      text-align: center;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      padding-right: 0px;
      width: 82px !important;
    }
    @{deep}.el-form-item__content{
      margin-left: 82px !important;
    }
    @{deep}.el-input__inner {
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
    }
    .save-button{
      width: 80%;}
  }
</style>
