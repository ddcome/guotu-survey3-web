webpackJsonp([38],{L2Me:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("fx22"),o=(a.n(n),a("9bBU")),i=(a.n(o),a("L5RK")),r=a("/n6Q"),c=(a.n(r),a("yQMH")),s=a("BwfY"),l=(a.n(s),a("fS6E")),u=(a.n(l),a("i/C/")),d=(a.n(u),a("oM7Q")),f=(a.n(d),a("52fq")),v=a("kZ1N"),m=a("nxYM"),_=a("grfP"),p=a("ZYQ1"),b=function(e){function t(e){var a;return Object(i.b)(this,t),a=Object(c.b)(this,Object(c.c)(t).call(this)),Object(i.c)(Object(c.d)(a),"_map",void 0),Object(i.c)(Object(c.d)(a),"_olMap",void 0),Object(i.c)(Object(c.d)(a),"_drawInteraction",void 0),Object(i.c)(Object(c.d)(a),"_measureTooltips",[]),a._map=e,a._olMap=e.olMap,a._drawInteraction=e.interactions.draw,a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"activateHandle",value:function(e){this._addInteraction(e)}},{key:"deactivateHandle",value:function(){this._removeInteraction()}},{key:"_addInteraction",value:function(e){var t,a,n,o=this;this._drawInteraction.toggleActive(!0,e),this._drawInteraction.on("drawstart",function(e){var i,r=o._createMeasureTooltip();a=r.measureTooltip,n=r.measureTooltipElement,t=e.geometry.on("change",function(e){var t=e.target,r=o._map.formatGeometrySize(t).str;t instanceof p.a?i=t.getInteriorPoint().getCoordinates():t instanceof _.a&&(i=t.getLastCoordinate()),n.innerHTML=r,a.setPosition(i)})}),this._drawInteraction.on("drawend",function(){a.setOffset([0,-7]),a=null,n=null,Object(m.b)(t)})}},{key:"_removeInteraction",value:function(){this._drawInteraction.toggleActive(!1),this._drawInteraction.offAll()}},{key:"_createMeasureTooltip",value:function(){var e=document.createElement("div");e.className="webgis-measure-tooltip webgis-measure-tooltip-measure";var t=new v.a({element:e,offset:[0,-15],positioning:"bottom-center"});return this._measureTooltips.push(t),this._olMap.addOverlay(t),{measureTooltip:t,measureTooltipElement:e}}},{key:"_removeMeasureTooltip",value:function(){var e=this;this._measureTooltips.forEach(function(t){return e._olMap.removeOverlay(t)}),this._measureTooltips=[]}}]),t}(f.a);t.default=b}});
//# sourceMappingURL=38.72626476de9e1991a2bc.js.map