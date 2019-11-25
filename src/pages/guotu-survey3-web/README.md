# guotu-survey3-web

- 省市级第三次土地调查数据库管理系统


[toc]

## 系统基础环境要求
```
"node": ">= 6.0.0",
"npm": ">= 3.0.0"
```

## 目录结构
```
.
├── guotu-survey3-web
│   ├── assets 静态文件目录
│   ├── axios 请求封装
│   ├── components 公共组件，弃用，组件都会存放在views中。
│   ├── config URL配置文件
│   ├── ├──   index.js   出口文件
│   ├── ├──   url.default.js   该系统的的后台对URL配置
│   ├── ├──   url.*.js    该系统的所需的其他后台的url配置文件，*要具体命名
│   ├── filters VUE过滤器
│   ├── mock mock数据
│   ├── plugins 第三方插件封装
│   ├── router 路由
│   ├── service 服务层
│   ├── ├── data-factory response数据工厂文件夹
│   ├── ├── ├── *.datafactory.js
│   ├── ├── *.service.js
│   ├── store VUEX数据
│   ├── styles 公共样式
│   ├── test 测试数据目录，已是静态目录
│   ├── utils 工具类
│   ├── views 视图层
│   ├── ├──  common    公共组件
│   ├── ├──  Decision  决策服务
│   ├── ├──  Drafting  地图制图
│   ├── ├──  Home      首页
│   ├── ├──  Layout    页面布局结构
│   ├── ├──  Login     登陆
│   ├── ├──  Space     空间分析
│   ├── ├── ├──   common 共用子组件
│   ├── ├── ├──   SpaceLeftPanel letpanel面板中的组件
│   ├── ├── ├──   SpaceResult  result面板中的组件
│   ├── ├──  Summary   汇总分析
│   ├── ├── ├──   common 子组件
│   ├── ├── ├──   SummaryLeftPanel  letpanel面板中的组件
│   ├── ├── ├──   SummaryRe****sult   result面板中的组件
│   ├── ├──  Trend     趋势分析
│   ├── ├── ├──   TrendLeftPanel  letpanel面板中的组件
│   ├── ├── ├──   TrendResult   result面板中的组件
│   ├── ├──  Watch     监管服务
│   ├── ├── ├──   WatchLeftPanel  letpanel面板中的组件
│   ├── ├── ├──   WatchResult   result面板中的组件
│   ├── App.vue  根组件
│   ├── index.html  主文件
│   ├── main.js     文主件脚本
│   ├── README.md   文档
.
```

## 开发基本规约

> 目的是风格统一。

- 基本规定
  - views中文件夹的划分是按照界面菜单划分的。
    - 菜单不变的情况下，一级目录不需要扩建。
  - 页面组件命名是具名的大写驼峰命名，文件夹中必须包含index.vue。
    - 如果index.vue中需要拆分出不同类型的文件的话（推荐以index.*.js等命名，*要描述其类型，不如option、data等）
  - service层规范
    - 必须对应到views，前缀name相同，多单词使用‘-’连接。后缀.service.js 。
  - views层规范
    - 大写驼峰，common除外
    - 命名关联父级，加后缀。ps：Summary下的SummaryLeftPanel
    - 对于拥有leftPanel和resultPanel的页面，子文件有且仅有是common、[name]LeftPanel和[name]Result
  - 逻辑分层要求
    - 对于response数据的处理，要完全放在service层。views层只是页面元素本身的一些交互逻辑。

## 别名引用说明

- vue或js文件中
  - 使用@或者已定义的@guotu-survey3-web
- less中
  - 使用~@或者~@guotu-survey3-web


## 项目运行

- 启动
```
npm start
npm run build:aot:prod
```

- 启动后访问 
[三调数据库管理系统](http://localhost:8080/web.html#/)

## 附录

### 关于service文件夹的划分详述

- 如何划分目录？
  - 为了方便查找，通过大的菜单模块划分service，这样做可以保证service的数量不会太多,便于查找阅读。
- 既然service少了，如何保证每个*.service.js中的代码很少？
  - 数据处理交给data-factory处理
- 如何与*.vue文件交互？
  - 通过vue的this来操作，也就是说，service目录中不应出现有关vue中的任何data()数据，这个是要遵循的。也就是说*.vue中要提供get/set方法给service层操作。这样做的好处是将vue组件对象的变量限制在.vue文件中，有任何变化，都可以只在这个文件中修改完成。
