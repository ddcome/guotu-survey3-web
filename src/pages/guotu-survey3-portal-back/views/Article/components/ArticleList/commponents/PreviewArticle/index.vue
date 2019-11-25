<template>
<el-card class="preview-article">
  <el-row class="head-panle"><el-col :span="24"> <span>当前位置：文章列表>文章预览</span></el-col></el-row>
  <el-row>
    <el-col class="article-type" :span="12">
      <a href="#">文章类型：{{articleType}}</a>
      </el-col>
    <el-col class="back-btn" :span="12">
      <el-button size="mini" type="primary" @click.stop="backClick">返回</el-button>
    </el-col>
  </el-row>
  <hr class="hr-color-height"/>
  <el-row><el-col :span="24"><h2>{{articleTitle}}</h2></el-col></el-row>
  <el-row class="editer-ctime">
    <el-col :span="12"><span>作者：{{articleEditer}}</span></el-col>
    <el-col :span="12"><span>发布时间：{{ctime}}</span></el-col>
  </el-row>
  <el-row><el-col :span="24">
    <div class="ql-container ql-snow">
      <div class="ql-editor articleContent" v-html="articleContent">{{articleContent}}</div>
    </div>
  </el-col></el-row>
</el-card>
</template>

<script>
export default {
    data () {
        return {
            articleInfo: [],
            articleType: '',
            articleTitle: '',
            articleContent: '',
            articleEditer: '',
            ctime: ''
        };
    },
    methods: {
        initInfo () {
            this.articleEditer = this.articleInfo.publisher;
            this.articleTitle = this.articleInfo.title;
            this.articleType = this.articleInfo.folderName;
            this.articleContent = this.articleInfo.content;
            this.ctime = this.articleInfo.ctime;
        },
        backClick () {
            this.$router.push({path: '/ArticleList'});
        }
    },
    mounted () {
        this.articleInfo = this.$route.query.articleInfo;
        this.initInfo();
    }
};
</script>

<style lang="less" scoped>
.preview-article{
  margin: 20px 10px;
  .head-panle{
    padding: 0px 0px 10px 10px;
    text-align: left;
  }
  .article-type{
    padding-left: 10px;
    text-align: left;
  }
  .back-btn{
    padding-right: 20px;
    text-align: right;
  }

  .hr-color-height {
    background-color: #3c3c3c;
    border: none;
    margin: 20px 0;
  }
  h2{
       font-size: 24px;
       margin-bottom: 20px;
     }
  .editer-ctime{
    margin-bottom: 20px;
  }
  .articleContent {
    text-align: left;
  }
}
</style>
