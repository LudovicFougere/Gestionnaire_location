/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){t.jqx.jqxWidget("jqxProgressBar","",{}),t.extend(t.jqx._jqxProgressBar.prototype,{defineInstance:function(){var e={colorRanges:[],value:0,oldValue:null,max:100,min:0,orientation:"horizontal",layout:"normal",width:null,height:null,showText:!1,animationDuration:300,disabled:!1,rtl:!1,renderText:null,template:"",aria:{"aria-valuenow":{name:"value",type:"number"},"aria-disabled":{name:"disabled",type:"boolean"}},events:["valueChanged","invalidValue","complete","change"]};return this===t.jqx._jqxProgressBar.prototype?e:(t.extend(!0,this,e),e)},createInstance:function(e){var i=this;this.host.addClass(this.toThemeProperty("jqx-progressbar")),this.host.addClass(this.toThemeProperty("jqx-widget")),this.host.addClass(this.toThemeProperty("jqx-widget-content")),this.host.addClass(this.toThemeProperty("jqx-rc-all")),t.jqx.aria(this),null!=this.width&&-1!=this.width.toString().indexOf("px")?this.host.width(this.width):(void 0==this.width||isNaN(this.width),this.host.width(this.width)),null!=this.height&&-1!=this.height.toString().indexOf("px")?this.host.height(this.height):(void 0==this.height||isNaN(this.height),this.host.height(this.height)),this.valueDiv=t("<div></div>").appendTo(this.element),this._addRanges(),this.valueDiv.addClass(this.toThemeProperty("jqx-fill-state-pressed")),this.template&&this.valueDiv.addClass(this.toThemeProperty("jqx-"+this.template)),this.feedbackElementHost=t("<div style='left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;'></div>").appendTo(this.host),this.feedbackElement=t("<span class='text'></span>").appendTo(this.feedbackElementHost),this.feedbackElement.addClass(this.toThemeProperty("jqx-progressbar-text")),this.oldValue=this._value(),this.refresh(),t.jqx.utilities.resize(this.host,function(){i.refresh()})},_addRanges:function(){if(0!=this.colorRanges.length)for(var t="vertical"==this.orientation,e=this.colorRanges,i=e.length,s=0;s<i;s++){var h=e[s].stop,a=e[s].color;this._createColorElements(h,a,t,i-s,s)}},_refreshColorElements:function(){for(var t=this.host.outerWidth(),e=this.host.outerHeight(),i="vertical"==this.orientation,s=0;s<this.colorRanges.length;s++){var h=this.colorRanges[s].element;if(!h)return this.host.find(".jqx-progressbar-range").remove(),void this._addRanges();var a=this.colorRanges[s].stop;a>Math.min(this.max,this.value)&&(a=Math.min(this.max,this.value));var r=100*(a-this.min)/(this.max-this.min);size=i?e*r/100:t*r/100,size+="px",i?(h.css("height",size),"reverse"==this.layout?h.css("bottom",0):h.css("top",0)):(h.css("width",size),(this.rtl||"reverse"==this.layout)&&h.css("right","0px"))}},_createColorElements:function(e,i,s,h,a){var r;e>Math.min(this.max,this.value)&&(e=Math.min(this.max,this.value));var o=100*e/this.max;this.host.width(),this.host.height();r=s?this.host.outerHeight()*o/100:this.host.outerWidth()*o/100,r+="px";var n=t(this.valueDiv).parent()[0];if(n.style.position="relative",s=s||!1)(l=t("<div/>")).attr("class","jqx-progressbar-range"),l.css("width","100%"),l.css("height",r),l.css("background-color",i),l.css("position","absolute"),l.css("z-index",h),"reverse"==this.layout?l.css("bottom",0):l.css("top",0),l.appendTo(n);else{var l=t("<div/>");l.attr("class","jqx-progressbar-range"),l.css("width",r),l.css("height","100%"),l.css("background-color",i),l.css("position","absolute"),l.css("z-index",h),l.css("top","0px"),this.rtl&&l.css("right","0px"),l.appendTo(n)}this.colorRanges[a].element=l},resize:function(t,e){this.width=t,this.height=e,this.refresh()},destroy:function(){this.host.removeClass(),this.valueDiv.removeClass(),this.valueDiv.remove(),this.feedbackElement.remove()},_raiseevent:function(e,i,s){if(void 0!=this.isInitialized&&1==this.isInitialized){var h=this.events[e],a=new t.Event(h);return a.previousValue=i,a.currentValue=s,a.owner=this,this.host.trigger(a)}},actualValue:function(e){return void 0===e?this._value():(t.jqx.aria(this,"aria-valuenow",e),t.jqx.setvalueraiseevent(this,"value",e),this._value())},val:function(t){return 0==arguments.length||"object"==typeof t?this.actualValue():this.actualValue(t)},propertiesChangedHandler:function(t,e,i){i&&i.width&&i.height&&2==Object.keys(i).length&&(t.host.width(i.width),t.host.height(i.height),t.refresh())},propertyChangedHandler:function(e,i,s,h){if(this.isInitialized&&s!=h&&!(e.batchUpdate&&e.batchUpdate.width&&e.batchUpdate.height&&2==Object.keys(e.batchUpdate).length)){var a=this;"colorRanges"==i&&(e.host.find(".jqx-progressbar-range").remove(),e._addRanges()),"min"==i&&e.value<h?e.value=h:"max"==i&&e.value>h&&(e.value=h),"value"===i&&void 0!=a.value&&(a.value=h,a.oldValue=s,t.jqx.aria(e,"aria-valuenow",h),(h<a.min||h>a.max)&&a._raiseevent(1,s,h),a.refresh()),"theme"==i&&t.jqx.utilities.setTheme(s,h,e.host),"renderText"==i||"orientation"==i||"layout"==i||"showText"==i||"min"==i||"max"==i?a.refresh():"width"==i&&void 0!=a.width?void 0==a.width||isNaN(a.width)||(a.host.width(a.width),a.refresh()):"height"==i&&void 0!=a.height&&(void 0==a.height||isNaN(a.height)||(a.host.height(a.height),a.refresh())),"disabled"==i&&a.refresh()}},_value:function(){var t=this.value;if("number"!=typeof t){var e=parseInt(t);t=isNaN(e)?0:e}return Math.min(this.max,Math.max(this.min,t))},_percentage:function(){return 100*(this._value()-this.min)/(this.max-this.min)},_textwidth:function(e){var i=t("<span>"+e+"</span>");t(this.host).append(i);var s=i.width();return i.remove(),s},_textheight:function(e){var i=t("<span>"+e+"</span>");t(this.host).append(i);var s=i.height();return i.remove(),s},_initialRender:!0,refresh:function(e){if(!0!==e){var i=this.actualValue(),s=this._percentage();if(this.disabled)return this.host.addClass(this.toThemeProperty("jqx-progressbar-disabled")),void this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"));if(this.host.removeClass(this.toThemeProperty("jqx-progressbar-disabled")),this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled")),t(this.element.children[0]).show(),!isNaN(i)&&!isNaN(s)){this.oldValue!==i&&(this._raiseevent(0,this.oldValue,i),this._raiseevent(3,this.oldValue,i),this.oldValue=i);var h=this.oldValue,a=this.host.outerHeight(),r=this.host.outerWidth();null!=this.width&&(r=parseInt(this.width)),null!=this.height&&(a=parseInt(this.height)),this._refreshColorElements();var o=parseInt(this.host.outerWidth())/2;parseInt(this.host.outerHeight());isNaN(s)&&(s=0),this.valueDiv.removeClass(this.toThemeProperty("jqx-progressbar-value-vertical jqx-progressbar-value")),"horizontal"==this.orientation?(this.valueDiv.width(0),this.valueDiv[0].style.height="100%",this.valueDiv.addClass(this.toThemeProperty("jqx-progressbar-value"))):(this.valueDiv[0].style.width="100%",this.valueDiv.height(0),this.valueDiv.addClass(this.toThemeProperty("jqx-progressbar-value-vertical")));var n=this;try{var l=this.element.children[0];if(t(l)[0].style.position="relative","horizontal"==this.orientation){t(l).toggle(i>=this.min);var r=this.host.outerWidth()*s/100,d=0;("reverse"==this.layout||this.rtl)&&(this._initialRender&&(t(l)[0].style.left=this.host.width()+"px",t(l)[0].style.width=0),d=this.host.outerWidth()-r),t(l).stop(),t(l).animate({width:r,left:d+"px"},this.animationDuration,function(){n._value()===n.max&&n._raiseevent(2,h,n.max)})}else{t(l).toggle(i>=this.min);var a=this.host.height()*s/100,v=0;"reverse"==this.layout&&(this._initialRender&&(t(l)[0].style.top=this.host.height()+"px",t(l)[0].style.height=0),v=this.host.height()-a),t(l).stop(),t(l).animate({height:a,top:v+"px"},this.animationDuration,function(){var e=n._percentage();isNaN(e)&&(e=0),e.toFixed(0)==n.min&&(t(l).hide(),n._value()===n.max&&n._raiseevent(2,h,n.max))})}}catch(t){}this._initialRender=!1,this.feedbackElement.html(s.toFixed(0)+"%").toggle(1==this.showText),this.renderText&&this.feedbackElement.html(this.renderText(s.toFixed(0)+"%",s)),this.feedbackElement.css("position","absolute"),this.feedbackElement.css("top","50%"),this.feedbackElement.css("left","0"),this.colorRanges.length>0&&this.feedbackElement.css("z-index",this.colorRanges.length+1);var u=this.feedbackElement.height(),p=this.feedbackElement.width(),c=Math.floor(o-parseInt(p)/2);this.feedbackElement.css({left:c,"margin-top":-parseInt(u)/2+"px"})}}}})}(jqxBaseFramework);

