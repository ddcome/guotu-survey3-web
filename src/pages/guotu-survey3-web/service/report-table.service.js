import axios from './../axios/index';
import {Information} from './../utils/index';
import Config from './../config/index';

const ReportTableService = {
    queryReportTableNameList: function ($this) {
        const self = this;
        axios.get(Config.URL_DEFAULT.summary.queryAllReportTableName, {}).then(function (response) {
            $this.setReportTableNameList(response.data);
            self.afterQueryReportTableNameList($this);
        }).catch(function (error) {
            console.log('error > ', error);
            Information.showNotify('error', Information.code.error.INIT_AREADATA_FAIL);
        });
    },
    afterQueryReportTableNameList ($this) {
        // 有数据之后执行执行相关初始化
        $this.initCurrentReportTable();
    }
};
export default ReportTableService;
