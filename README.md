# guotu-survey3-web

> 省市级第三次国土调查数据库管理系统

[toc]

## 命令

``` bash
# 安装
npm install

# 运行
npm run dev

# 打包
npm run build
```
## src下的目录结构

```
.
├── src
│   ├── pages 页
│   ├── ├── guotu-survey3-portal 三调门户
│   ├── ├── guotu-survey3-portal-back  三调门户后台
│   ├── ├── guotu-survey3-web  三调数据库管理
├── build  webpack相关配置
├── config  webpack相关配置
├── dist  打包后的文件
├── node_modules    依赖模块
├── static    静态资源
├── test    测试
├── .babelrc  babel配置文件，babel是javascript语法的编译器
├── .editorconfig  编辑器配置
├── .eslintignore  eslint忽略文件
├── .eslintrc.js   eslint 配置文件
├── .gitignore     git忽略文件
├── .postcssrc.js  A tool for transforming CSS with JavaScript
├── .svnignore     svn忽略文件
├── package.json   模块描述文件
                     [详细见](https://www.jianshu.com/p/b3d86ddfd555）
├── package-lock.json    锁定版本
├── README.md      文档
.
```

## 打包修改

```angular2html
"@greatmap/vue-webgis": "git+ssh://git@gitlab.com/great-map/vue-webgis.git#preview",
```
