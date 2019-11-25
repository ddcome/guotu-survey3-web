const getters = {
    // 菜单
    menuList: state => state.menu.menuList,
    map: state => state.greatMap.map,
    treeNodes: state => state.greatMap.treeNodes,
    layerTreeList: state => state.leftPanel.layerTreeList,
    summary: state => state.summary.param
};
export default getters;
