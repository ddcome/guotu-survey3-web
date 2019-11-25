<template>
  <div class="content">
    <el-row class="header">
      <el-col class="header-span" :span="18">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }"><span>当前位置：</span>首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{articleInfo.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col class="header-btn" :span="6">
        <el-button size="mini" @click.stop="turnBackClick"><i>返回</i></el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <h1>{{articleInfo.title}}</h1>
        <hr/>
        <el-row>
          <el-col class="articler" :span="12">文章发布人：{{articleInfo.publisher}}</el-col>
          <el-col class="article-time" :span="12">发布时间：{{articleInfo.ctime}}</el-col>
        </el-row>
        <div class="ql-container ql-snow">
          <div class="ql-editor" v-html="articleInfo.content"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data () {
        return {
            articleId: '',
            articleInfo: '',
            path: ''
        };
    },
    methods: {
        turnBackClick () {
            this.$router.push({name: this.path});
        }
    },
    created () {
        this.articleInfo = this.$route.params.articleId;
        this.path = this.$route.params.path;
    },
    beforeRouteLeave (to, from, next) {
        to.meta.isUseCache = true;
        next();
    }
};
</script>

<style lang="less" scoped>
  @deep: ~">>>";
  .content {
    width: 1100px;
    margin: 0 auto;
    .header {
      margin: 20px 0px;
      .header-span {
        text-align: left;
        line-height: 14px;
      }
      .header-btn {
        text-align: right;
      }
    }
      h1 {
        text-align: center;
      }
      hr {
        margin: 10px 0;
      }
      .articler {
        text-align: right;
        color: #25a4bb;
        font-size: 12px;
        padding-right: 20px;
      }
      .article-time {
        text-align: left;
        color: #25a4bb;
        font-size: 12px;
        padding-left: 20px;
      }
      .ql-container {
        border: none;
      }
  }

</style>
