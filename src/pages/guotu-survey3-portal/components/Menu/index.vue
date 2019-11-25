<template>
  <div class="menu-div">
    <el-row>
      <el-col :span="24">
        <div class="logo-tagline">
          <router-link to="/" class="logo fl public-color-blue public-header-font-size">
            <img src="../../assets/images/logo.png" alt="" width="34px" height="34px">国土空间基础信息云门户
            <!--<img src="../../assets/images/logo.png" alt="" width="34px" height="34px">省市级第三次国土调查数据库管理系统-->
          </router-link>
          <div class="tagline fr public-color-blue public-header-tagline-font-size">
            <span class="login-name"><i class="iconfont icon-user"></i>当前用户：{{loginName}}</span>
            <router-link to="/login" target="_blank" v-if="!isLogin">登录</router-link>
            <a href="javascript:void(0);" v-if="isLogin">退出</a>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="el-menu-outer">
      <el-menu
        class="public-nav-menu-font-size"
        :default-active="$route.path"
        mode="horizontal"
        :router="true"
        @select="handleSelect"
        background-color="#fff"
        text-color="#222"
        active-text-color="#1E60B4">
        <template v-for="item in menuList">
          <el-menu-item v-if="item.child&&item.child.length === 0" :key="item.id" :index="item.path">
            {{item.name}}
          </el-menu-item>
          <el-submenu class="public-nav-menu-font-size" v-else :key="item.id" :index="item.path">
            <template slot="title">{{item.name}}</template>
            <template v-for="child in item.child" v-if="!child.hidden">
              <el-menu-item class="public-nav-menu-font-size" :key="child.id" :index="child.path">{{child.name}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            loginName: '游客',
            isLogin: false
        };
    },
    computed: {
        menuList () {
            return this.$store.getters.menuList;
        }
    },
    methods: {
        handleSelect (key, keyPath) {
        // console.log(key, keyPath);
        }
    },
    mounted () {
        // console.log(this.$store.getters.menuList);
    }
};
</script>

<style lang="less" scoped>
  @deep: ~'>>>';
  .menu-div {
    width: 1100px;
    margin: 0 auto;
    .el-menu-outer {
      width: 100%;
      .el-menu {
        float: right;
        .el-menu-item {
          font-size: unset;
        }
        @{deep}.el-submenu {
          .el-submenu__title {
            font-size: unset;
            .el-menu-item {
              font-size: unset;
            }
          }
        }
      }
    }

    .logo-tagline {
      height: 60px;
      line-height: 60px;
      .logo {
        font-weight: 500;
        img {
          width: 38px;
          height: 38px;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
      .tagline {
        line-height: 60px;
        span {
          position: relative;
          margin-right: 10px;
          i {
            margin-right: 5px;
          }
        }
        .login-name:after {
          position: absolute;
          width: 1px;
          height: 90%;
          right: -10px;
          top: 5%;
          content: '';
          background: #1E60B4;
        }
        a {
          margin-left: 10px;
        }
      }
    }
  }
</style>
