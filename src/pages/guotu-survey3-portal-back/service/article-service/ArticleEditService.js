import axios from '../../axios/index';
import config from '../../config/index';
const ArticleEditService = {
    realeaseArticle: function ($this) {
        let urlStr = config.URL_DEFAULT.article.articleEdit;
        let info = $this.formInfo;
        let $$this = $this;
        info.folderId = info.folderId[info.folderId.length - 1];
        console.log('info', info.conent);
        axios.post(urlStr, info, 'form-data').then(function (res) {
            console.log('返回值》》》', res);
            if (res.data.message === '添加Article成功!') {
                $$this.$message({
                    message: '数据添加成功啦！',
                    type: 'success'
                });
            }
        });
    }
};
export default ArticleEditService;
