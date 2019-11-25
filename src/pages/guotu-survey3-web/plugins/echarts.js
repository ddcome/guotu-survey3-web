/**
 * v-charts 图标组件注册
 * @tutorial
 * https://v-charts.js.org/#/start
 * @description
 * 使用 v-charts 图标库，按需加载 v-charts 的图标组件。所有组件路径如下：
 * |- lib/
 *   |- line.common.js  -------------- 折线图
 *   |- bar.common.js  --------------- 条形图
 *   |- histogram.common.js  --------- 柱状图
 *   |- pie.common.js  --------------- 饼图
 *   |- ring.common.js  -------------- 环图
 *   |- funnel.common.js  ------------ 漏斗图
 *   |- waterfall.common.js  --------- 瀑布图
 *   |- radar.common.js  ------------- 雷达图
 *   |- map.common.js  --------------- 地图
 *   |- sankey.common.js  ------------ 桑基图
 *   |- heatmap.common.js  ----------- 热力图
 *   |- scatter.common.js  ----------- 散点图
 *   |- candle.common.js  ------------ k线图
 *   |- gauge.common.js  ------------- 仪表盘
 *   |- tree.common.js  -------------- 树图
 *   |- bmap.common.js  -------------- 百度地图
 *   |- amap.common.js  -------------- 高德地图
 */
import Vue from 'vue';
import VePie from 'v-charts/lib/pie.common';
import VeLine from 'v-charts/lib/line.common';
import VeHistogram from 'v-charts/lib/histogram.common';
import 'echarts/lib/component/legendScroll';
import 'v-charts/lib/style.css';

// 注册全局的 v-charts 组件
Vue.component(VePie.name, VePie);
Vue.component(VeLine.name, VeLine);
Vue.component(VeHistogram.name, VeHistogram);
