const state = {
    menuList: [
        {
            id: 1,
            name: '首页',
            path: '/',
            hidden: false,
            child: []
        },
        {
            id: 2,
            name: '新闻动态',
            path: '/news',
            hidden: false,
            child: []
        },
        /*        {
            id: 3,
            name: '公告信息',
            path: '/notice',
            hidden: false,
            child: []
        }, */
        {
            id: 4,
            name: '政策法规',
            path: '/policy',
            hidden: false,
            child: []
        },
        {
            id: 5,
            name: '数据资源',
            path: '/data',
            hidden: false,
            child: [
                {
                    id: 51,
                    name: '数据服务',
                    path: '/data/datagallery',
                    hidden: false
                },
                {
                    id: 52,
                    name: '功能服务',
                    path: '/data/fungallery',
                    hidden: false
                }
            ]
        },
        {
            id: 6,
            name: '个人中心',
            path: '/personal',
            hidden: false,
            child: []/*,
            child: [
            {
              id: 61,
              name: '个人信息',
              path: '/personal/info',
              hidden: false
            }
          ] */
        },
        {
            id: 7,
            name: '联系我们',
            path: '/contact',
            hidden: false,
            child: []
        }
    ],
    applicationList: [
        {serviceName: 'TDX2017884294G', serviceType: '资源服务', application: '审核中...'},
        {serviceName: 'TDX2017884294G', serviceType: '资源服务', application: '审核中...'},
        {serviceName: 'TDX2017884294G', serviceType: '资源服务', application: '审核中...'}
    ]
};

const mutations = {

};

const actions = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
