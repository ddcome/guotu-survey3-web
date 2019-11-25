import axios from './../axios/index';
import {Information} from './../utils/index';
import Config from './../config/index';

const SettingsService = {
    queryAnalysisData (param, $this) {
        axios.get(Config.URL_DEFAULT.summary.queryReportAnalysisData, param).then(function (response) {
            if (response.state === 'Fail') {
                Information.showNotify('info', response.msg);
            }
        }).catch(function (error) {
            console.log('error > ', error);
        });
    },
    queryRegionData: function ($this) {
        const $self = this;
        axios.get('/test/region.data.json', {}).then(function (response) {
            $this.regionTreeList = [];
            // 对数据进行标准化，按照el-tree的结构
            let arrayString = JSON.stringify(response.data);
            arrayString = $self.makeDataStandard(arrayString);
            let res = JSON.parse(arrayString).provinces;
            $this.regionTreeList = res[0].children;
            $this.currentPosition = res[0].name;
        }).catch(function (error) {
            console.log('error > ', error);
            Information.showNotify('error', Information.code.error.INIT_AREADATA_FAIL);
        });
    },
    makeDataStandard: function (arrayStr) {
        arrayStr = arrayStr.replace(/citys/g, 'children');
        arrayStr = arrayStr.replace(/districts/g, 'children');
        arrayStr = arrayStr.replace(/regionname/g, 'name');
        arrayStr = arrayStr.replace(/regioncode/g, 'code');
        return arrayStr;
    },
    queryTableHeaders: function (_this) {
        axios.get('/test/tableTitle.json', {}).then(
            function (response) {
                // 利用ES6语法set数据结构去重
                _this.tableHeadersList = new Set(response.tables);
            }
        ).catch(
            function (error) {
                console.log('error > ', error);
                Information.showNotify('error', Information.code.error.INIT_TABLEHEADERS_FAIL);
            }
        );
    }
};
export default SettingsService;
