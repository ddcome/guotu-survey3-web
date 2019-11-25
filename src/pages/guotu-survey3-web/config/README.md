# config配置文件说明

## 目录结构

```
 - config
    配置文件目录，主要是URL配置
 -- index.jkhfdata.js
    出口文件
 -- url.default.js
    该系统的URL配置，该系统指的就是这个子系统
```

## 说明

> 只秉持一个出口原则。即index.js出口，任何外部调用，必须通过index.js去掉用，不能直接调用config中的其他文件，诸如url.default.js等等。
