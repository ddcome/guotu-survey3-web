webpackJsonp([34],{0:function(e,n,t){t("j1ja"),e.exports=t("wp2W")},"6/6n":function(e,n,t){"use strict";var a=t("mvHQ"),o=t.n(a),r={addURLParam:function(e,n,t){return e?(e.indexOf("?")>=0?e+="&"+n+"="+t:e+="?"+n+"="+t,e):null},isEmpty:function(e){try{return!(0===e||1===e||e&&void 0!==e&&("string"!=typeof e||e.constructor!==String||"undefined"!==e.toLowerCase()&&"null"!==e.toLowerCase()))}catch(e){return"Error: find isEmpty(val) val is error"}},toRgbaArr:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255,t=e.toLowerCase();if(t&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){for(var a="#",o=1;o<4;o+=1)a+=t.slice(o,o+1).concat(t.slice(o,o+1));t=a}for(var r=[],i=1;i<7;i+=2)r.push(parseInt("0x"+t.slice(i,i+2),16));return[].concat(r).concat(n)}return t},deepCopy:function(e){var n=o()(e);return JSON.parse(n)},uuid:function(){for(var e=[],n=0;n<36;n++)e[n]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var t=e.join("");return t}};new(t("7+uW").default);var i=t("wp2W"),c={loading:null,notify:null,code:s,showLoading:function(e){console.log(i.default.vm);var n=e||"努力加载中";this.loading=i.default.vm.$loading({lock:!0,text:n,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},closeLoading:function(){this.loading.close()},showNotify:function(e,n,t){t=void 0===t||t&&!0===t?2e3:0;var a="",o="";switch(e||"info"){case"success":a="success",o="成功";break;case"warning":a="warning",o="警告";break;case"info":a="info",o="信息";break;case"error":a="error",o="错误"}return this.notify=i.default.vm.$notify({title:o,message:n,type:a,offset:80,duration:t,position:"top-right"}),this.notify},closeNotify:function(){this.notify.close()}};t.d(n,"a",function(){return u}),t.d(n,"c",function(){return f}),t.d(n,"d",function(){return s}),t.d(n,"b",function(){return d});var u=r,f=c,s={success:{},error:{INIT_GREATMAP_FAIL:"初始化地图失败，请检查网络或联系服务商",INIT_AREADATA_FAIL:"初始化行政区列表失败",INIT_TABLEHEADERS_FAIL:"初始化报表列表失败"},warning:{}},d=["#19d4ae","#5ab1ef","#fa6e86","#ffb980","#0067a6","#c4b4e4","#d87a80","#9cbbff","#d9d0c7","#87a997","#d49ea2","#5b4947","#7ba3a8","#139dad","#80c269","#f7ac47","#67e0e3","#ffdb5c","#e062ae","#ff9f7f","#4171fa","#106fcf","#e75d6c","#2eddc1","#FCCE10","#E87C25","#27727B","#9efdc6","#f27C99","#a27C99","#27727B","#2CEDED","#7049F0","#B347FF","#E70E65","#FF714A","#F6B768","#B0DF5D","#FC7DBC","#0A9FFD","#e9bae8","#3dc5e7","#2aa12d","#e88886","#feda66","#c92123","#8bc77b","#fb7f10","#e492d0","#2aa12d","#fb7f10","#98c0fd","#4393c3","#2166ac","#f97494"]},JViL:function(e,n){},Qbfk:function(e,n){},iD9F:function(e,n){},tvR6:function(e,n){},wp2W:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={};t.d(a,"parseTime",function(){return L.parseTime}),t.d(a,"formatTime",function(){return L.formatTime}),t.d(a,"uppercaseFirst",function(){return N}),t.d(a,"trimEmptyAndEnter",function(){return Y});var o=t("fZjL"),r=t.n(o),i=t("7+uW"),c={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var u=t("VU/8")({name:"App"},c,!1,function(e){t("iD9F")},null,null).exports,f=t("/ocq");i.default.use(f.a);var s=new f.a({routes:[{path:"/",name:"layout",component:function(){return t.e(5).then(t.bind(null,"6fgc"))},children:[{path:"/",class:"iconfont icon-beauty",iconCode:"&#xe681;",name:"首页"},{path:"/space",class:"iconfont icon-beauty",iconCode:"&#xe61a;",name:"空间分析",components:{default:function(){return t.e(6).then(t.bind(null,"1I9f"))},SpaceResult:function(){return t.e(7).then(t.bind(null,"gfAB"))}}},{path:"/summary",class:"iconfont icon-beauty",iconCode:"&#xe63b;",name:"统计分析",components:{default:function(){return t.e(9).then(t.bind(null,"3XOy"))},SummaryResult:function(){return t.e(3).then(t.bind(null,"XwN/"))}}},{path:"/trend",class:"iconfont icon-beauty",iconCode:"&#xe60a;",name:"趋势分析",components:{default:function(){return t.e(16).then(t.bind(null,"9Lkd"))},TrendResult:function(){return t.e(25).then(t.bind(null,"sEkm"))}},children:[{path:"/trend/jsydqsfx",class:"iconfont icon-beauty",iconCode:"&#xe712;",name:"建设用地趋势分析",component:function(){return t.e(27).then(t.bind(null,"ywrY"))}},{path:"/trend/gddtbhqsfx",class:"iconfont icon-beauty",iconCode:"&#xe7c7;",name:"耕地动态变化趋势分析"},{path:"/trend/ssnyddtbhqsfx",class:"iconfont icon-beauty",iconCode:"&#xe65c;",name:"设施农用地动态变化趋势分析"},{path:"/trend/wlyddtbhqsfx",class:"iconfont icon-beauty",iconCode:"&#xe6b0;",name:"未利用地动态变化趋势分析"}]},{path:"/watch",class:"iconfont icon-beauty",iconCode:"&#xe62d;",name:"监管服务",component:function(){return t.e(15).then(t.bind(null,"DxwJ"))},children:[{path:"/watch/tdlyxzjgfx",class:"iconfont icon-beauty",iconCode:"&#xe74d;",name:"土地利用现状监管分析"},{path:"/watch/tdzyjgzzlfx",class:"iconfont icon-beauty",iconCode:"&#xe6a2;",name:"土地资源监管总质量分析"},{path:"/watch/jbntjkyj",class:"iconfont icon-beauty",iconCode:"&#xe8a8;",name:"基本农田监控预警"},{path:"/watch/wfydyj",class:"iconfont icon-beauty",iconCode:"&#xe649;",name:"违法用地预警"},{path:"/watch/gdbylyj",class:"iconfont icon-beauty",iconCode:"&#xe89f;",name:"耕地保有量预警"}]}]},{path:"/login",name:"Login",component:function(){return t.e(22).then(t.bind(null,"I3Yw"))}},{path:"*",redirect:{name:"Login"}}]});s.beforeEach(function(e,n,t){t()});var d=s,l=t("zL8q"),m=t.n(l),p=(t("tvR6"),t("JViL"),t("NYxO")),b=t("mtWM"),h=t.n(b),y=t("mw3O"),g=t.n(y),E={state:{menuList:[{id:1,name:"用户A",path:"",class:"iconfont",iconCode:"&#xe643;",hidden:!1,child:[{id:11,name:"注册",path:"/login",class:"",iconCode:"",hidden:!1},{id:12,name:"退出",path:"/login",class:"",iconCode:"",hidden:!1}]}]},getters:{passHiddenMenuList:function(e){return e.menuList.filter(function(e){return!1===e.hidden})}},actions:{},mutations:{}},A={state:{mapObj:{}},actions:{setMapObj:function(e,n){e.commit("setMapObj",n)}},mutations:{setMapObj:function(e,n){e.mapObj=n}}},C={state:{layerTreeList:[]},getter:{},actions:{setLayerTreeList:function(e,n){e.commit("setLayerTreeList",n)}},mutations:{setLayerTreeList:function(e,n){e.layerTreeList=n}}},T={state:{param:{region:{name:"瓜州县",code:"620922"},reportTable:{name:"土地利用现状分类面积汇总表",nameEn:"TDLY_EJFL"},unit:"G",year:"2019",startYear:"2017",endYear:"2019"}},getters:{getParam:function(e){return e.param},getParamSameAsServer:function(e){var n={tableName:null,regionCode:null,year:null,unit:null,starYear:null,endYear:null};return n.tableName=e.param.reportTable.nameEn,n.regionCode=e.param.region.code,n.year=e.param.year,n.unit=e.param.unit,n.starYear=e.param.startYear,n.endYear=e.param.endYear,n}},actions:{setParam:function(e,n){e.commit("setParam",n)},setReportTable:function(e,n){e.commit("setReportTable",n)},setReportTableName:function(e,n){e.commit("setReportTableName",n)},setReportTableCode:function(e,n){e.commit("setReportTableCode",n)},setRegion:function(e,n){e.commit("setRegion",n)},setRegionName:function(e,n){e.commit("setRegionName",n)},setRegionNameEn:function(e,n){e.commit("setRegionNameEn",n)},setUnit:function(e,n){e.commit("setUnit",n)},setYear:function(e,n){e.commit("setYear",n)},setStartYear:function(e,n){e.commit("setStartYear",n)},setEndYear:function(e,n){e.commit("setEndYear",n)}},mutations:{setParam:function(e,n){e.param=n},setReportTable:function(e,n){e.param.reportTable=n},setReportTableName:function(e,n){e.param.reportTable.name=n},setReportTableCode:function(e,n){e.param.reportTable.nameEn=n},setRegion:function(e,n){e.param.region=n},setRegionName:function(e,n){e.param.region.name=n},setRegionNameEn:function(e,n){e.param.region.code=n},setUnit:function(e,n){e.param.unit=n},setYear:function(e,n){e.param.year=n},setStartYear:function(e,n){e.param.startYear=n},setEndYear:function(e,n){e.param.endYear=n}}},R={menuList:function(e){return e.menu.menuList},map:function(e){return e.greatMap.map},treeNodes:function(e){return e.greatMap.treeNodes},layerTreeList:function(e){return e.leftPanel.layerTreeList},summary:function(e){return e.summary.param}};i.default.use(p.a);var v=new p.a.Store({modules:{menu:E,greatMap:A,leftPanel:C,summary:T},getters:R}),L=t("6/6n");function N(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Y(e){return e.replace(/(^\s*)|(\s*$)/g,"").replace(/[\r\n]/g,"")}var M=t("HSQo"),w=t.n(M),F=t("XLwt"),x=t.n(F),_=["#19d4ae","#5ab1ef","#fa6e86","#ffb980","#0067a6","#c4b4e4","#d87a80","#9cbbff","#d9d0c7","#87a997","#d49ea2","#5b4947","#7ba3a8","#139dad","#80c269","#f7ac47","#67e0e3","#ffdb5c","#e062ae","#ff9f7f","#4171fa","#106fcf","#e75d6c","#2eddc1","#FCCE10","#E87C25","#27727B","#9efdc6","#f27C99","#a27C99","#27727B","#2CEDED","#7049F0","#B347FF","#E70E65","#FF714A","#F6B768","#B0DF5D","#FC7DBC","#0A9FFD","#e9bae8","#3dc5e7","#2aa12d","#e88886","#feda66","#c92123","#8bc77b","#fb7f10","#e492d0","#2aa12d","#fb7f10","#98c0fd","#4393c3","#2166ac","#f97494"],S={install:function(e){w()(e.prototype,{$echart:{get:function(){return{instance:function(e,n){return this.echart=x.a.init(document.getElementById(e)),this.echart.clear(),this.echart.setOption(n),this.echart},color:_}}}})}},D=t("LKcQ"),I=t.n(D),B=t("vXZn"),O=t.n(B),P=t("p/TY"),j=t.n(P);t("P7ry"),t("Qbfk");i.default.component(I.a.name,I.a),i.default.component(O.a.name,O.a),i.default.component(j.a.name,j.a),i.default.use(S);var G={COMMON:{GREATMAP_READYED:"COMMON_GREATMAP_READYED"},HOME:{},LOGIN:{},SPACE:{ANALYSIS_BTN:"SPACE_ANALYSIS_BTN"},DECISION:{},DRAFTING:{},SUMMARY:{ANALYSIS_BTN:"SUMMARY_ANALYSIS_BTN",PREVIEW_BTN:"SUMMARY_PREVIEW_BTN",TIMELINE:"SUMMARY_TIMELINE",PARAM_CHANGED:"SUMMARY_PARAM_CHANGED",CATEGORY_CHANGED:"SUMMARY_CATEGORY_CHANGED"}},U=function(e){e.prototype.$Bus=new e({data:function(){return{BusConfig:G}},methods:{registerEvent:function(e,n){this.$emit(e,n)},listenEvent:function(e,n){this.$on(e,n)},clearEvent:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];for(var a in n)this.$off(n[a])}}})};i.default.prototype.$axios=h.a,i.default.prototype.qs=g.a,i.default.config.productionTip=!1,i.default.use(m.a),i.default.use(p.a),i.default.use(U),r()(a).forEach(function(e){i.default.filter(e,a[e])});var k=new i.default({el:"#app",router:d,store:v,components:{App:u},template:"<App/>"});n.default={vm:k}}},[0]);
//# sourceMappingURL=web.26af3db73b62c6db67ec.js.map