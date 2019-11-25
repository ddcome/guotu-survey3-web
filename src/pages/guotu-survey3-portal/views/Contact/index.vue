<template>
   <el-card class="contact public-clear-card-default">
     <h1>联系我们</h1>
     <el-container>
       <el-main>
        <el-form size="mini">
          <el-form-item label="地址：">北京市西城区阜内大街64号 </el-form-item>
          <el-form-item label="固定电话：">444-4208820</el-form-item>
          <el-form-item label="手机：">13114567788 刘女士</el-form-item>
          <el-form-item label="电子邮箱：">8888888@greatmap.com</el-form-item>
        </el-form>
     </el-main>
       <el-aside width="420px">
         <img src="../../assets/images/kefu.png">
       </el-aside>
     </el-container>
   </el-card>
</template>
<script></script>
<style lang="less" scoped>
  @deep: ~'>>>';
  .contact{
    width: 1100px;
    height: 360px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    @{deep}.el-main{
      position: absolute;
      left: 10px;
      width: 260px;
      z-index: 99;
    }
    @{deep}.el-aside{
      position: absolute;
      right: 0px;
    }
  }
</style>
