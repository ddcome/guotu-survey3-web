import axios from '../../axios/index';
import config from '../../config/index';
const ArticleListService = {
    queryArticleList ($this) {
        let urlStr = config.URL_DEFAULT.article.queryArticleList;
        let params = {
            current: $this.queryCurrent,
            size: 10,
            title: $this.articleName,
            folderId: $this.folderId[$this.folderId.length - 1]
        };
        console.log('请求参数为：', params);
        let $$this = $this;
        $this.loading = true;
        axios.get(urlStr, params).then(function (res) {
            console.log('res 文章总数：', res);
            $$this.articleList = res.data.data.page.records;
            $$this.pageCount = res.data.data.page.pages * 10;
            $$this.paginationTotal = res.data.data.page.total;
            $$this.loading = false;
        });
    },
    deleteArticle (id, $this) {
        let urlStr = config.URL_DEFAULT.article.deleteArticle;
        let params = {ids: id};
        let $$this = $this;
        try {
            axios.get(urlStr, params).then(function (res) {
                console.log('res删除操作', res);
                try {
                    if (res.data.data > 0) {
                        $$this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        ArticleListService.qyeryArticleList($$this);
                    } else {
                        $$this.$message({
                            type: 'error',
                            message: '数据删除失败!'
                        });
                    }
                } catch (e) {
                    console.log('ErrMessage', e);
                }
            });
        } catch (e) {
            console.log('e', e);
        }
    }
};
export default ArticleListService;
