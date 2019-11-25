<template>
    <div class="box-card">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick">
          <el-tab-pane label="我的收藏" name="first">
            <span slot="label"><i class="iconfont">&#xe636;</i>我的收藏</span>
            <MyCollection></MyCollection>
            </el-tab-pane>
          <el-tab-pane label="申请列表" name="second">
            <span slot="label"><i class="iconfont">&#xe610;</i>申请列表</span>
            <ApplicationList></ApplicationList>
            </el-tab-pane>
          <el-tab-pane label="我的账户" name="third">
           <span slot="label"><i class="iconfont">&#xe735;</i>我的账户</span>
            <User></User>
            </el-tab-pane>
          <el-tab-pane label="我的收藏" name="fourth">
            <span slot="label"><i class="iconfont">&#xe61c;</i>我的收藏</span>
              </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import MyCollection from './components/MyCollection/index';
import ApplicationList from './components/ApplicationList/index';
import User from './components/User/index';
export default {
    components: {
        MyCollection,
        ApplicationList,
        User
    },
    data () {
        return {
            activeName: 'first',
            PersonalPath: ''
        };
    },
    methods: {
        handleClick (tab, event) {
            console.log(tab.label, event);
        }
    }
};
</script>
<style lang="less" scoped>
  .box-card{
    width: 1100px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
