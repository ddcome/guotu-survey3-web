<template>
<div class="main-panel">
<el-card class="main-card public-clear-card-default">
  <h4 class="public-tabs-font-size">{{title}}</h4>
  <hr class="hr-color-height public-background-color-red"/>
  <el-table
    class="table-list public-li-font-size"
    :data="articleList"
    size="mini"
    :show-header="false"
    @row-click="previewArticleClick">
    <el-table-column class="list-column" width="30px" label="·">·</el-table-column>
    <el-table-column :show-overflow-tooltip="true" prop="title" label="发布政策的标题"></el-table-column>
    <el-table-column prop="ctime" width="180px"  label="发布新闻的时间"></el-table-column>
  </el-table>
</el-card>
</div>
</template>

<script>
export default {
    props: {
        articleList: {
            type: Array,
            default: () => {
                return [];
            }
        },
        title: {
            type: String,
            default: '国家政策'
        }
    },
    data () {
        return {
        };
    },
    methods: {
        previewArticleClick (row, column, event) {
            this.$router.push({name: 'preview', params: {articleId: row, path: 'policy'}});
        }
    }
};
</script>

<style lang="less" scoped>
  @deep: ~'>>>';
  .main-panel{
    .main-card{
      margin-top: 10px;
      .el-menu {
        border-right: transparent 0px;
      }
      h4{
        font-weight: 600;
      }
      .table-list{
        font-size: 16px;
      }
      .hr-color-height {
        border: none;
        margin-top: 10px;
        height: 7px;
      }
    }
  }

</style>
