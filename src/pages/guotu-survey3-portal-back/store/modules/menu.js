const menu = {
    state: {
        menuList: (function () {
            // 暂时模拟菜单数据
            const menuList = [
                {
                    id: 1,
                    name: '用户A',
                    path: '',
                    class: 'iconfont',
                    iconCode: '&#xe643;',
                    hidden: false,
                    child: [
                        {
                            id: 11,
                            name: '注册',
                            path: '/login',
                            class: '',
                            iconCode: '',
                            hidden: false
                        },
                        {
                            id: 12,
                            name: '退出',
                            path: '/login',
                            class: '',
                            iconCode: '',
                            hidden: false
                        }
                    ]
                }
            ];
            // ...code 获取menu数据，或缓冲或查询
            return menuList;
        })()
    },
    getters: {
        passHiddenMenuList: state => {
            return state.menuList.filter(one => {
                return one.hidden === false;
            });
        }
    },
    actions: {
    },
    mutations: {
    }
};
export default menu;
