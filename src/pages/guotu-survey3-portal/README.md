# guotu-survey3-web目录结构

```
├── guotu-survey3-web
│   ├── assets 静态文件目录
│   ├── axios 请求封装
│   ├── components 公共组件，弃用
│   ├── config URL配置文件
│   ├── filters VUE过滤器
│   ├── mock mock数据
│   ├── router 路由
│   ├── service 服务层
│   ├── store VUEX数据
│   ├── styles 公共样式
│   ├── test 测试数据目录，已是静态目录
│   ├── utils 工具类
│   ├── views 视图层
.
```

# 项目运行

- 启动
```
npm start
```





- 启动后访问地址
[三调门户](http://localhost:8080/portal.html#/)

# 打包

- 下面是打包需要修改的地方

1.修改data-gallery.service.js：

```angular2html
// 为了上线服务的代码... 后续是要放开的！！！
      // Token.refreshToken().then(function () {
          let param = {
              num: num,
              start: start,
              sortField: 'modified',
              sortOrder: 'desc',
              q: $this.search + ' ' + 'owner:arcgis orgid:0123456789ABCDEF (type:("Map Service") -typekeywords:("Tiled" OR "Hosted") -type:("Web Map" OR "Web Mapping Application" OR "Shapefile"))  ownerfolder:root -type:("Code Attachment" OR "Featured Items") -typekeywords:("MapAreaPackage") -type:("Map Area")',
              f: 'json',
              token: Config.URL_DEFAULT.gisConfig.analyToken
          };
          axios.get(Config.URL_DEFAULT.gisServer.search, param).then(function (res) {
              $this.galleryCardList = $self.makeDataCompleted(res.data.results);
              $this.paginationTotal = res.data.total;
          });
      // });
```

2.修改url.default.js:

使用https://server.tyht.com/portal/sharing/rest/generateToken
生成对应的token

```angular2html

queryToken:
http://wh.greatmap.com.cn:16444

analyToken:
https://server.tyht.com/portal

```

3.安装preview版本

