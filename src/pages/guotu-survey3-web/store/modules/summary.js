const summary = {
    state: {
        // 汇总分析相关后台请求的所有参数
        param: {
            // 当前选择的区域信息
            region: {
                name: '瓜州县',
                code: '620922'
            },
            // 当前报表类型信息
            reportTable: {
                name: '土地利用现状分类面积汇总表',
                nameEn: 'TDLY_EJFL'
            },
            // 占地面积单位
            unit: 'G',
            // 查询哪一年
            year: '2019',
            // 年份范围
            startYear: '2017',
            endYear: '2019'
        }
    },
    getters: {
        getParam (state) {
            return state.param;
        },
        getParamSameAsServer (state) {
            // 按照后台的要求的参数格式修改，主要是字母的大小写问题,这是参数包含了两个请求的参数，是全量的
            let serverParamStandard = {
                tableName: null,
                regionCode: null,
                year: null,
                unit: null,
                starYear: null,
                endYear: null
            };
            serverParamStandard.tableName = state.param.reportTable.nameEn;
            serverParamStandard.regionCode = state.param.region.code;
            serverParamStandard.year = state.param.year;
            serverParamStandard.unit = state.param.unit;
            serverParamStandard.starYear = state.param.startYear;
            serverParamStandard.endYear = state.param.endYear;
            return serverParamStandard;
        }
    },
    actions: {
        setParam (context, param) {
            context.commit('setParam', param);
        },
        setReportTable (context, reportTable) {
            context.commit('setReportTable', reportTable);
        },
        setReportTableName (context, name) {
            context.commit('setReportTableName', name);
        },
        setReportTableCode (context, code) {
            context.commit('setReportTableCode', code);
        },
        setRegion (context, region) {
            context.commit('setRegion', region);
        },
        setRegionName (context, name) {
            context.commit('setRegionName', name);
        },
        setRegionNameEn (context, nameEn) {
            context.commit('setRegionNameEn', nameEn);
        },
        setUnit (context, unit) {
            context.commit('setUnit', unit);
        },
        setYear (context, year) {
            context.commit('setYear', year);
        },
        setStartYear (context, startYear) {
            context.commit('setStartYear', startYear);
        },
        setEndYear (context, endYear) {
            context.commit('setEndYear', endYear);
        }
    },
    mutations: {
        setParam (state, param) {
            state.param = param;
        },
        setReportTable (state, reportTable) {
            state.param.reportTable = reportTable;
        },
        setReportTableName (state, name) {
            state.param.reportTable.name = name;
        },
        setReportTableCode (state, code) {
            state.param.reportTable.nameEn = code;
        },
        setRegion (state, region) {
            state.param.region = region;
        },
        setRegionName (state, name) {
            state.param.region.name = name;
        },
        setRegionNameEn (state, nameEn) {
            state.param.region.code = nameEn;
        },
        setUnit (state, unit) {
            state.param.unit = unit;
        },
        setYear (state, year) {
            state.param.year = year;
        },
        setStartYear (state, startYear) {
            state.param.startYear = startYear;
        },
        setEndYear (state, endYear) {
            state.param.endYear = endYear;
        }
    }
};
export default summary;
