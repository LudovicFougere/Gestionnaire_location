/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){t.jqx.jqxWidget("jqxBulletChart","",{}),t.extend(t.jqx._jqxBulletChart.prototype,{defineInstance:function(){var i={width:500,height:100,barSize:"50%",ranges:[{startValue:0,endValue:50,color:"#000000",opacity:.7},{startValue:50,endValue:80,color:"#000000",opacity:.5},{startValue:80,endValue:100,color:"#000000",opacity:.3}],pointer:{value:65,label:"Value",size:"25%",color:""},target:{value:85,label:"Target",size:4,color:""},ticks:{position:"far",interval:20,size:10},title:"Title",description:"Description",orientation:"horizontal",labelsFormat:null,labelsFormatFunction:null,animationDuration:400,showTooltip:!0,tooltipFormatFunction:null,disabled:!1,rtl:!1,events:["change"]};return this===t.jqx._jqxBulletChart.prototype?i:(t.extend(!0,this,i),i)},createInstance:function(i){if(!t.jqx.dataAdapter)throw new Error("jqxBulletChart: Missing reference to the following module: 'jqxdata.js'.");this._setDefaultValues(),this.render();var e=this;t.jqx.utilities.resize(this.host,function(){e._timer&&clearTimeout(e._timer),e._timer=setTimeout(function(){var t=e.animationDuration;e.animationDuration=0,e.render(),setTimeout(function(){e.animationDuration=t},0)},10)},!1,!0)},render:function(){this.host.children().length>0&&(this._removeHandlers(),1==this.showTooltip&&this.host.jqxTooltip("destroy"),this.host.empty()),this.host.addClass(this.toThemeProperty("jqx-widget")),this.host.addClass(this.toThemeProperty("jqx-bulletchart")),this.host.width(this.width),this.host.height(this.height);var i,e=this.host.width(),o=this.host.height(),s=this.rtl?"rtl":"ltr";"horizontal"==this.orientation?i=t("<div style='position: absolute; visibility: hidden; padding: 5px;'><div class='"+this.toThemeProperty("jqx-bulletchart-title")+"' style='direction: "+s+";'>"+this.title+"</div><div class='"+this.toThemeProperty("jqx-bulletchart-description")+"' style='direction: "+s+";'>"+this.description+"</div></div>"):"vertical"==this.orientation&&(i=t("<div style='position: absolute; visibility: hidden; padding-bottom: 15px;'><div class='"+this.toThemeProperty("jqx-bulletchart-title")+"' style='width: "+e+"px; direction: "+s+";'>"+this.title+"</div><div class='"+this.toThemeProperty("jqx-bulletchart-description")+"' style='direction: "+s+";'>"+this.description+"</div></div>")),this.host.append(i);var r=i.outerWidth(),a=i.outerHeight();i.remove();var h,l,n,c,d,p;if("horizontal"==this.orientation){if(h="jqx-bulletchart-title-container-horizontal",l="jqx-bulletchart-chart-container-horizontal",n=this._checkPercentage(this.barSize,this.host),v=r,c=this.barSize,d=0,u=e-v,p=c,this.width&&this.width.toString().indexOf("%")>=0){var u=parseFloat(parseFloat(100*u)/e).toString()+"%",v=parseFloat(parseFloat(100*v)/e).toString()+"%";this._percentageWidth=!0}}else"vertical"==this.orientation&&(h="jqx-bulletchart-title-container-vertical",l="jqx-bulletchart-chart-container-vertical",n=0,v="100%",c=a,d=this._checkPercentage(this.barSize,this.host),u=this.barSize,p=o-c);if((0==this.rtl||1==this.rtl&&"vertical"==this.orientation)&&this.host.append("<div id='"+this.element.id+"titleContainer' class='"+h+"' style='top: "+n+";'></div>"),this.host.append("<div id='"+this.element.id+"ChartContainer' class='"+l+"' style='top: "+n+"; left: "+d+";'></div>"),1==this.rtl&&"horizontal"==this.orientation&&this.host.append("<div id='"+this.element.id+"titleContainer' class='"+h+"' style='top: "+n+";'></div>"),this._titleContainer=t("#"+this.element.id+"titleContainer"),this._chartContainer=t("#"+this.element.id+"ChartContainer"),this._titleContainer.css({width:v,height:c}),this._chartContainer.css({width:u,height:p}),this._min=this.ranges[0].startValue,this._max=this.ranges[this.ranges.length-1].endValue,this._interval=this._max-this._min,this._valueToPixelsHorizontal=this._chartContainer.width()/this._interval,this._valueToPixelsVertical=this._chartContainer.height()/this._interval,this._checkValues(),this._appendRanges(),this._appendPointerAndTarget(),this._appendTitleAndDescription(),"none"!=this.ticks.position&&this._appendTicksAndLabels(),1==this.disabled&&this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled")),1==this.showTooltip){if(void 0==this.host.jqxTooltip)throw new Error("jqxBulletChart: Missing reference to the following module: 'jqxtooltip.js'.");this._initializeTooltip(),this.host.data().jqxWidget=this}this._updateValue(this.pointer.value,0,!0)},refresh:function(t){t||this.render()},val:function(t){if(0==arguments.length||null!=t&&"object"==typeof t)return this.pointer.value;t>this._max?t=this._max:t<this._min&&(t=this._min),t!=this.pointer.value&&(this._updateValue(t,this.pointer.value),this.pointer.value=t,1==this.showTooltip&&this._updateTooltip())},destroy:function(){t.jqx.utilities.resize(this.host,null,!0),this._removeHandlers(),1==this.showTooltip&&this.host.jqxTooltip("destroy"),this.host.remove()},propertyChangedHandler:function(i,e,o,s){if(o!=s||s instanceof Object){var r=!0,a=function(){t.each(o,function(t,o){void 0==s[t]&&(i[e][t]=o)})};switch(e){case"barSize":break;case"ranges":t.each(o,function(o,r){t.each(r,function(t,r){void 0!==s[o]&&void 0==s[o][t]&&(i[e][o][t]=r)})}),this._setDefaultValues();break;case"pointer":return a(),void this._updatePointer(s,o);case"target":return a(),void this._updateTarget(s,o);case"ticks":r=!1,a(),t.each(o,function(t,s){o[t]!=i[e][t]&&(r=!0)});break;case"showTooltip":if(1==s){if(void 0==this.host.jqxTooltip)throw new Error("jqxBulletChart: Missing reference to the following module: 'jqxtooltip.js'.");this._initializeTooltip()}else this._removeHandlers(),this.host.jqxTooltip("destroy");break;case"animationDuration":return;case"tooltipFormatFunction":return void this._updateTooltip();case"disabled":return void(1==s?this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled")):this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled")))}1==r&&this.render()}},_raiseEvent:function(i,e){var o=this.events[i],s=new t.Event(o);s.owner=this,s.args=e;try{var r=this.host.trigger(s)}catch(t){}return r},_removeHandlers:function(){var i=t("#"+this.element.id+"Pointer, #"+this.element.id+"Target");this.removeHandler(i,"mouseenter.bulletchart"+this.element.id),this.removeHandler(i,"mouseleave.bulletchart"+this.element.id)},_setDefaultValues:function(){for(var t=this.ranges,i=this.ranges.length,e=0;e<i;e++){if(void 0==t[e].startValue||void 0==t[e].endValue)throw new Error("jqxBulletChart: Each range must have its startValue and endValue set.");void 0==t[e].color&&(this.ranges[e].color="#000000"),void 0==t[e].opacity&&(this.ranges[e].opacity=1-1/i*e)}var o=this.pointer;void 0==o.value&&(this.pointer.value=65),void 0==o.label&&(this.pointer.label="Value"),void 0==o.size&&(this.pointer.size="25%"),void 0==o.color&&(this.pointer.color="");var s=this.target;void 0==s.value&&(this.target.value=85),void 0==s.label&&(this.target.label="Target"),void 0==s.size&&(this.target.size=5),void 0==s.color&&(this.target.color="");var r=this.ticks;void 0==r.position&&(this.ticks.position="near"),void 0==r.interval&&(this.ticks.interval=20),void 0==r.size&&(this.ticks.size=10)},_checkValues:function(){this.pointer.value>this._max?this.pointer.value=this._max:this.pointer.value<this._min&&(this.pointer.value=this._min),this.target.value>this._max?this.target.value=this._max:this.target.value<this._min&&(this.target.value=this._min)},_appendRanges:function(){for(var t="",i=this.ranges.length,e=0;e<i;e++){var o,s=this.ranges[e];if("horizontal"==this.orientation){var r=this.rtl?"right":"left",a=(s.startValue-this._min)*this._valueToPixelsHorizontal,h=(s.endValue-s.startValue)*this._valueToPixelsHorizontal;o="<div class='"+this.toThemeProperty("jqx-bulletchart-range")+" "+this.toThemeProperty("jqx-bulletchart-range-horizontal")+"' style='"+r+": "+a+"px; width: "+h+"px; background-color: "+s.color+"; opacity: "+s.opacity+"'></div>"}else if("vertical"==this.orientation){var l=(s.startValue-this._min)*this._valueToPixelsVertical,n=(s.endValue-s.startValue)*this._valueToPixelsVertical;o="<div class='"+this.toThemeProperty("jqx-bulletchart-range")+" "+this.toThemeProperty("jqx-bulletchart-range-vertical")+"' style='bottom: "+l+"px; height: "+n+"px; background-color: "+s.color+"; opacity: "+s.opacity+"'></div>"}t+=o}this._chartContainer.append(t)},_appendPointerAndTarget:function(){var t="",i=this.element.id+"Pointer",e=this.element.id+"Target",o=this.pointer.size,s=this.target.value,r=this.target.size,a=s>0?0:parseInt(r),h=this.pointer.color.length>0?"":this.toThemeProperty("jqx-fill-state-pressed"),l=this.target.color.length>0?"":this.toThemeProperty("jqx-fill-state-pressed");if("horizontal"==this.orientation){var n=this._normaliseValue(o),c=this._checkPercentage(o,this._chartContainer),d=this.rtl?"right":"left",p=(s-this._min)*this._valueToPixelsHorizontal-a,u=p+parseInt(r)-this._chartContainer.width();p<0?p=0:u>0&&(p-=u);var v=this._normaliseValue(r);t+="<div class='"+l+" "+this.toThemeProperty("jqx-bulletchart-target")+" "+this.toThemeProperty("jqx-bulletchart-target-horizontal")+"' id='"+e+"' style='"+d+": "+p+"px; width: "+v+"; background-color: "+this.target.color+"'></div>",t+="<div class='"+h+" "+this.toThemeProperty("jqx-bulletchart-pointer")+"' id='"+i+"' style='top: "+c+"; height: "+n+"; background-color: "+this.pointer.color+"'></div>"}else if("vertical"==this.orientation){this._chartContainer.width();var m=this._normaliseValue(o),x=this._checkPercentage(o,this._chartContainer),g=(s-this._min)*this._valueToPixelsVertical-a,u=g+parseInt(r)-this._chartContainer.height();g<0?g=0:u>0&&(g-=u);var _=this._normaliseValue(r);t+="<div class='"+l+" "+this.toThemeProperty("jqx-bulletchart-target")+" "+this.toThemeProperty("jqx-bulletchart-target-vertical")+"' id='"+e+"' style='bottom: "+g+"px; height: "+_+"; background-color: "+this.target.color+"'></div>",t+="<div class='"+h+" "+this.toThemeProperty("jqx-bulletchart-pointer")+"' id='"+i+"' style='left: "+x+"; width: "+m+"; background-color: "+this.pointer.color+"'></div>"}this._chartContainer.append(t)},_updatePointer:function(i,e){var o=t("#"+this.element.id+"Pointer");if(i.value>this._max?this.pointer.value=this._max:i.value<this._min&&(this.pointer.value=this._min),i.value!=e.value&&(this._updateValue(i.value,e.value),1==this.showTooltip&&this._updateTooltip()),i.label!=e.label&&1==this.showTooltip&&this._updateTooltip(),i.size!=e.size){var s=i.size;if("horizontal"==this.orientation){var r=this._checkPercentage(s,this._chartContainer),a=this._normaliseValue(s);o.css({top:r,height:a})}else if("vertical"==this.orientation){var h=this._checkPercentage(s,this._chartContainer),l=this._normaliseValue(s);o.css({left:h,width:l})}}i.color!=e.color&&(""==i.color?(o.css("background-color",""),o.addClass(this.toThemeProperty("jqx-fill-state-pressed"))):(o.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),o.css("background-color",i.color)))},_updateTarget:function(i,e){var o=t("#"+this.element.id+"Target");if(i.value>this._max?this.target.value=this._max:i.value<this._min&&(this.target.value=this._min),i.value!=e.value||i.size!=e.size){var s=i.value,r=parseInt(i.size),a=s>0?0:r;if("horizontal"==this.orientation){this.rtl;var h=(s-this._min)*this._valueToPixelsHorizontal-a,l=h+r-this._chartContainer.width();h<0?h=0:l>0&&(h-=l),0==this.rtl?o.css("left",h):o.css("right",h),o.width(r)}else if("vertical"==this.orientation){var n=(s-this._min)*this._valueToPixelsVertical-a,l=n+r-this._chartContainer.height();n<0?n=0:l>0&&(n-=l),o.css({bottom:n,height:r})}1==this.showTooltip&&this._updateTooltip()}i.label!=e.label&&1==this.showTooltip&&this._updateTooltip(),i.color!=e.color&&(""==i.color?(o.css("background-color",""),o.addClass(this.toThemeProperty("jqx-fill-state-pressed"))):(o.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),o.css("background-color",i.color)))},_appendTitleAndDescription:function(){var i;i="horizontal"==this.orientation?1==this.rtl?this.toThemeProperty("jqx-bulletchart-title-description-rtl"):this.toThemeProperty("jqx-bulletchart-title-description-ltr"):this.toThemeProperty("jqx-bulletchart-title-description-vertical");var e=this.rtl?"rtl":"ltr",o="<div id='"+this.element.id+"Title' class='"+this.toThemeProperty("jqx-bulletchart-title")+" "+i+"' style='direction: "+e+";'>"+this.title+"</div><div id='"+this.element.id+"Description' class='"+this.toThemeProperty("jqx-bulletchart-description")+" "+i+"' style='direction: "+e+";'>"+this.description+"</div>",s=t("<div style='position: absolute; visibility: hidden;'>"+o+"</div>");this._titleContainer.append(s);var r=s.children(),a=t(r[0]).height()+t(r[1]).height();s.remove();var h;h="horizontal"==this.orientation?0==this.rtl?this.toThemeProperty("jqx-bulletchart-title-inner-container")+" "+this.toThemeProperty("jqx-bulletchart-title-inner-container-ltr"):this.toThemeProperty("jqx-bulletchart-title-inner-container")+" "+this.toThemeProperty("jqx-bulletchart-title-inner-container-rtl"):"",this._titleContainer.append("<div class='"+h+"' style='height: "+a+"px;'>"+o+"</div>")},_appendTicksAndLabels:function(){var i=t("<div style='position: absolute; visibility: hidden;'></div>");this._chartContainer.append(i);var e="",o=this._min<0,s=this.ticks.size;if("horizontal"==this.orientation){var r=this._titleContainer.width(),a=this._chartContainer.offset().top-this.host.offset().top;if("both"==this.ticks.position||"far"==this.ticks.position)var h=this._chartContainer.height()+a;for(u=0;u<=this._interval;u+=this.ticks.interval){var l=u*this._valueToPixelsHorizontal+r;u+this.ticks.interval>this._interval&&(l-=1),o&&(m=u+this._min==0)&&(e+="<div class='"+this.toThemeProperty("jqx-bulletchart-ticks")+" "+this.toThemeProperty("jqx-bulletchart-ticks-horizontal")+" "+this.toThemeProperty("jqx-bulletchart-zero-tick")+"' style='top: "+a+"px; "+c+": "+l+"px; height: "+this._chartContainer.height()+"px;'></div>",o=!1);x=this._labelValue(u);i.html(x);var n=l-i.width()/2,c=this.rtl?"right":"left";"both"!=this.ticks.position&&"far"!=this.ticks.position||(e+="<div class='"+this.toThemeProperty("jqx-bulletchart-ticks")+" "+this.toThemeProperty("jqx-bulletchart-ticks-horizontal")+"' style='top: "+h+"px; "+c+": "+l+"px; height: "+s+"px;'></div>",e+="<div class='"+this.toThemeProperty("jqx-bulletchart-labels")+"' style='top: "+(h+s+2)+"px; "+c+": "+n+"px;'>"+x+"</div>"),"both"!=this.ticks.position&&"near"!=this.ticks.position||(e+="<div class='"+this.toThemeProperty("jqx-bulletchart-ticks")+" "+this.toThemeProperty("jqx-bulletchart-ticks-horizontal")+"' style='top: "+(a-s)+"px; "+c+": "+l+"px; height: "+s+"px;'></div>",e+="<div class='"+this.toThemeProperty("jqx-bulletchart-labels")+"' style='top: "+(a-(s+i.height()+2))+"px; "+c+": "+n+"px;'>"+x+"</div>")}}else if("vertical"==this.orientation){var d=this._chartContainer.offset().left-this.host.offset().left;if("both"==this.ticks.position||"far"==this.ticks.position)var p=this._chartContainer.width();for(var u=0;u<=this._interval;u+=this.ticks.interval){var v=u*this._valueToPixelsVertical;if(u+this.ticks.interval>this._interval&&(v-=1),o){var m=u+this._min==0;m&&(e+="<div class='"+this.toThemeProperty("jqx-bulletchart-ticks")+" "+this.toThemeProperty("jqx-bulletchart-ticks-vertical")+" "+this.toThemeProperty("jqx-bulletchart-zero-tick")+"' style='left: "+d+"px; bottom: "+v+"px; width: "+p+"px;'></div>",o=!1)}if("both"==this.ticks.position||"near"==this.ticks.position){e+="<div class='"+this.toThemeProperty("jqx-bulletchart-ticks")+" "+this.toThemeProperty("jqx-bulletchart-ticks-vertical")+"' style='left: "+(d-s)+"px; bottom: "+v+"px; width: "+s+"px;'></div>";x=this._labelValue(u,"near");i.html(x);n=i.height()/2-1;e+="<div class='"+this.toThemeProperty("jqx-bulletchart-labels")+"' style='left: "+(d-(s+i.width()+2))+"px; bottom: "+(v-n)+"px;'>"+x+"</div>"}if("both"==this.ticks.position||"far"==this.ticks.position){e+="<div class='"+this.toThemeProperty("jqx-bulletchart-ticks")+" "+this.toThemeProperty("jqx-bulletchart-ticks-vertical")+"' style='left: "+(p+d)+"px; bottom: "+v+"px; width: "+s+"px;'></div>";var x=this._labelValue(u,"far");i.html(x);n=i.height()/2-1;e+="<div class='"+this.toThemeProperty("jqx-bulletchart-labels")+"' style='left: "+(p+d+s+2)+"px; bottom: "+(v-n)+"px;'>"+x+"</div>"}}}this.host.append(e),i.remove()},_labelValue:function(i,e){var o=i+this._min;return this.labelsFormatFunction?this.labelsFormatFunction(o,e):t.jqx.dataFormat.formatnumber(o,this.labelsFormat)},_initializeTooltip:function(){var i=this,e=this._tooltipContent();this.host.jqxTooltip({theme:this.theme,position:"mouse",content:e,trigger:"none",autoHide:!1,rtl:this.rtl}),this.host.jqxTooltip("getInstance").val=t.proxy(this.val,this);var o=t("#"+this.element.id+"Pointer, #"+this.element.id+"Target");this.addHandler(o,"mouseenter.bulletchart"+this.element.id,function(e){0==i.disabled&&(i.host.jqxTooltip("open",e.pageX,e.pageY),(e.target.id==i.element.id+"Pointer"&&""==i.pointer.color||e.target.id==i.element.id+"Target"&&""==i.target.color)&&(t(e.target).removeClass(i.toThemeProperty("jqx-fill-state-pressed")),t(e.target).addClass(i.toThemeProperty("jqx-fill-state-hover"))))}),this.addHandler(o,"mouseleave.bulletchart"+this.element.id,function(e){0==i.disabled&&(i.host.jqxTooltip("close"),(e.target.id==i.element.id+"Pointer"&&""==i.pointer.color||e.target.id==i.element.id+"Target"&&""==i.target.color)&&(t(e.target).removeClass(i.toThemeProperty("jqx-fill-state-hover")),t(e.target).addClass(i.toThemeProperty("jqx-fill-state-pressed"))))})},_updateTooltip:function(){this.host.jqxTooltip({content:this._tooltipContent()})},_tooltipContent:function(){var i;if(this.tooltipFormatFunction)i=this.tooltipFormatFunction(this.pointer.value,this.target.value);else{var e=t.jqx.dataFormat.formatnumber(this.pointer.value,this.labelsFormat),o=t.jqx.dataFormat.formatnumber(this.target.value,this.labelsFormat);i="<div>"+this.pointer.label+": "+e+"</div><div>"+this.target.label+": "+o+"</div>"}return i},_updateValue:function(i,e,o){var s,r,a,h=this,l=t("#"+this.element.id+"Pointer"),n=function(t,o,n){if(h._min>=0)"vertical"==t?l.css("bottom",0):1==h.rtl&&"horizontal"==t&&l.css("right",0),s=(i-h._min)*o;else{if(i>=0){"horizontal"==t?1==h.rtl?(r="right",a="left"):r="left":"vertical"==t&&(r="bottom",a="top");c=-h._min*o}else{"horizontal"==t?1==h.rtl?r="left":(r="right",a="left"):"vertical"==t&&(r="top");var c=n+h._min*o}l.css(r,c),a&&l.css(a,""),i*e<0&&("horizontal"==t?l.width(0):"vertical"==t&&l.height(0)),s=Math.abs(i*o)}return s},c=function(){o||h._raiseEvent("0")};if("horizontal"==this.orientation){var d=n("horizontal",this._valueToPixelsHorizontal,this._chartContainer.width());setTimeout(function(){l.animate({width:d},h.animationDuration,c)},0)}else if("vertical"==this.orientation){var p=n("vertical",this._valueToPixelsVertical,this._chartContainer.height());setTimeout(function(){l.animate({height:p},h.animationDuration,c)},0)}},_checkPercentage:function(t,i){var e=-1;t.indexOf&&(e=t.indexOf("%"));if(-1==e){var o;return"horizontal"==this.orientation?o=i.height():"vertical"==this.orientation&&(o=i.width()),(o-function(i){return t.indexOf&&-1!=t.indexOf("px")?parseFloat(i.slice(0,t.indexOf("px"))):i}(t))/2+"px"}return(100-function(t){return parseFloat(t.slice(0,e))}(t))/2+"%"},_normaliseValue:function(t){return!t.indexOf||-1==t.indexOf("px")&&-1==t.indexOf("%")?t+"px":t}})}(jqxBaseFramework);

