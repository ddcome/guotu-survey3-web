import axios from './../axios/index';
import Config from './../config/index';
import inItService from './init.service';
import localStore from './localstore.service';
const homePageService = {
    /* methods：initFolderService() 获取初始化目录列表信息 */
    queryNoticeFolderId ($this) {
        let $$this = $this;
        inItService.initFolderService().then(function () {
            homePageService.getArticleList($$this);
        });
    },
    getArticleList ($$this) {
        let folderId = '';
        JSON.parse(localStore.getFolderList('initFolderList')).forEach(function (value) {
            if (value.name === '公告信息') {
                folderId = value.id;
            }
        }, folderId);
        $$this.folderInfo.folderId = folderId;
        homePageService.queryArticleList($$this);
    },
    /*  请求公告信息列表 */
    queryArticleList ($this) {
        let $$this = $this;
        try {
            axios.get(Config.URL_DEFAULT.article.getArticleByFolderId, $this.folderInfo).then(function (res) {
                $$this.articleList = res.data.data.page.records;
            });
        } catch (e) {
            console.log('ErrMessage', e);
        }
    },
    /* 请求市场动态列表
    *--先请求市场动态目录ID
    *  - 然后用目录id请求文章列表
    */
    querySCFolderId ($this) {
        let $$this = $this;
        let folderId = '';
        inItService.initFolderService().then(function () {
            JSON.parse(localStore.getFolderList('initFolderList')).forEach(function (value) {
                if (value.name === '市场动态') {
                    folderId = value.id;
                }
            }, folderId);
            $this.folderInfo.folderId = folderId;
            try {
                axios.get(Config.URL_DEFAULT.article.getArticleByFolderId, $this.folderInfo).then(function (res) {
                    $$this.SCarticleList = res.data.data.page.records;
                });
            } catch (e) {
                console.log('ErrMessage', e);
            }
        });
    }
};
export default homePageService;
