import axios from '../axios/index';
import config from '../config/index';
const tablePreviewService = {
    lastTableName: '',
    // 查询所有
    queryTableData (params, $this) {
        axios.get(config.URL_DEFAULT.summary.queryReportExcel, params).then(function (res) {
            $this.tableTitle = res.data.Title;
            $this.tableHeaderData = res.data.Headers;
            $this.excelTableData = res.data.Data;
            // $this.downloadUrl = res.data.downloadUrl;
        });
    },
    // 假分页
    queryTableDataByPagenation (start, everyPages, params, $this) {
        return axios.get(config.URL_DEFAULT.summary.queryReportExcel, params).then(function (res) {
            tablePreviewService.setData(start, everyPages, params, res, $this);
        });
    },
    // 请求表格文件
    queryExcel (params, $this) {
        return axios.get(config.URL_DEFAULT.summary.queryExcelFile, params).then(function (res) {
            console.log('表格文件请求返回值', res);
        });
    },
    // set表格数据
    setData (start, everyPages, params, res, $this) {
        try {
            $this.tableTitle = res.data.Title;
            $this.pageTotal = res.data.Data.length;
            if (this.lastTableName !== params.tableName) {
                $this.tableHeaderData = res.data.Headers;
                this.lastTableName = params.tableName;
            }
            let temp = res.data.Data;
            $this.excelTableData = $this.excelTableData.concat(temp.slice(start, start + everyPages));
            $this.currentPage = start + everyPages;
            $this.loading = false;
        } catch (err) {
            $this.tableHeaderData = [];
            $this.excelTableData = [];
            console.log('err', err);
        }
    }
};
export default tablePreviewService;
