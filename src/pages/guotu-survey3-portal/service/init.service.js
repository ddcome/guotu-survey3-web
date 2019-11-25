import axios from './../axios/index';
import Config from './../config/index';
import localStore from './localstore.service';
const InItService = {
    /* 初始化目录列表 */
    initFolderService () {
        let urlStr = Config.URL_DEFAULT.folder.queryAllParentFolder;
        let params = {};
        return axios.get(urlStr, params).then(function (res) {
            res.data.data.forEach(function (data) {
                if (data.children.length === 0) {
                    data.children = null;
                }
            });
            localStore.setFolderList('initFolderList', JSON.stringify(res.data.data));
        });
    }
};
export default InItService;
