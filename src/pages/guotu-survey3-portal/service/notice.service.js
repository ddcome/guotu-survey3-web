import axios from './../axios/index';
import Config from './../config/index';
import inItService from './init.service';
import localStore from './localstore.service';
const noticeService = {
    /* methods：initFolderService() 获取初始化目录列表信息
   property：folderId 暂时存放获取到的公告信息id
   describe ：调用inItSvice缓存目录信息 然后获取到公告信息id,再通过id请求目录下文章列表数据 */
    queryNoticeFolderId ($this) {
        let $$this = $this;
        let folderId = '';
        inItService.initFolderService().then(function () {
            JSON.parse(localStore.getFolderList('initFolderList')).forEach(function (value) {
                if (value.name === '公告信息') {
                    folderId = value.id;
                }
            }, folderId);
            noticeService.queryArticleList(folderId, $$this);
        });
    },
    /*  请求公告信息列表 */
    queryArticleList ($this) {
        let urlStr = Config.URL_DEFAULT.article.getArticleByFolderId;
        let params = $this.folderInfo;
        let $$this = $this;
        try {
            axios.get(urlStr, params).then(function (res) {
                noticeService.getarticleList($$this, res.data.data.page.records);
            });
        } catch (e) {
            console.log('ErrMessage', e);
        }
    },
    /*  将获取到的全部信息列表分割成10个一组 */
    getarticleList ($this, records) {
        let two = 0;
        let emp = [[], []];
        for (let one in records) {
            if (records.hasOwnProperty(one)) {
                emp[two].push(records[one]);
                if ((Number(one) + 1) % 10 === 0) { two++; }
            }
        }
        $this.articleList = emp;
    }
};
export default noticeService;
