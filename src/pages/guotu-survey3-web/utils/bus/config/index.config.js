const BusConfig = {
    // 全局共用的事件
    COMMON: {
        // greatmap组件就绪标识
        GREATMAP_READYED: 'COMMON_GREATMAP_READYED'
    },
    // 首页
    HOME: {},
    // 登陆页
    LOGIN: {},
    // 空间分析
    SPACE: {
        // 分析按钮事件标识
        ANALYSIS_BTN: 'SPACE_ANALYSIS_BTN'
    },
    // 决策分析
    DECISION: {},
    // 地图制图
    DRAFTING: {},
    // 汇总分析
    SUMMARY: {
        // 分析按钮事件标识
        ANALYSIS_BTN: 'SUMMARY_ANALYSIS_BTN',
        // 预览按钮事件标识
        PREVIEW_BTN: 'SUMMARY_PREVIEW_BTN',
        // 折线图的timeline的值发生变化标识
        TIMELINE: 'SUMMARY_TIMELINE',
        // 后台参数发生变化标识
        PARAM_CHANGED: 'SUMMARY_PARAM_CHANGED',
        // 地类select变化标识
        CATEGORY_CHANGED: 'SUMMARY_CATEGORY_CHANGED'
    }
};

/**
 * 注册的事件名称的键值对的维护。
 */
export default BusConfig;
