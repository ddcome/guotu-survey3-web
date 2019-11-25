import axios from './../axios/index';
import Config from './../config/index';
import {RegionDataFactory, LineDataFactory, WebgisDataFactory} from './data-factory/summary-result.datafactory.js';
import {Information} from './../utils/index';

const SummaryResultService = {
    // 查询饼图数据
    queryPieChartData (lineResponseData, year, lands, $this) {
        let tempArr = lineResponseData.find((current) => {
            return current.year === year;
        }).childrens;
        $this.setPieChartData(this.getPieDataByLandName(tempArr, lands));
    },
    getPieDataByLandName (data, lands) {
        for (let i in data) {
            if (lands[lands.length - 1] === data[i].name) {
                return data[i]['childrens'] || [];
            }
            if (data[i].hasOwnProperty('childrens') && data[i].childrens.length > 0) {
                let res = this.getPieDataByLandName(data[i].childrens, lands);
                if (res) {
                    return res;
                }
            }
        }
    },
    // queryAllLandCategory返回数据的标准化,按照v-chart要求的数据结构标准
    makeQueryAllLandCategoryToStandard (data) {
        if (!data) {
            return [];
        }
        let res = {
            columns: [],
            rows: []
        };
        for (let index in data) {
            if (data[index].length === 0) {
                break;
            }
            let one = {};
            one['年份'] = data[index].year;
            if (JSON.stringify(res.columns).indexOf('年份') < 0) {
                res.columns.push('年份');
            }
            for (let i in data[index].childrens) {
                let temp = {};
                temp[data[index].childrens[i].name] = data[index].childrens[i].total;
                one = Object.assign(one, temp);
                if (JSON.stringify(res.columns).indexOf(data[index].childrens[i].name) < 0) {
                    res.columns.push(data[index].childrens[i].name);
                }
            }
            res.rows.push(one);
        }
        return res;
    },
    // 从缓冲中获取子节点数据
    queryLineDataFromCacheByLandName (data, landName, $this) {
        if (!data) {
            return [];
        }
        let res = {
            columns: [],
            rows: []
        };
        for (let index in data) {
            if (data[index].length === 0) {
                break;
            }
            let one = {};
            one['年份'] = data[index].year;
            one = Object.assign(one, this.getChildrenByLandName(data[index].childrens, landName));
            res.rows.push(one);
            res.columns = res.columns.concat(Object.keys(one));
        }
        res.columns = Array.from(new Set(res.columns));
        $this.setLineChartData(res);
        return res;
    },
    getChildrenByLandName (data, landName) {
        for (let i in data) {
            // 若找到了该地类
            if (data[i].hasOwnProperty('name') && landName === data[i].name) {
                return this.sameAsLineData(data[i].childrens);
            }
            if (data[i].hasOwnProperty('childrens') && data[i].childrens.length > 0) {
                let res = this.getChildrenByLandName(data[i].childrens, landName);
                if (res) {
                    return res;
                }
            }
        }
    },
    sameAsLineData (data) {
        let res = {};
        for (let i in data) {
            let temp = {};
            temp[data[i].name] = data[i].total;
            res = Object.assign(res, temp);
        }
        return res;
    },
    // 从各年度中查询到有地类的数据
    getLandCategoryListData (response) {
        // 查询包含childrens的数据
        let res = response.data.find(function (item) {
            if (item.childrens.length > 0) {
                return true;
            }
        });
        return res.childrens;
    },
    queryLandCategoryList (params, $this) {
        // 为什么注释掉了以下的代码？
        // 由于后台尚未提供id标识，导致前端检索判断数据的唯一性出现问题。
        // 只能所以为了解决问题，放到前端去处理数据的完整性，生成uuid，
        // 弊端是，代码不优雅，系统代码不简洁，只能请求一次，第二次请求的id就不一样了

        // const self = this;
        // axios.get(Config.URL_DEFAULT.summary.queryAllLandCategory, params).then(function (response) {
        //     try {
        //         if ((response.data && response.data.state && response.data.state.toUpperCase() === 'FAIL') || response.data.length === 0) {
        //             $this.setLandCategoryList([]);
        //             Information.showNotify('info', '查询失败');
        //         } else {
        //             // 标准化数据后设置到组件中
        //             $this.setLandCategoryList(self.getLandCategoryListData(response));
        //         }
        //     } catch (err) {
        //         console.log('err ', err);
        //         $this.setLandCategoryList([]);
        //     }
        // });
    },
    queryLineChartDataByLandCategory ($this, landCategory, data) {
        for (let index in data) {
            if (landCategory === data[index].name) {
                $this.setLineChartData(data[index]['children']);
                return;
            }
        }
    },
    queryLineChartDataByCache (cache, $this, landObj) {
        let timelineData = LineDataFactory.timelineCreator(cache, landObj);
        $this.renderLineEchart(LineDataFactory.xAxisDataCreator(cache), LineDataFactory.peelTimelineData(timelineData), LineDataFactory.seriesDataCreator(cache, timelineData));
        $this.cacheTimelineDataTemp(timelineData);
    },
    queryLineChartData (params, $this, landObj) {
        const self = this;
        axios.get(Config.URL_DEFAULT.summary.queryAllLandCategory, params).then(function (response) {
            try {
                if ((response.data && response.data.state && response.data.state.toUpperCase() === 'FAIL') || response.data.length === 0) {
                    $this.renderLineEchart(null);
                    $this.cacheResponseDataTemp([]);
                    $this.cacheTimelineDataTemp([]);
                } else {
                    // 不优雅代码
                    response = LineDataFactory.prettyResponse(response);
                    console.log('res', response);

                    let timelineData = LineDataFactory.timelineCreator(response, landObj);
                    $this.renderLineEchart(LineDataFactory.xAxisDataCreator(response), LineDataFactory.peelTimelineData(timelineData), LineDataFactory.seriesDataCreator(response, timelineData));
                    $this.cacheResponseDataTemp(response);
                    $this.cacheTimelineDataTemp(timelineData);

                    // 标准化数据后设置到组件中 这行代码是因为后台没有提供唯一id标识，导致只能请求一回 [不优雅代码]
                    $this.setLandCategoryList(self.getLandCategoryListData(response));
                }
            } catch (err) {
                console.log('err ', err);
                Information.showNotify('info', '服务异常，请重试');
                $this.cacheResponseDataTemp([]);
                $this.cacheTimelineDataTemp([]);
            }
        });
    },
    // 查询辖区列表数据
    queryAllRegionData ($this) {
        axios.get(Config.URL_DEFAULT.summary.queryAllRegion, {}).then(function (response) {
            $this.setAreaList(RegionDataFactory.regionDataCreator(response));
        });
    },
    queryWebgisDLTB (res, $this) {
        $this.reRenderDL(WebgisDataFactory.paramCreator(res));
    }
};
export default SummaryResultService;
