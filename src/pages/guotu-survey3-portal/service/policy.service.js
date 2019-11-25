import axios from './../axios/index';
import Config from './../config/index';
import localStore from './localstore.service';
import inItService from './init.service';

const PolicyService = {
/* methods：initFolderService() 获取初始化目录列表信息
   property：folderList 暂时存放获取到的目录列表
   describe ：调用inItSvice缓存目录信息
  然后获取到政策法规目录列表
  再请求第一个目录下文章列表数据 */
    queryAllPolicyFolder ($this) {
        let $$this = $this;
        return inItService.initFolderService().then(function () {
            let folderList = [];
            JSON.parse(localStore.getFolderList('initFolderList')).forEach(function (value) {
                if (value.name === '政策法规') {
                    folderList = value.children;
                }
            }, folderList);
            PolicyService.queryArticleList({folderId: folderList[0].id, current: 1, size: 10}, $$this);
        });
    },
    // 请求文章列表
    queryArticleList (folderInfo, $this) {
        let $$this = $this;
        try {
            return axios.get(Config.URL_DEFAULT.article.getArticleByFolderId, { folderId: folderInfo.folderId, current: folderInfo.current, size: folderInfo.size }).then(function (res) {
                $$this.articleList = res.data.data.page.records;
                $$this.paginationTotal = res.data.data.page.total;
                $$this.title = res.data.data.page.records[0].folderName;
            });
        } catch (e) {
            console.log('ErrorMessage', e);
        }
    }
};
export default PolicyService;
