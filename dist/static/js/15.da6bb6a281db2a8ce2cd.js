webpackJsonp([15],{DxwJ:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={components:{WordCard:e("kxGY").a},data:function(){return{}},computed:{thirdMenuList:function(){return this.$router.options.routes.filter(function(t){return"layout"===t.name})[0].children.filter(function(t){return"/watch"===t.path})[0].children}},methods:{wordCardClickHandle:function(t){this.$router.push({path:t.path})}}},i={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"watch-left-panel"},t._l(t.thirdMenuList,function(r,n){return e("WordCard",{key:n,attrs:{icon:r.iconCode,active:t.$route.path===r.path,word:r.name,height:"116px",obj:r},on:{wordCardClick:t.wordCardClickHandle}})}),1)},staticRenderFns:[]};var a=e("VU/8")(n,i,!1,function(t){e("nBS/")},"data-v-7c002bb4",null);r.default=a.exports},FfDA:function(t,r){},kxGY:function(t,r,e){"use strict";var n={props:{height:{type:String,default:"auto"},width:{type:String,default:"50%"},icon:{type:String,default:""},word:{type:String,default:""},active:{type:Boolean,default:!1},obj:{type:Object,default:function(){}}},methods:{wordCardClick:function(t,r){this.$emit("wordCardClick",t)}}},i={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"word-card-outer",class:t.active?"word-card-outer-active":"",style:{height:t.height,width:t.width},on:{click:function(r){return r.stopPropagation(),t.wordCardClick(t.obj,t.word)}}},[e("div",{staticClass:"word-card"},[e("div",{staticClass:"word-card-inner"},[e("i",{staticClass:"iconfont word-icon",domProps:{innerHTML:t._s(t.icon)}}),t._v(" "),e("span",{staticClass:"word"},[t._v(t._s(t.word))])])])])},staticRenderFns:[]};var a=e("VU/8")(n,i,!1,function(t){e("FfDA")},"data-v-58f94c4a",null);r.a=a.exports},"nBS/":function(t,r){}});
//# sourceMappingURL=15.da6bb6a281db2a8ce2cd.js.map