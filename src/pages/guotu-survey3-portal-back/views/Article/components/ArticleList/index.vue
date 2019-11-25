<template>
    <el-card class="article-list">
      <el-row class="article-list-header"><el-col><span>当前位置：文章列表</span></el-col></el-row>
      <el-row class="search-row">
        <el-col style="width: 272px;"><span>文章名称：</span>
          <el-input size="mini" style="width: 200px" v-model="articleName"></el-input>
        </el-col>
        <el-col style="width: 272px;"><span>文章类型</span>
          <el-cascader
            size="mini"
            v-model="folderId"
            :show-all-levels="false"
            :change-on-select = "true"
            :options="articleTypeOptions"
            :props="props"
          >
          </el-cascader>
        </el-col>
        <el-col style="width: 126px;">
          <el-button type="primary" size="mini" @click.stop="searchClick">查询</el-button>
          <el-button type="primary" size="mini" @click.stop="clearInputClick">清除</el-button>
        </el-col>
      </el-row>
      <hr>
      <el-row>
        <el-col :span="24">
        <el-table
          v-loading="loading"
          :data="articleList" size="mini">
          <el-table-column prop="title" label="文章标题" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="folderName" label="文章类别" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="publisher" label="发布人" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="ctime" label="发布日期" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="审核状态" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span v-if="scope.row.status === '0'"> 待审核</span>
              <span v-else> 已审核</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="110px">
            <template slot-scope="scope">
            <i class="el-icon-view action-btn"></i><a  @click.stop="previewArticleClick(scope.row)"> 预览</a>
              <i class="el-icon-delete action-btn"></i><a  @click.stop="deleteArticleClick(scope.row)"> 删除</a>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <BackPagination
            :total="paginationTotal"
            :everyPageInputDisabled="true"
            @pageNumberClickEmitter="handleCurrentChange"
          ></BackPagination>
      </el-col>
      </el-row>
    </el-card>
</template>

<script>
import BackPagination from './../../../common/back-pagination/index';
import ArticleListService from '../../../../service/article-service/ArticleListService';
import FolderService from '../../../../service/folder.service.js';
export default {
    components: {BackPagination},
    data () {
        return {
            articleTypeOptions: [],
            props: {
                value: 'id',
                label: 'name',
                children: 'children'
            },
            articleList: [],
            articleName: null,
            folderId: [],
            pageCount: 100,
            queryCurrent: 1,
            loading: true,
            folderList: '',
            paginationTotal: 0,
            isFolderListReady: true
        };
    },
    methods: {
        searchClick () {
            ArticleListService.queryArticleList(this);
        },
        clearInputClick () {
            this.articleName = '';
            this.folderId = [];
        },
        /* 预览文章点击事件 */
        previewArticleClick (articleInfo) {
            this.$router.push({path: '/PreviewArticle', query: { articleInfo: articleInfo }});
            // Bus.$emit('getArticleInfo', articleInfo);
        },
        /*  删除文章点击就事件 */
        deleteArticleClick (articleInfo) {
            let $this = this;
            this.$confirm('此操作将永久删除该文件, 是否继续?', '高危操作！', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ArticleListService.deleteArticle(articleInfo.id, $this);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        /*  手动选择跳转到第几页 */
        handleCurrentChange (val) {
            this.queryCurrent = val;
            this.loading = true;
            ArticleListService.queryArticleList(this);
        },
        setParentFolderList (folderList) {
            console.log('folderList', folderList);
            this.articleTypeOptions = folderList;
        },
        handerSelect (val) {
            // console.log('zayebuzhidao ', val);
            // this.folderId = val[val.length - 1];
        }
    },
    created () {
        /* 初始化请求目录列表和全部的文章 */
        FolderService.queryFatherFolder(this);
        ArticleListService.queryArticleList(this);
    }

};
</script>

<style lang="less" scoped>
  .article-list{
    margin: 20px 10px ;
    .article-list-header{
      margin-bottom: 20px;
      text-align: left;
    }
    hr{
      margin: 30px 0px;
    }
    .search-row{
      min-width: 678px;
      text-align: left;
    }
  }

</style>
