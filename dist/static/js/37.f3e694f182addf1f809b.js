webpackJsonp([37],{ICYL:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("7+uW");var n=r("EuXz"),s=(r.n(n),r("gbyG")),i=(r.n(s),r("Gh7F")),a=(r.n(i),r("WpTh")),c=(r.n(a),r("fx22")),o=(r.n(c),r("tJwI")),u=(r.n(o),r("bQXb"),r("XTu8")),v=(r.n(u),r("Puzn"),r("5zde")),l=(r.n(v),r("Xd32")),d=(r.n(l),r("9bBU")),y=(r.n(d),r("L5RK")),m=r("/n6Q"),b=(r.n(m),r("yQMH")),f=r("BwfY"),p=(r.n(f),r("fS6E")),O=(r.n(p),r("i/C/")),j=(r.n(O),r("oM7Q")),g=(r.n(j),r("9Yib")),h=(r.n(g),r("A0n/")),S=(r.n(h),r("mJx5")),_=(r.n(S),r("Vpnp")),I=r("xGqq"),T=(r.n(I),r("fG7N")),k=(r.n(T),r("swbA"),r("52fq")),P=r("Rw4K"),w=(r.n(P),r("K9ON")),J=(r.n(w),r("cV5x")),N=r("klrJ"),L=_.a.arcgisOrigin,x=_.a.superDataPath;var D=function(e){function t(e){var r;return Object(y.b)(this,t),r=Object(b.b)(this,Object(b.c)(t).call(this,e)),Object(y.c)(Object(b.d)(r),"_wkid",void 0),Object(y.c)(Object(b.d)(r),"_map",void 0),r._wkid=e.mapConfig.wkid,r._map=e,r}return Object(b.a)(t,e),Object(y.a)(t,[{key:"doAnalysis",value:function(e,t){var r=this,n=Date.now(),s="buffer_cs"+n,i="overlay_cs"+n,a="summary_cs"+n,c=this._map.getTopVisibleLayer().id;return this._bufferAnalysis(c,s,e,t).then(function(){return r._overlayAnalysis(c,i,s).then(function(){return r._summaryAnalysis(c,a,i).then(function(){return Object(N.f)(a,r._wkid).then(function(e){return r._map.interactions.zoom.toFeatures(r._map.renderFeatureData(e)),e})})})})}},{key:"_bufferAnalysis",value:function(e,t,r,n){var s=this;return Object(N.c)(t).then(function(i){return Object(N.e)({serviceUrl:i.serviceurl,serviceId:i.itemId,extent:r,wkid:s._wkid,distance:n,name:t,serviceCode:e}).then(function(e){return s.getProgress("CreateBuffers",e.jobId)})})}},{key:"_overlayAnalysis",value:function(e,t,r){var n=this;return Object(N.c)(t).then(function(s){return function(e){var t=e.serviceUrl,r=e.serviceId,n=e.name,s=e.bufferName,i=e.serviceCode;return Object(N.d)({serviceUrl:t,serviceId:r,name:n,inputLayer:{url:"".concat(L,"/server/rest/services/DataStoreCatalogs/").concat(x,"/BigDataCatalogServer/").concat(i),name:"".concat(x,"-").concat(i)},overlayLayer:{url:"".concat(L,"/server/rest/services/Hosted/").concat(s,"/FeatureServer/0"),name:s}})}({serviceUrl:s.serviceurl,serviceId:s.itemId,name:t,bufferName:r,serviceCode:e}).then(function(e){return n.getProgress("OverlayLayers",e.jobId)})})}},{key:"_summaryAnalysis",value:function(e,t,r){var n=this;return Object(N.c)(t).then(function(s){return function(e){var t=e.serviceUrl,r=e.serviceId,n=e.name,s=e.overlayName;return Object(N.b)({serviceUrl:t,serviceId:r,name:n,inputLayer:{url:"".concat(L,"/server/rest/services/Hosted/").concat(s,"/FeatureServer/0")}})}({name:t,serviceUrl:s.serviceurl,serviceId:s.itemId,overlayName:r,serviceCode:e}).then(function(e){return n.getProgress("SummarizeAttributes",e.jobId)})})}}]),t}(Object(J.a)(N.a,k.a));t.default=D},klrJ:function(e,t,r){"use strict";r.d(t,"a",function(){return f}),r.d(t,"b",function(){return m}),r.d(t,"c",function(){return l}),r.d(t,"d",function(){return y}),r.d(t,"e",function(){return d}),r.d(t,"f",function(){return b});var n=r("EuXz"),s=(r.n(n),r("bQXb")),i=r("Puzn"),a=r("L5RK"),c=r("yQMH"),o=r("Vpnp"),u=r("swbA"),v=o.a.superDataPath;function l(e){return Object(u.b)({url:"/portal/sharing/rest/content/users/admin/createService",method:"post",data:{f:"json",createParameters:JSON.stringify({currentVersion:10.2,serviceDescription:"",hasVersionedData:!1,supportsDisconnectedEditing:!1,hasStaticData:!0,maxRecordCount:2e3,supportedQueryFormats:"JSON",capabilities:"Query",description:"",copyrightText:"",allowGeometryUpdates:!1,syncEnabled:!1,editorTrackingInfo:{enableEditorTracking:!1,enableOwnershipAccessControl:!1,allowOthersToUpdate:!0,allowOthersToDelete:!0},xssPreventionInfo:{xssPreventionEnabled:!0,xssPreventionRule:"InputOnly",xssInputRule:"rejectInvalid"},tables:[],name:e,options:{dataSourceType:"spatiotemporal"}}),outputType:"featureService"},analysisToken:!0})}function d(e){var t=e.serviceUrl,r=e.serviceId,n=e.extent,s=e.wkid,i=e.distance,a=e.name,c=e.serviceCode;return Object(u.b)({url:"/server/rest/services/System/GeoAnalyticsTools/GPServer/CreateBuffers/submitJob",method:"post",data:{f:"json",inputLayer:JSON.stringify({url:"".concat(o.a.arcgisOrigin,"/server/rest/services/DataStoreCatalogs/").concat(v,"/BigDataCatalogServer/").concat(c),name:"".concat(v,"-").concat(c)}),distance:i||10,distanceUnit:"Meters",method:"Geodesic",dissolveOption:"None",OutputName:JSON.stringify({serviceProperties:{name:a,serviceUrl:t,itemProperties:{itemId:r}}}),context:JSON.stringify({extent:{xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:{wkid:s,latestWkid:s}},outSR:{spatialReference:{wkid:s}}})},analysisToken:!0})}function y(e){var t=e.serviceUrl,r=e.serviceId,n=e.name,s=e.inputLayer,i=e.overlayLayer,a=e.overlayType,c=void 0===a?"Intersect":a;return Object(u.b)({url:"/server/rest/services/System/GeoAnalyticsTools/GPServer/OverlayLayers/submitJob",method:"post",data:{f:"json",inputLayer:JSON.stringify(s),overlayLayer:JSON.stringify(i),overlayType:c,dissolveOption:"None",OutputName:JSON.stringify({serviceProperties:{name:n,serviceUrl:t,itemProperties:{itemId:r}}})},analysisToken:!0})}function m(e){var t=e.serviceUrl,r=e.serviceId,n=e.name,s=e.inputLayer;return Object(u.b)({url:"/server/rest/services/System/GeoAnalyticsTools/getAnalysisProgress/SummarizeAttributes/submitJob",method:"post",data:{f:"json",inputLayer:JSON.stringify(s),fields:"DLBM_overlay,DLMC_overlay,ZLDWDM_overlay,ZLDWMC_overlay",summaryFields:JSON.stringify([{statisticType:"SUM",onStatisticField:"TBDLMJ_overlay"}]),OutputName:JSON.stringify({serviceProperties:{name:n,serviceUrl:t,itemProperties:{itemId:r}}})},analysisToken:!0})}function b(e,t){return Object(u.b)({url:"/server/rest/services/Hosted/".concat(e,"/FeatureServer/0/query"),method:"post",data:{where:"1=1",returnGeometry:!0,outFields:"*",outSR:t,f:"json",objectIds:"",returnDistinctValues:"",orderByFields:""}})}var f=function(e){function t(e){var r;return Object(a.b)(this,t),r=Object(c.b)(this,Object(c.c)(t).call(this,"next")),Object(a.c)(Object(c.d)(r),"_intervalTime",1500),Object(a.c)(Object(c.d)(r),"_vectorSource",void 0),Object(a.c)(Object(c.d)(r),"_map",void 0),r._vectorSource=e.vectorSource,r._map=e,r}return Object(c.a)(t,e),Object(a.a)(t,[{key:"getProgress",value:function(e,t){var r=this;return new Promise(function(n,i){var a=r;!function r(){(function(e,t){return Object(u.b)({url:"/server/rest/services/System/GeoAnalyticsTools/GPServer/".concat(e,"/jobs/").concat(t),params:{f:"json"},analysisToken:!0})})(e,t).then(function(e){var t=e?e.jobStatus:"";"esriJobSucceeded"===t?n(e):"esriJobFailed"!==t?(setTimeout(function(){return r()},a._intervalTime),Object(u.a)(e.messages)&&a.dispatch("next",e.messages&&e.messages.pop())):(Object(s.a)(e||e.message),i(e))},function(e){Object(s.a)(e||e.message),i(e)})}()})}}]),t}(i.a)}});
//# sourceMappingURL=37.f3e694f182addf1f809b.js.map