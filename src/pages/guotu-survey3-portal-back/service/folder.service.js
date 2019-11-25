import axios from '../axios/index';
import Config from '../config/index';

const FolderService = {
    queryAllFolder: function (param, $this) {
        $this.isFolderListReady = true;
        return axios.get(Config.URL_DEFAULT.folder.queryAllByPagination, param, 'json').then(function (res) {
            console.log('queryAllFolder > ', res);
            $this.paginationTotal = res.data.data.page.total;
            $this.folderList = res.data.data.page.records;
            $this.isFolderListReady = false;
        });
    },
    queryFatherFolder ($this) {
        axios.get(Config.URL_DEFAULT.folder.queryAllParentFolder, {}, 'json').then(function (res) {
            console.log('queryFatherFolder > ', res);
            $this.setParentFolderList(res.data.data);
        });
    },
    insertOneFolder: function (param, $this) {
        const $$this = this;
        axios.get(Config.URL_DEFAULT.folder.insertOne, param).then(function (res) {
            console.log('queryAllFolder > ', res);
            if (res.data.success) {
                $this.$notify({
                    title: '成功',
                    message: res.data.message,
                    type: 'success',
                    position: 'top-right',
                    offset: 50
                });
                // 新增后刷新
                $$this.queryAllFolder({
                    current: 1,
                    size: 10
                }, $this);
                $$this.queryFatherFolder($this);
            } else {
                $this.$notify({
                    title: '失败',
                    message: '添加失败',
                    type: 'warning',
                    position: 'top-right',
                    offset: 50
                });
            }
        });
    },
    deleteSomeByIds: function (param, $this) {
        const $$this = this;
        axios.get(Config.URL_DEFAULT.folder.deleteSomeByIds, param, 'json').then(function (res) {
            console.log('deleteSomeByIds > ', res);
            if (res.data.success) {
                $this.$notify({
                    title: '成功',
                    message: res.data.message,
                    type: 'success',
                    position: 'top-right',
                    offset: 50
                });
                $$this.queryAllFolder({
                    current: 1,
                    size: 10
                }, $this);
            } else {
                $this.$notify({
                    title: '失败',
                    message: '删除失败',
                    type: 'warning',
                    position: 'top-right',
                    offset: 50
                });
            }
        });
    }
}
;
export default FolderService;
