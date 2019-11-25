import {CommonFunctionUtil} from '@guotu-survey3-web/utils/index';

// 折线图工厂
export const LineDataFactory = {
    // 丰富response数据结构,主要是补全uuid
    prettyResponse (response) {
        this.prettyRunner(response.data);
        return response;
    },
    // prettyResponse运行单元
    prettyRunner (data) {
        for (let index in data) {
            if (data[index].hasOwnProperty('childrens')) {
                this.prettyRunner(data[index]['childrens']);
            }
            if (data[index].hasOwnProperty('name') && data[index].hasOwnProperty('code')) {
                data[index]['id'] = CommonFunctionUtil.uuid();
            }
        }
    },
    // timeline创建器
    timelineCreator (response, landObj) {
        let timelineData = [];
        // 如果landObj为空，则默认展示第一级，如果传了值，有children则展示children，没有则展示本身.
        if (landObj) {
            let res = [];
            this.timelineRunner(response.data, landObj, res);
            timelineData = res;
        } else {
            timelineData = this.timelineDefaultRunner(response.data);
        }
        return timelineData;
    },
    // 从timeline对象信息中提取name值数组
    peelTimelineData (data) {
        let res = [];
        for (let index in data) {
            res.push(data[index]['name']);
        }
        return res;
    },
    // timeline运行器，默认
    timelineDefaultRunner (data) {
        let res = [];
        for (let index in data) {
            if (data[index].hasOwnProperty('childrens') && data[index]['childrens'].length > 0) {
                for (let j in data[index]['childrens']) {
                    res.push({
                        name: data[index]['childrens'][j]['name'],
                        code: data[index]['childrens'][j]['code'],
                        id: data[index]['childrens'][j]['id']
                    });
                }
                return res;
            }
        }
        return res;
    },
    // timeline运行器
    timelineRunner (data, landObj, res) {
        for (let index in data) {
            if (data[index].hasOwnProperty('id') && data[index]['id'] === landObj.id) {
                if (data[index].hasOwnProperty('childrens') && data[index]['childrens'].length > 0) {
                    for (let j in data[index]['childrens']) {
                        res.push({
                            name: data[index]['childrens'][j]['name'],
                            code: data[index]['childrens'][j]['code'],
                            id: data[index]['childrens'][j]['id']
                        });
                    }
                } else {
                    res.push({
                        name: data[index]['name'],
                        code: data[index]['code'],
                        id: data[index]['id']
                    });
                }
                return;
            } else {
                this.timelineRunner(data[index]['childrens'], landObj, res);
            }
        }
    },
    // 折线图的option的series创建器
    seriesDataCreator (response, timelineData) {
        let seriesData = {};
        for (let index in timelineData) {
            let id = timelineData[index]['id'];
            let res = [];
            this.seriesDataRunner(response.data, id, res);
            seriesData[timelineData[index]['name']] = res;
        }
        return seriesData;
    },
    // seriesDataCreator运行器
    seriesDataRunner (data, id, res) {
        for (let index in data) {
            if (data[index].hasOwnProperty('id') && data[index]['id'] === id) {
                res.push(data[index]['total']);
            }
            if (data[index].hasOwnProperty('childrens') && data[index]['childrens'].length > 0) {
                this.seriesDataRunner(data[index]['childrens'], id, res);
            }
        }
    },
    // x轴数据创建器
    xAxisDataCreator (response) {
        let data = response.data;
        let years = [];
        for (let index in data) {
            if (data[index].hasOwnProperty('childrens') && data[index]['childrens'].length > 0) {
                years.push(data[index]['year']);
            }
        }
        return years;
    }
};

// webgis地图图层的数据工厂
export const WebgisDataFactory = {
    // 参数创建器
    paramCreator (res) {
        let dynamicLayers = [{
            'id': 0,
            'name': 'X510183TDXZG2019DLTB',
            'source': {'type': 'mapLayer', 'mapLayerId': 0},
            'definitionExpression': "(dlbm = '1203') OR (dlbm = '1202')",
            'drawingInfo': {
                'renderer': {
                    'type': 'uniqueValue',
                    'field1': 'dlbm',
                    'defaultSymbol': null,
                    'uniqueValueInfos': [{
                        'value': '0101',
                        'symbol': {
                            'color': [237, 81, 81, 255],
                            'outline': {
                                'color': [153, 153, 153, 255],
                                'width': 0.75,
                                'type': 'esriSLS',
                                'style': 'esriSLSSolid'
                            },
                            'type': 'esriSFS',
                            'style': 'esriSFSSolid'
                        },
                        'label': '0101'
                    }, {
                        'value': '0102',
                        'symbol': {
                            'color': [20, 158, 206, 255],
                            'outline': {
                                'color': [153, 153, 153, 255],
                                'width': 0.75,
                                'type': 'esriSLS',
                                'style': 'esriSLSSolid'
                            },
                            'type': 'esriSFS',
                            'style': 'esriSFSSolid'
                        },
                        'label': '0102'
                    }, {
                        'value': '0103',
                        'symbol': {
                            'color': [167, 198, 54, 255],
                            'outline': {
                                'color': [153, 153, 153, 255],
                                'width': 0.75,
                                'type': 'esriSLS',
                                'style': 'esriSLSSolid'
                            },
                            'type': 'esriSFS',
                            'style': 'esriSFSSolid'
                        },
                        'label': '0103'
                    }]
                }
            },
            'minScale': 0,
            'maxScale': 0
        }, {
            'id': 1,
            'name': 'X510183TDXZG2019XZQ',
            'source': {'type': 'mapLayer', 'mapLayerId': 1},
            'minScale': 0,
            'maxScale': 0
        }];
        dynamicLayers[0].name = res.serviceCode + 'DLTB';
        dynamicLayers[0].definitionExpression = this.getDefinitionExpression(res.data);
        dynamicLayers[0].drawingInfo.renderer.uniqueValueInfos = [];
        dynamicLayers[0].drawingInfo.renderer.uniqueValueInfos = this.getUniqueValueInfos(res);
        dynamicLayers[1].name = res.serviceCode + 'XZQ';
        return dynamicLayers;
    },
    // 获取UniqueValueInfos值
    getUniqueValueInfos (data) {
        data.data.sort(function (a, b) {
            return b.total - a.total;
        });
        let res = [];
        for (let index in data.data) {
            let one = {
                'value': data.data[index].code,
                'symbol': {
                    'color': CommonFunctionUtil.deepCopy(CommonFunctionUtil.toRgbaArr(data.colors[index])),
                    'outline': {
                        'color': [153, 153, 153, 255],
                        'width': 0,
                        'type': 'esriSLS',
                        'style': 'esriSLSSolid'
                    },
                    'type': 'esriSFS',
                    'style': 'esriSFSSolid'
                },
                'label': data.data[index].name
            };
            res.push(one);
        }
        return res;
    },
    // 获取DefinitionExpression值
    getDefinitionExpression (data) {
        let res = '';
        data.forEach(function (item, index) {
            res += '(dlbm = \'' + item.code + '\')';
            if (index < data.length - 1) {
                res += ' OR ';
            }
        });
        return res;
    }
};

// 辖区数据工厂
export const RegionDataFactory = {
    // 辖区数据转换器
    regionDataCreator (response) {
        let regExp = new RegExp('citys|districts', 'g');
        let temp = JSON.stringify(response.data.provinces).replace(regExp, 'children');
        return this.regionDataRunner(JSON.parse(temp), []);
    },
    // regionDataCreator的运行器
    regionDataRunner (arr, result) {
        for (let index in arr) {
            // 重复了
            if (JSON.stringify(result).indexOf(arr[index].regionName) < 0) {
                let standard = {
                    regionName: '',
                    regionCode: '',
                    id: 0
                };
                standard.regionCode = arr[index].regionCode;
                standard.regionName = arr[index].regionName;
                standard.id = arr[index].id;
                result.push(standard);
            }
            if (arr[index].children && arr[index].children.length > 0) {
                this.regionDataRunner(arr[index].children, result);
            }
        }
        return result;
    }
};
