// 第一步，引入全局store
// import vueObject from '../main';
let mapTest = {
    name: 'this is map object',
    data: [
        {
            id: 1,
            name: 'name-1'
        },
        {
            id: 2,
            name: 'name-2'
        },
        {
            id: 3,
            name: 'name-3'
        }
    ],
    child: {
        a: [
            {
                aa: 1
            },
            {
                ab: 2
            },
            {
                ac: 3
            }
        ]
    }
};
// 以下代码为测试代码，展示如何在任何位置的js文件中通过VUEX操作VUEX中的数据.
// setInterval(function () {
//     mapTest.child.a.push({
//         new: new Date()
//     });
//     // 第二步，直接使用store通过action修改store中的数据.必须通过action修改数据.
//     vueObject.vm.$store.dispatch('setMapObj', mapTest);
// }, 3000);

export { mapTest };
