const UNIFY_IP = 'http://cloudwindow.gs.org/';
const locationUrl = location.origin + '/';
/*
全局配置
 */
let GLOBAL = {
    LOGIN_SERVER: UNIFY_IP + 'gm-sso-server',
    LOGIN_PATH: 'http://passport.cloudwindow.com/',
    UUMS_SERVER: UNIFY_IP + 'uums-server',
    ACCPETANCE_SERVER: 'http://cloudwindow.gs.org/cloudwindow-acceptance-server/',
    // GIS_SERVER: 'https://server.tyht.com/'
    GIS_SERVER: process.env.NODE_ENV === 'production' ? process.env.GIS_URL : locationUrl,
    PORTAL_SERVER: process.env.NODE_ENV === 'production' ? process.env.BASIC_URL : locationUrl,
    PROXY: process.env.NODE_ENV === 'production' ? '' : 'portal_api', // 该子系统的代理标识
    GIS_PROXY: process.env.NODE_ENV === 'production' ? '' : 'portal_arcgis' // 该子系统的代理标识
};

/**
 * 该系统默认的URL.
 * @type {{}}
 */
const DEFAULT_URLS = {
    token: GLOBAL.LOGIN_SERVER + 'checkTokenByAppKey',
    mapConfig: './test/mapconfig.json',
    // arcgisVersion: '10.2',
    arcgisVersion: '10.6', // 大数据相关服务
    generateToken: GLOBAL.GIS_SERVER + GLOBAL.GIS_PROXY + '/portal/sharing/rest/generateToken',
    redirect: GLOBAL.GIS_SERVER + GLOBAL.GIS_PROXY + '/portal',
    username: 'arcgis',
    password: 'esri1234',
    gisConfig: {
        mapServerConfig: './test/mapServerConfig.json',
        mapServerRestUrl: locationUrl,
        // analyToken: 'vc4TAzt46O53mJY9aVROo0XxE6WZ3NwprtgnIroL5vpZ73wO8J4JLQZr-CaWLwC6GFpV2u8JCVbrOYpRQoSzSpwqRQpYoeh1E4ufXB21SbY52xlxkb4UXWFNuBksqi_FmEv29MEhngyi8XqXgjALQQ..',
        // analyToken: 'RVfOxqSlzHknsmN54kw0NDVjNip3p3gHBjcSvgcPq7XAO6_Ui_ynk4AyHizfdPPEdMgR5w6fxuoaWm0kGj3-Kw0VBJWVVHJ9450bEdj_rc6S8mYQkjfDTG55wLB8aPYxI6BGlsTL4xWoUGT0j0pNUQ..',
        queryToken: 'vc4TAzt46O53mJY9aVROo0XxE6WZ3NwprtgnIroL5vpZ73wO8J4JLQZr-CaWLwC6GFpV2u8JCVbrOYpRQoSzSpwqRQpYoeh1E4ufXB21SbY52xlxkb4UXWFNuBksqi_FmEv29MEhngyi8XqXgjALQQ..'
    },
    gisServer: {
        search: GLOBAL.GIS_SERVER + GLOBAL.GIS_PROXY + '/portal/sharing/rest/search',
        imgUrl (id, analyToken) {
            return GLOBAL.GIS_SERVER + GLOBAL.GIS_PROXY + '/portal/sharing/rest/content/items/' + id + '/info/thumbnail/thumbnail.JPEG?token=' + analyToken;
        }
    },
    folder: {
        queryAllByParentId: GLOBAL.PORTAL_SERVER + GLOBAL.PROXY + '/folder/getAllParentFolder',
        queryAllByPagination: GLOBAL.PORTAL_SERVER + GLOBAL.PROXY + '/folder/selectPage',
        queryAllParentFolder: GLOBAL.PORTAL_SERVER + GLOBAL.PROXY + '/folder/getAllParentFolder'
    },
    article: {
        getArticleByFolderId: GLOBAL.PORTAL_SERVER + GLOBAL.PROXY + '/article/getArticleByFolderId',
        queryArticleListByPageList: GLOBAL.PORTAL_SERVER + GLOBAL.PROXY + '/article/pageList',
        queryArticleById: GLOBAL.PORTAL_SERVER + GLOBAL.PROXY + '/article/selectArticle',
        articleEdit: GLOBAL.PORTAL_SERVER + GLOBAL.PROXY + '/article/addArticle'
    }
};

export default DEFAULT_URLS;
