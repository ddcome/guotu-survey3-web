const BusEventNameUtil = {
    MENU_CURRENT_DATA: 'menu-current-data',
    TREE_DATA: 'tree-data',
    MAP_DATA: 'map_data',
    ANALYSIS_CLICK: 'analysis_click_key',
    TABLE_DATA: 'table_data',
    GREATMAP_IS_READY: 'greatmap_is_ready',
    SETTING_CLICK: 'setting_click',
    // 汇总分析按钮点击事件
    SUMMARY_BTN_CLICK: 'summary_btn_click',
    SUMMARY_PREVIEW_BTN_CLICK: 'summary_preview_btn_click',
    // 汇总分析查询输入所需参数变化
    SUMMARY_PARAM_CHANGE: 'summary_param_change',
    TIME_LINE_CHANGE: 'time_line_change',
    WEBGIS_DLBM_CHANGE: 'webgis_dlbm_change',
    WEBGIS_GREATMAP_IS_READY: 'WEBGIS_GREATMAP_IS_READY',
    CUSTOM_CLICK: 'CUSTOM_CLICK',
    // 汇总分析模块
    SUMMARY: {
        // 分析按钮事件标示
        ANALYSIS_BTN: 'SUMMARY_ANALYSIS_BTN',
        // 预览按钮事件标示
        PREVIEW_BTN: 'SUMMARY_PREVIEW_BTN',
        // 折线图的timeline的值发生变化标示
        TIMELINE: 'SUMMARY_TIMELINE',
        // 后台参数发生变化标示
        PARAM_CHANGED: 'SUMMARY_PARAM_CHANGED',
        // 地类select变化标示
        CATEGORY_CHANGED: 'SUMMARY_CATEGORY_CHANGED'
    }
};

/**
 * centralVue职责是负责非父子组件的数据传输，
 * 也可以传递任何组件间的数据。
 * CentralVueEventName则是主要负责centralVue媒介中注册的事件名称的键值对的维护。
 */
export default BusEventNameUtil;
