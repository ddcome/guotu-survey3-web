const locationUrl = location.origin + '/';
/*
全局配置
 */
const GLOBAL = {
    BACK_SERVER: locationUrl,
    PROXY: 'back_api' // 该子系统的代理标识
};

/**
 * 该系统默认的URL.
 * @type {{}}
 */
const DEFAULT_URLS = {
    folder: {
        queryAllByParentId: GLOBAL.BACK_SERVER + GLOBAL.PROXY + '/folder/getAllParentFolder',
        insertOne: GLOBAL.BACK_SERVER + GLOBAL.PROXY + '/folder/addFolder',
        deleteSomeByIds: GLOBAL.BACK_SERVER + GLOBAL.PROXY + '/folder/deleteFolder',
        queryAllByPagination: GLOBAL.BACK_SERVER + GLOBAL.PROXY + '/folder/selectPage',
        queryAllParentFolder: GLOBAL.BACK_SERVER + GLOBAL.PROXY + '/folder/getAllParentFolder'
    },
    article: {
        queryArticleList: GLOBAL.BACK_SERVER + GLOBAL.PROXY + '/article/pageList',
        articleEdit: GLOBAL.BACK_SERVER + GLOBAL.PROXY + '/article/addArticle',
        deleteArticle: GLOBAL.BACK_SERVER + GLOBAL.PROXY + '/article/deleteArticle',
        updateArticle: GLOBAL.BACK_SERVER + GLOBAL.PROXY + '/article/updateArticle'
    }
};

export default DEFAULT_URLS;
