const UNIFY_IP = 'http://cloudwindow.gs.org/';
const locationUrl = location.origin + '/';
/*
全局配置
 */
const GLOBAL = {
	LOGIN_SERVER: UNIFY_IP + 'gm-sso-server',
	LOGIN_PATH: 'http://passport.cloudwindow.com/',
	LOCAL_SERVER: process.env.NODE_ENV === 'production' ? process.env.WEB_BASIC_URL : locationUrl,
	PROXY: process.env.NODE_ENV === 'production' ? '' : 'web_api'
};

/**
 * 该系统默认的URL.
 * @type {{}}
 */
const DEFAULT_URLS = {
	token: GLOBAL.LOGIN_SERVER + 'checkTokenByAppKey',
	username: 'arcgis',
	password: 'esri1234',
	// 业务逻辑的接口配置
	// 汇总分析接口
	summary: {
		// 查询所有的辖区
		queryAllRegion: GLOBAL.LOCAL_SERVER + GLOBAL.PROXY + '/StatisticalAnalysis/RegionTableByGANSU',
		// 查询所有报表名称
		queryAllReportTableName: GLOBAL.LOCAL_SERVER + GLOBAL.PROXY + '/StatisticalAnalysis/ReportTypes',
		// 查询报表分析的数据
		queryReportAnalysisData: GLOBAL.LOCAL_SERVER + GLOBAL.PROXY + '/StatisticalAnalysis/TDLYPieStatiscal',
		// 查询所有地类的数据
		queryAllLandCategory: GLOBAL.LOCAL_SERVER + GLOBAL.PROXY + '/StatisticalAnalysis/TDLYLineStatiscal',
		// 查询报表Excel
		queryReportExcel: GLOBAL.LOCAL_SERVER + GLOBAL.PROXY + '/StatisticalAnalysis/CommonStatistical',
    	//查询文件
    	queryExcelFile:  GLOBAL.LOCAL_SERVER + GLOBAL.PROXY + '/StatisticalAnalysis/DownloadBigFile'
	},
	// 空间站分析接口
	space: {}
};

export default DEFAULT_URLS;
