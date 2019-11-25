import axios from './../axios/index';
import {Information} from './../utils/index';

const BottomPanelService = {
    queryTableData: function ($this, params) {
        $this.queryParam = params;
        axios.get('/test/tableHeaders.data.json',
            $this.queryParam
        ).then(function (response) {
            // let thisResponse = new Set(response.data);
            $this.tableHeaderData = response.data.filter(function (one) {
                return $this.queryParam === one.title;
            })[0].headers[0];
        }).then(function () {
            axios.get('/test/tableData.json', params).then(
                function (response) {
                    console.log('获取表数据response', response);
                    // 关闭加载
                    Information.closeLoading();
                    $this.tableData = response.data;
                    console.log('$this.tableData', $this.tableData);
                    // 展开面板
                    $this.openClick();
                }
            ).catch(
                function (error) {
                    console.log('[axios error]', error);
                }
            );
        }).catch(function (error) {
            Information.closeLoading();
            Information.showNotify('error', error);
        });
    }
};

export default BottomPanelService;
