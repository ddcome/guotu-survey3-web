import Util from '../utils/index';
export default {
    getFolderList (parentFolderId) {
        return Util.LocalStoreOperationUtil.getData(parentFolderId);
    },
    setFolderList (parentFolderId, folderList) {
        Util.LocalStoreOperationUtil.setData(parentFolderId, folderList);
    }
};
