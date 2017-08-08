/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){e.jqx.jqxWidget("jqxDropDownList","",{}),e.extend(e.jqx._jqxDropDownList.prototype,{defineInstance:function(){var t={disabled:!1,width:null,height:null,items:new Array,selectedIndex:-1,source:null,scrollBarSize:15,arrowSize:19,enableHover:!0,enableSelection:!0,autoItemsHeight:!1,visualItems:new Array,groups:new Array,equalItemsWidth:!0,itemHeight:-1,visibleItems:new Array,emptyGroupText:"Group",checkboxes:!1,openDelay:250,closeDelay:300,dropDownContainer:"default",animationType:"default",autoOpen:!1,dropDownWidth:"auto",dropDownHeight:"200px",autoDropDownHeight:!1,keyboardSelection:!0,enableBrowserBoundsDetection:!1,dropDownHorizontalAlignment:"left",dropDownVerticalAlignment:"bottom",displayMember:"",valueMember:"",groupMember:"",searchMember:"",searchMode:"startswithignorecase",incrementalSearch:!0,incrementalSearchDelay:700,renderer:null,placeHolder:"Please Choose:",promptText:"Please Choose:",emptyString:"",rtl:!1,selectionRenderer:null,listBox:null,popupZIndex:9999999999999,renderMode:"default",touchMode:"auto",_checkForHiddenParent:!0,autoBind:!0,ready:null,focusable:!0,filterable:!1,filterHeight:27,filterPlaceHolder:"Looking for",filterDelay:100,template:"default",aria:{"aria-disabled":{name:"disabled",type:"boolean"}},events:["open","close","select","unselect","change","checkChange","bindingComplete","itemAdd","itemRemove","itemUpdate"]};return this===e.jqx._jqxDropDownList.prototype?t:(e.extend(!0,this,t),t)},createInstance:function(e){this.render()},render:function(){var t=this;t.width||(t.width=200),t.height||(t.height=25);var i=t.element.nodeName.toLowerCase();if("select"==i||"ul"==i||"ol"==i){t.field=t.element,t.field.className&&(t._className=t.field.className);var o={title:t.field.title};t.field.id.length?o.id=t.field.id.replace(/[^\w]/g,"_")+"_jqxDropDownList":o.id=e.jqx.utilities.createId()+"_jqxDropDownList";var s=e("<div></div>",o);t.width||(t.width=e(t.field).width()),t.height||(t.height=e(t.field).outerHeight()),s[0].style.cssText=t.field.style.cssText,e(t.field).hide().after(s);var n=t.host.data();if(t.host=s,t.host.data(n),t.element=s[0],t.element.id=t.field.id,t.field.id=o.id,t._className&&(t.host.addClass(t._className),e(t.field).removeClass(t._className)),t.field.tabIndex){var r=t.field.tabIndex;t.field.tabIndex=-1,t.element.tabIndex=r}l=e.jqx.parseSourceTag(t.field);t.source=l.items,-1==t.selectedIndex&&(t.selectedIndex=l.index)}else if(t.host.find("li").length>0||t.host.find("option").length>0){var l=e.jqx.parseSourceTag(t.element);t.source=l.items}t.element.innerHTML="",t.isanimating=!1,t.id=t.element.id||e.jqx.utilities.createId(),t.host.attr("role","combobox"),e.jqx.aria(t,"aria-autocomplete","both"),e.jqx.aria(t,"aria-readonly",!1);var d="<div style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; border: 0px; position: relative;'><div id='dropdownlistWrapper' style='overflow: hidden; outline: none; background-color: transparent; border: none; float: left; width:100%; height: 100%; position: relative;'><div id='dropdownlistContent' unselectable='on' style='outline: none; background-color: transparent; border: none; float: left; position: relative;'></div><div id='dropdownlistArrow' unselectable='on' style='background-color: transparent; border: none; float: right; position: relative;'><div unselectable='on'></div></div></div></div>";if(null==e.jqx._jqxListBox||void 0==e.jqx._jqxListBox)throw new Error("jqxDropDownList: Missing reference to jqxlistbox.js.");t.host.attr("tabindex")||t.host.attr("tabindex",0);t.touch=e.jqx.mobile.isTouchDevice(),t.comboStructure=d,t.element.innerHTML=d,t.dropdownlistWrapper=e(t.element.firstChild.firstChild),t.dropdownlistArrow=e(t.dropdownlistWrapper[0].firstChild.nextSibling),t.arrow=e(t.dropdownlistArrow[0].firstChild),t.dropdownlistContent=e(t.dropdownlistWrapper[0].firstChild),t.dropdownlistContent.addClass(t.toThemeProperty("jqx-dropdownlist-content jqx-disableselect")),t.rtl&&t.dropdownlistContent.addClass(t.toThemeProperty("jqx-rtl jqx-dropdownlist-content-rtl")),t.addHandler(t.dropdownlistWrapper,"selectstart",function(){return!1}),t.dropdownlistWrapper[0].id="dropdownlistWrapper"+t.element.id,t.dropdownlistArrow[0].id="dropdownlistArrow"+t.element.id,t.dropdownlistContent[0].id="dropdownlistContent"+t.element.id,t._addInput(),"Please Choose:"!=t.promptText&&(t.placeHolder=t.promptText);var a=t.toThemeProperty("jqx-widget")+" "+t.toThemeProperty("jqx-dropdownlist-state-normal")+" "+t.toThemeProperty("jqx-rc-all")+" "+t.toThemeProperty("jqx-fill-state-normal");t.element.className+=" "+a,t._firstDiv=e(t.element.firstChild);try{var h="listBox"+t.id,c=e(e.find("#"+h));c.length>0&&c.remove(),e.jqx.aria(t,"aria-owns",h),e.jqx.aria(t,"aria-haspopup",!0);var p=e("<div style='overflow: hidden; background-color: transparent; border: none; position: absolute;' id='listBox"+t.id+"'><div id='innerListBox"+t.id+"'></div></div>");p.hide(),"element"==t.dropDownContainer?p.appendTo(t.host):p.appendTo(document.body),t.container=p,t.listBoxContainer=e(e.find("#innerListBox"+t.id));var x=t.width;"auto"!=t.dropDownWidth&&(x=t.dropDownWidth),null==x&&0==(x=t.host.width())&&(x=t.dropDownWidth),null==t.dropDownHeight&&(t.dropDownHeight=200);t.container.width(parseInt(x)+25),t.container.height(parseInt(t.dropDownHeight)+25),t._ready=!1,t.addHandler(t.listBoxContainer,"bindingComplete",function(i){t.listBox||(t.listBox=e.data(t.listBoxContainer[0],"jqxListBox").instance),t.selectedIndex!=t.listBoxContainer.jqxListBox("selectedIndex")?(t.listBox=e.data(t.listBoxContainer[0],"jqxListBox").instance,t.listBoxContainer.jqxListBox({selectedIndex:t.selectedIndex}),t.renderSelection("mouse")):t.renderSelection("mouse"),t._ready||(t.ready&&t.ready(),t._ready=!0),t._raiseEvent("6")}),t.addHandler(t.listBoxContainer,"itemAdd",function(e){t._raiseEvent("7",e.args)}),t.addHandler(t.listBoxContainer,"itemRemove",function(e){t._raiseEvent("8",e.args)}),t.addHandler(t.listBoxContainer,"itemUpdate",function(e){t._raiseEvent("9",e.args)}),t.listBoxContainer.jqxListBox({filterHeight:t.filterHeight,filterPlaceHolder:t.filterPlaceHolder,filterDelay:t.filterDelay,autoItemsHeight:t.autoItemsHeight,filterable:t.filterable,allowDrop:!1,allowDrag:!1,autoBind:t.autoBind,_checkForHiddenParent:!1,focusable:t.focusable,touchMode:t.touchMode,checkboxes:t.checkboxes,rtl:t.rtl,_renderOnDemand:!0,emptyString:t.emptyString,itemHeight:t.itemHeight,width:x,searchMode:t.searchMode,incrementalSearch:t.incrementalSearch,incrementalSearchDelay:t.incrementalSearchDelay,groupMember:t.groupMember,searchMember:t.searchMember,displayMember:t.displayMember,valueMember:t.valueMember,height:t.dropDownHeight,autoHeight:t.autoDropDownHeight,scrollBarSize:t.scrollBarSize,selectedIndex:t.selectedIndex,source:t.source,theme:t.theme,rendered:function(){t.selectedIndex!=t.listBoxContainer.jqxListBox("selectedIndex")?(t.listBox=e.data(t.listBoxContainer[0],"jqxListBox").instance,t.listBoxContainer.jqxListBox({selectedIndex:t.selectedIndex}),t.renderSelection("mouse")):t.renderSelection("mouse")},renderer:t.renderer,filterChange:function(e){t.autoDropDownHeight&&t.container.height(t.listBoxContainer.height()+25)}}),"element"===t.dropDownContainer?t.listBoxContainer.css({position:"absolute",top:0,left:0}):t.listBoxContainer.css({position:"absolute",zIndex:t.popupZIndex,top:0,left:0}),t.template&&t.listBoxContainer.addClass(t.toThemeProperty("jqx-"+t.template+"-item")),t.listBox=e.data(t.listBoxContainer[0],"jqxListBox").instance,t.listBox.enableSelection=t.enableSelection,t.listBox.enableHover=t.enableHover,t.listBox.equalItemsWidth=t.equalItemsWidth,t.listBox.selectIndex(t.selectedIndex),t.listBox._arrange(),t.listBoxContainer.addClass(t.toThemeProperty("jqx-popup")),e.jqx.browser.msie&&t.listBoxContainer.addClass(t.toThemeProperty("jqx-noshadow")),t.addHandler(t.listBoxContainer,"unselect",function(e){t._raiseEvent("3",{index:e.args.index,type:e.args.type,item:e.args.item})}),t.addHandler(t.listBoxContainer,"change",function(e){e.args&&("keyboard"!=e.args.type?t._raiseEvent("4",{index:e.args.index,type:e.args.type,item:e.args.item}):"keyboard"==e.args.type&&(t.isOpened()||t._raiseEvent("4",{index:t.selectedIndex,type:"keyboard",item:t.getItem(t.selectedIndex)})))}),"none"==t.animationType?t.container.css("display","none"):t.container.hide()}catch(e){console&&console.log(e)}if((t=t).propertyChangeMap.disabled=function(i,o,s,n){n?(i.host.addClass(t.toThemeProperty("jqx-dropdownlist-state-disabled")),i.host.addClass(t.toThemeProperty("jqx-fill-state-disabled")),i.dropdownlistContent.addClass(t.toThemeProperty("jqx-dropdownlist-content-disabled"))):(i.host.removeClass(t.toThemeProperty("jqx-dropdownlist-state-disabled")),i.host.removeClass(t.toThemeProperty("jqx-fill-state-disabled")),i.dropdownlistContent.removeClass(t.toThemeProperty("jqx-dropdownlist-content-disabled"))),e.jqx.aria(i,"aria-disabled",i.disabled)},t.disabled&&(t.host.addClass(t.toThemeProperty("jqx-dropdownlist-state-disabled")),t.host.addClass(t.toThemeProperty("jqx-fill-state-disabled")),t.dropdownlistContent.addClass(t.toThemeProperty("jqx-dropdownlist-content-disabled"))),"top"==t.dropDownVerticalAlignment?t.arrow.addClass(t.toThemeProperty("jqx-icon-arrow-up")):t.arrow.addClass(t.toThemeProperty("jqx-icon-arrow-down")),t.arrow.addClass(t.toThemeProperty("jqx-icon")),"simple"===t.renderMode&&(t.arrow.remove(),t.host.removeClass(t.toThemeProperty("jqx-fill-state-normal")),t.host.removeClass(t.toThemeProperty("jqx-rc-all"))),t.template&&t.host.addClass(t.toThemeProperty("jqx-"+t.template)),t._updateHandlers(),t._setSize(),t._arrange(),t.listBox&&t.renderSelection(),e.jqx.browser.msie&&e.jqx.browser.version<8&&t.host.parents(".jqx-window").length>0){var u=t.host.parents(".jqx-window").css("z-index");p.css("z-index",u+10),t.listBoxContainer.css("z-index",u+10)}},resize:function(e,t){this.width=e,this.height=t,this._setSize(),this._arrange()},val:function(e){if(!this.dropdownlistContent)return"";if(this.input&&(function(t){for(var i in t)if(t.hasOwnProperty(i))return!1;return"number"!=typeof e&&"date"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e}(e)||0==arguments.length))return this.input.val();var t=this.getItemByValue(e);return null!=t&&this.selectItem(t),this.input?this.input.val():void 0},focus:function(){try{var e=this,t=function(){e.host&&(e.host.focus(),e._firstDiv&&e._firstDiv.focus())};t(),setTimeout(function(){t()},10)}catch(e){}},_addInput:function(){var t=this.host.attr("name");this.input=e("<input type='hidden'/>"),this.host.append(this.input),t&&this.input.attr("name",t)},getItems:function(){return this.listBox?this.listBox.items:new Array},getVisibleItems:function(){return this.listBox.getVisibleItems()},_setSize:function(){null!=this.width&&-1!=this.width.toString().indexOf("px")?this.host.width(this.width):void 0==this.width||isNaN(this.width)||this.host.width(this.width),null!=this.height&&-1!=this.height.toString().indexOf("px")?this.host.height(this.height):void 0==this.height||isNaN(this.height)||this.host.height(this.height);var t=!1;null!=this.width&&-1!=this.width.toString().indexOf("%")&&(t=!0,this.element.style.width=this.width),null!=this.height&&-1!=this.height.toString().indexOf("%")&&(t=!0,this.element.style.height=this.height);var i=this,o=function(){if(i._arrange(),"auto"==i.dropDownWidth){var e=i.host.width();i.listBoxContainer.jqxListBox({width:e}),i.container.width(parseInt(e)+25)}};if(t){var s=this.host.width();"auto"!=this.dropDownWidth&&(s=this.dropDownWidth),this.listBoxContainer.jqxListBox({width:s}),this.container.width(parseInt(s)+25)}e.jqx.utilities.resize(this.host,function(){o()},!1,this._checkForHiddenParent)},isOpened:function(){var t=this,i=e.data(document.body,"openedJQXListBox"+this.id);return null!=i&&i==t.listBoxContainer},_updateHandlers:function(){var t=this,i=!1;this.removeHandlers(),this.touch||(this.addHandler(this.host,"mouseenter",function(){!t.disabled&&t.enableHover&&"simple"!==t.renderMode&&(i=!0,t.host.addClass(t.toThemeProperty("jqx-dropdownlist-state-hover")),"top"==t.dropDownVerticalAlignment?t.arrow.addClass(t.toThemeProperty("jqx-icon-arrow-up-hover")):t.arrow.addClass(t.toThemeProperty("jqx-icon-arrow-down-hover")),t.host.addClass(t.toThemeProperty("jqx-fill-state-hover")))}),this.addHandler(this.host,"mouseleave",function(){!t.disabled&&t.enableHover&&"simple"!==t.renderMode&&(t.host.removeClass(t.toThemeProperty("jqx-dropdownlist-state-hover")),t.host.removeClass(t.toThemeProperty("jqx-fill-state-hover")),t.arrow.removeClass(t.toThemeProperty("jqx-icon-arrow-down-hover")),t.arrow.removeClass(t.toThemeProperty("jqx-icon-arrow-up-hover")),i=!1)})),this.host.parents()&&this.addHandler(this.host.parents(),"scroll.dropdownlist"+this.element.id,function(e){t.isOpened()&&t.close()});var o="mousedown";this.touch&&(o=e.jqx.mobile.getTouchEventName("touchstart")),this.addHandler(this.dropdownlistWrapper,o,function(e){if(!t.disabled){var i="block"==t.container.css("display");if(!t.isanimating){if(i)return t.hideListBox(),!1;t.showListBox(),t.focusable?t.focus():e.preventDefault&&e.preventDefault()}}}),t.autoOpen&&(this.addHandler(this.host,"mouseenter",function(){!t.isOpened()&&t.autoOpen&&(t.open(),t.host.focus())}),e(document).on("mousemove."+t.id,function(e){if(t.isOpened()&&t.autoOpen){var i=t.host.coord(),o=i.top,s=i.left,n=t.container.coord(),r=n.left,l=n.top;canClose=!0,e.pageY>=o&&e.pageY<=o+t.host.height()&&e.pageX>=s&&e.pageX<s+t.host.width()&&(canClose=!1),e.pageY>=l&&e.pageY<=l+t.container.height()&&e.pageX>=r&&e.pageX<r+t.container.width()&&(canClose=!1),canClose&&t.close()}})),this.touch?this.addHandler(e(document),e.jqx.mobile.getTouchEventName("touchstart")+"."+this.id,t.closeOpenedListBox,{me:this,listbox:this.listBox,id:this.id}):this.addHandler(e(document),"mousedown."+this.id,t.closeOpenedListBox,{me:this,listbox:this.listBox,id:this.id}),this.addHandler(this.host,"keydown",function(e){var i="block"==t.container.css("display");if("none"==t.host.css("display"))return!0;if(("13"==e.keyCode||"9"==e.keyCode)&&!t.isanimating)return i&&(t.renderSelection(),"13"==e.keyCode&&t.focusable&&t._firstDiv.focus(),t.hideListBox(),t.keyboardSelection||t._raiseEvent("2",{index:t.selectedIndex,type:"keyboard",item:t.getItem(t.selectedIndex)}),"13"==e.keyCode&&t._raiseEvent("4",{index:t.selectedIndex,type:"keyboard",item:t.getItem(t.selectedIndex)})),!i||"9"==e.keyCode;if(115==e.keyCode)return t.isanimating||(t.isOpened()?t.isOpened()&&t.hideListBox():t.showListBox()),!1;if(e.altKey&&"block"==t.host.css("display"))if(38==e.keyCode){if(t.isOpened())return t.hideListBox(),!0}else if(40==e.keyCode&&!t.isOpened())return t.showListBox(),!0;return"27"!=e.keyCode||t.ishiding?t.disabled?void 0:(t._kbnavigated=t.listBox._handleKeyDown(e),t._kbnavigated):(t.isOpened()&&(t.hideListBox(),void 0!=t.tempSelectedIndex&&t.selectIndex(t.tempSelectedIndex)),!0)}),this.addHandler(this.listBoxContainer,"checkChange",function(e){t.renderSelection(),t._updateInputSelection(),t._raiseEvent(5,{label:e.args.label,value:e.args.value,checked:e.args.checked,item:e.args.item})}),this.addHandler(this.listBoxContainer,"select",function(e){if(!t.disabled){if(!e.args)return;"keyboard"!=e.args.type||t.isOpened()||t.renderSelection(),("keyboard"!=e.args.type||t.keyboardSelection)&&(t.renderSelection(),t._raiseEvent("2",{index:e.args.index,type:e.args.type,item:e.args.item,originalEvent:e.args.originalEvent}),"mouse"==e.args.type&&(t.checkboxes||(t.hideListBox(),t._firstDiv&&t.focusable&&t._firstDiv.focus())))}}),this.listBox&&this.listBox.content&&this.addHandler(this.listBox.content,"click",function(e){if(!t.disabled){if(t.listBox.itemswrapper&&e.target===t.listBox.itemswrapper[0])return!0;t.renderSelection("mouse"),t.touch||t.ishiding||t.checkboxes||(t.hideListBox(),t._firstDiv&&t.focusable&&t._firstDiv.focus()),t.keyboardSelection||(!1===t._kbnavigated&&(t.tempSelectedIndex!=t.selectedIndex&&t._raiseEvent("4",{index:t.selectedIndex,type:"mouse",item:t.getItem(t.selectedIndex)}),t._kbnavigated=!0),void 0==t._oldSelectedInd&&(t._oldSelectedIndx=t.selectedIndex),t.selectedIndex!=t._oldSelectedIndx&&(t._raiseEvent("2",{index:t.selectedIndex,type:"keyboard",item:t.getItem(t.selectedIndex)}),t._oldSelectedIndx=t.selectedIndex))}}),this.addHandler(this.host,"focus",function(e){"simple"!==t.renderMode&&(t.host.addClass(t.toThemeProperty("jqx-dropdownlist-state-focus")),t.host.addClass(t.toThemeProperty("jqx-fill-state-focus")))}),this.addHandler(this.host,"blur",function(){"simple"!==t.renderMode&&(t.host.removeClass(t.toThemeProperty("jqx-dropdownlist-state-focus")),t.host.removeClass(t.toThemeProperty("jqx-fill-state-focus")))}),this.addHandler(this._firstDiv,"focus",function(e){"simple"!==t.renderMode&&(t.host.addClass(t.toThemeProperty("jqx-dropdownlist-state-focus")),t.host.addClass(t.toThemeProperty("jqx-fill-state-focus")))}),this.addHandler(this._firstDiv,"blur",function(){"simple"!==t.renderMode&&(t.host.removeClass(t.toThemeProperty("jqx-dropdownlist-state-focus")),t.host.removeClass(t.toThemeProperty("jqx-fill-state-focus")))})},removeHandlers:function(){var t=this,i="mousedown";this.touch&&(i=e.jqx.mobile.getTouchEventName("touchstart")),this.removeHandler(this.dropdownlistWrapper,i),this.listBox&&this.listBox.content&&this.removeHandler(this.listBox.content,"click"),this.removeHandler(this.host,"loadContent"),this.removeHandler(this.listBoxContainer,"checkChange"),this.removeHandler(this.host,"keydown"),this.removeHandler(this.host,"focus"),this.removeHandler(this.host,"blur"),this.removeHandler(this._firstDiv,"focus"),this.removeHandler(this._firstDiv,"blur"),this.removeHandler(this.host,"mouseenter"),this.removeHandler(this.host,"mouseleave"),this.removeHandler(e(document),"mousemove."+t.id)},getItem:function(e){return this.listBox.getItem(e)},getItemByValue:function(e){return this.listBox.getItemByValue(e)},selectItem:function(e){void 0!=this.listBox&&(this.listBox.selectItem(e),this.selectedIndex=this.listBox.selectedIndex,this.renderSelection("mouse"))},unselectItem:function(e){void 0!=this.listBox&&(this.listBox.unselectItem(e),this.renderSelection("mouse"))},checkItem:function(e){void 0!=this.listBox&&this.listBox.checkItem(e)},uncheckItem:function(e){void 0!=this.listBox&&this.listBox.uncheckItem(e)},indeterminateItem:function(e){void 0!=this.listBox&&this.listBox.indeterminateItem(e)},renderSelection:function(){if(null!=this.listBox){this.height&&-1!=this.height.toString().indexOf("%")&&this._arrange();var t=this.listBox.visibleItems[this.listBox.selectedIndex];if(this.filterable&&-1==this.listBox.selectedIndex)for(var i in this.listBox.selectedValues){var o=this.listBox.selectedValues[i],s=this.listBox.getItemByValue(o);s&&(t=s)}if(this.checkboxes){var n=this.getCheckedItems();t=null!=n&&n.length>0?n[0]:null}if(null==t){(a=e('<span unselectable="on" style="color: inherit; border: none; background-color: transparent;"></span>')).appendTo(e(document.body)),a.addClass(this.toThemeProperty("jqx-widget")),a.addClass(this.toThemeProperty("jqx-listitem-state-normal")),a.addClass(this.toThemeProperty("jqx-item")),e.jqx.utilities.html(a,this.placeHolder);var r=this.dropdownlistContent.css("padding-top"),l=this.dropdownlistContent.css("padding-bottom");a.css("padding-top",r),a.css("padding-bottom",l);var d=a.outerHeight();a.remove(),a.removeClass(),e.jqx.utilities.html(this.dropdownlistContent,a);f=this.host.height();return null!=this.height&&void 0!=this.height&&-1===this.height.toString().indexOf("%")&&(f=parseInt(this.height)),(w=parseInt((parseInt(f)-parseInt(d))/2))>0&&(this.dropdownlistContent.css("margin-top",w+"px"),this.dropdownlistContent.css("margin-bottom",w+"px")),this.selectionRenderer?(e.jqx.utilities.html(this.dropdownlistContent,this.selectionRenderer(a,-1,"","")),this.dropdownlistContent.css("margin-top","0px"),this.dropdownlistContent.css("margin-bottom","0px"),this._updateInputSelection()):this._updateInputSelection(),this.selectedIndex=this.listBox.selectedIndex,"auto"===this.width&&this._arrange(),void(this.focusable&&this.isOpened()&&this.focus())}this.selectedIndex=this.listBox.selectedIndex;var a=e(document.createElement("span"));a[0].setAttribute("unselectable","on");try{a[0].style.color="inherit"}catch(e){}a[0].style.borderWidth="0px",a[0].style.backgroundColor="transparent",a.appendTo(e(document.body)),a.addClass(this.toThemeProperty("jqx-widget jqx-listitem-state-normal jqx-item"));var h=!1;try{void 0!=t.html&&null!=t.html&&t.html.toString().length>0?e.jqx.utilities.html(a,t.html):void 0!=t.label&&null!=t.label&&t.label.toString().length>0?e.jqx.utilities.html(a,t.label):null===t.label||""===t.label?(h=!0,e.jqx.utilities.html(a,"")):void 0!=t.value&&null!=t.value&&t.value.toString().length>0?e.jqx.utilities.html(a,t.value):void 0!=t.title&&null!=t.title&&t.title.toString().length>0?e.jqx.utilities.html(a,t.title):""!=t.label&&null!=t.label||(h=!0,e.jqx.utilities.html(a,""))}catch(e){}var r=this.dropdownlistContent[0].style.paddingTop,l=this.dropdownlistContent[0].style.paddingBottom;""===r&&(r="0px"),""===l&&(l="0px"),a[0].style.paddingTop=r,a[0].style.paddingBottom=l,0===(d=a.outerHeight())&&(d=16),""!=t.label&&null!=t.label||!h||e.jqx.utilities.html(a,"");var c=this.width&&this.width.toString().indexOf("%")<=0;if(a.remove(),a.removeClass(),this.selectionRenderer)e.jqx.utilities.html(this.dropdownlistContent,this.selectionRenderer(a,t.index,t.label,t.value)),this.focusable&&this.isOpened()&&this.focus();else if(this.checkboxes){for(var p=this.getCheckedItems(),x="",u=0;u<p.length;u++)u==p.length-1?x+=p[u].label:x+=p[u].label+",";a.text(x),c&&a.css("max-width",this.host.width()-30),a.css("overflow","hidden"),a.css("display","block"),this.rtl||c&&a.css("width",this.host.width()-30),a.css("text-overflow","ellipsis"),a.css("padding-bottom",1+parseInt(l)),this.dropdownlistContent.html(a),this.focusable&&this.isOpened()&&this.focus()}else{var m=this.host.width()-this.arrowSize-3;this.width&&"auto"!==this.width&&(c&&(this.rtl||a.css("max-width",m+"px")),a[0].style.overflow="hidden",a[0].style.display="block",a[0].style.paddingTop=1+parseInt(l)+"px",this.rtl||c&&(m<0&&(m=0),a[0].style.width=m+"px"),a[0].style.textOverflow="ellipsis"),this.dropdownlistContent[0].innerHTML=a[0].innerHTML,this.focusable&&this.isOpened()&&this.focus()}var f=this.host.height();null!=this.height&&void 0!=this.height&&-1===this.height.toString().indexOf("%")&&(f=parseInt(this.height));var w=parseInt((parseInt(f)-parseInt(d))/2);w>=0&&(this.dropdownlistContent[0].style.marginTop=w+"px",this.dropdownlistContent[0].style.marginBottom=w+"px"),this.selectionRenderer&&(this.dropdownlistContent[0].style.marginTop="0px",this.dropdownlistContent[0].style.marginBottom="0px"),this.dropdownlistContent&&this.input&&this._updateInputSelection(),this.listBox&&this.listBox._activeElement&&e.jqx.aria(this,"aria-activedescendant",this.listBox._activeElement.id),"auto"===this.width&&this._arrange()}},_updateInputSelection:function(){if(this.input){var t=new Array;if(-1==this.selectedIndex)this.input.val("");else{var i=this.getSelectedItem();null!=i?(this.input.val(i.value),t.push(i.value)):this.input.val(this.dropdownlistContent.text())}if(this.checkboxes){var o=this.getCheckedItems(),s="";if(null!=o)for(var n=0;n<o.length;n++){var r=o[n].value;void 0!=r&&(n==o.length-1?s+=r:s+=r+",",t.push(r))}this.input.val(s)}}this.field&&this.input&&("select"==this.field.nodeName.toLowerCase()?e.each(this.field,function(i,o){e(this).removeAttr("selected"),this.selected=t.indexOf(this.value)>=0,this.selected&&e(this).attr("selected",!0)}):e.each(this.items,function(i,o){e(this.originalItem.originalItem).removeAttr("data-selected"),this.selected=t.indexOf(this.value)>=0,this.selected&&e(this.originalItem.originalItem).attr("data-selected",!0)}))},setContent:function(t){e.jqx.utilities.html(this.dropdownlistContent,t),this._updateInputSelection()},dataBind:function(){this.listBoxContainer.jqxListBox({source:this.source}),this.renderSelection("mouse"),null==this.source&&this.clearSelection()},clear:function(){this.listBoxContainer.jqxListBox({source:null}),this.clearSelection()},clearSelection:function(t){this.selectedIndex=-1,this._updateInputSelection(),this.listBox.clearSelection(),this.renderSelection(),this.selectionRenderer||e.jqx.utilities.html(this.dropdownlistContent,this.placeHolder)},unselectIndex:function(e,t){isNaN(e)||(this.listBox.unselectIndex(e,t),this.renderSelection())},selectIndex:function(e,t,i,o){this.listBox.selectIndex(e,t,i,o,"api")},getSelectedIndex:function(){return this.selectedIndex},getSelectedItem:function(){return this.listBox.getVisibleItem(this.selectedIndex)},getCheckedItems:function(){return this.listBox.getCheckedItems()},checkIndex:function(e){this.listBox.checkIndex(e)},uncheckIndex:function(e){this.listBox.uncheckIndex(e)},indeterminateIndex:function(e){this.listBox.indeterminateIndex(e)},checkAll:function(){this.listBox.checkAll(),this.renderSelection("mouse")},uncheckAll:function(){this.listBox.uncheckAll(),this.renderSelection("mouse")},addItem:function(e){return this.listBox.addItem(e)},insertAt:function(e,t){return null!=e&&this.listBox.insertAt(e,t)},removeAt:function(e){var t=this.listBox.removeAt(e);return this.renderSelection("mouse"),t},removeItem:function(e){var t=this.listBox.removeItem(e);return this.renderSelection("mouse"),t},updateItem:function(e,t){var i=this.listBox.updateItem(e,t);return this.renderSelection("mouse"),i},updateAt:function(e,t){var i=this.listBox.updateAt(e,t);return this.renderSelection("mouse"),i},ensureVisible:function(e){return this.listBox.ensureVisible(e)},disableAt:function(e){return this.listBox.disableAt(e)},enableAt:function(e){return this.listBox.enableAt(e)},disableItem:function(e){return this.listBox.disableItem(e)},enableItem:function(e){return this.listBox.enableItem(e)},_findPos:function(t){for(;t&&("hidden"==t.type||1!=t.nodeType||e.expr.filters.hidden(t));)t=t.nextSibling;var i=e(t).coord(!0);return[i.left,i.top]},testOffset:function(t,i,o){var s=t.outerWidth(),n=t.outerHeight(),r=e(window).width()+e(window).scrollLeft(),l=e(window).height()+e(window).scrollTop();if(i.left+s>r&&s>this.host.width()){var d=this.host.coord().left,a=s-this.host.width();i.left=d-a+2}return i.left<0&&(i.left=parseInt(this.host.coord().left)+"px"),i.top-=Math.min(i.top,i.top+n>l&&l>n?Math.abs(n+o+22):0),i},open:function(){this.showListBox()},close:function(){this.hideListBox()},_getBodyOffset:function(){var t=0,i=0;return"0px"!=e("body").css("border-top-width")&&(t=parseInt(e("body").css("border-top-width")),isNaN(t)&&(t=0)),"0px"!=e("body").css("border-left-width")&&(i=parseInt(e("body").css("border-left-width")),isNaN(i)&&(i=0)),{left:i,top:t}},showListBox:function(){if(e.jqx.aria(this,"aria-expanded",!0),this.listBox._renderOnDemand&&this.listBoxContainer.jqxListBox({_renderOnDemand:!1}),"auto"==this.dropDownWidth&&null!=this.width&&this.width.indexOf&&(-1!=this.width.indexOf("%")||-1!=this.width.indexOf("auto"))&&this.listBox.host.width()!=this.host.width()){var t=this.host.width();this.listBoxContainer.jqxListBox({width:t}),this.container.width(parseInt(t)+25)}var i,o=this,s=this.listBoxContainer,n=this.listBox,r=(e(window).scrollTop(),e(window).scrollLeft(),parseInt(this._findPos(this.host[0])[1])+parseInt(this.host.outerHeight())-1+"px"),l=parseInt(Math.round(this.host.coord(!0).left));i=l+"px","element"===this.dropDownContainer&&(r=parseInt(this.host.outerHeight())-1+"px",i=0);var d=e.jqx.mobile.isSafariMobileBrowser()||e.jqx.mobile.isWindowsPhone();if(null!=this.listBox){this.ishiding=!1,this.keyboardSelection||(this.listBox.selectIndex(this.selectedIndex),this.listBox.ensureVisible(this.selectedIndex)),this.tempSelectedIndex=this.selectedIndex,this.autoDropDownHeight&&this.container.height(this.listBoxContainer.height()+25),null!=d&&d&&(i=e.jqx.mobile.getLeftPos(this.element),r=e.jqx.mobile.getTopPos(this.element)+parseInt(this.host.outerHeight()),"0px"!=e("body").css("border-top-width")&&(r=parseInt(r)-this._getBodyOffset().top+"px"),"0px"!=e("body").css("border-left-width")&&(i=parseInt(i)-this._getBodyOffset().left+"px")),s.stop(),"simple"!==this.renderMode&&(this.host.addClass(this.toThemeProperty("jqx-dropdownlist-state-selected")),this.host.addClass(this.toThemeProperty("jqx-fill-state-pressed")),"top"==this.dropDownVerticalAlignment?this.arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up-selected")):this.arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down-selected"))),this.container.css("left",i),this.container.css("top",r),n._arrange();var a=!1;if("right"==this.dropDownHorizontalAlignment||this.rtl){var h=this.container.outerWidth(),c=Math.abs(h-this.host.width());h>this.host.width()?this.container.css("left",25+parseInt(Math.round(l))-c+"px"):this.container.css("left",25+parseInt(Math.round(l))+c+"px")}if("top"==this.dropDownVerticalAlignment){var p=s.height();a=!0,s.css("top",23),s.addClass(this.toThemeProperty("jqx-popup-up"));var x=parseInt(this.host.outerHeight()),u=parseInt(r)-Math.abs(p+x+23);this.container.css("top",u)}if(this.enableBrowserBoundsDetection){var m=this.testOffset(s,{left:parseInt(this.container.css("left")),top:parseInt(r)},parseInt(this.host.outerHeight()));parseInt(this.container.css("top"))!=m.top?(a=!0,s.css("top",23),s.addClass(this.toThemeProperty("jqx-popup-up"))):s.css("top",0),this.container.css("top",m.top),parseInt(this.container.css("left"))!=m.left&&this.container.css("left",m.left)}if("none"==this.animationType)this.container.css("display","block"),e.data(document.body,"openedJQXListBoxParent",o),e.data(document.body,"openedJQXListBox"+this.id,s),s.css("margin-top",0),s.css("opacity",1),n._renderItems(),o._raiseEvent("0",n);else if(this.container.css("display","block"),o.isanimating=!0,"fade"==this.animationType)s.css("margin-top",0),s.css("opacity",0),s.animate({opacity:1},this.openDelay,function(){e.data(document.body,"openedJQXListBoxParent",o),e.data(document.body,"openedJQXListBox"+o.id,s),o.ishiding=!1,o.isanimating=!1,n._renderItems(),o._raiseEvent("0",n)});else{s.css("opacity",1);var f=s.outerHeight();a?s.css("margin-top",f):s.css("margin-top",-f),s.animate({"margin-top":0},this.openDelay,function(){e.data(document.body,"openedJQXListBoxParent",o),e.data(document.body,"openedJQXListBox"+o.id,s),o.ishiding=!1,o.isanimating=!1,n._renderItems(),o._raiseEvent("0",n)})}a?(this.host.addClass(this.toThemeProperty("jqx-rc-t-expanded")),s.addClass(this.toThemeProperty("jqx-rc-b-expanded"))):(this.host.addClass(this.toThemeProperty("jqx-rc-b-expanded")),s.addClass(this.toThemeProperty("jqx-rc-t-expanded"))),"simple"!==this.renderMode&&(s.addClass(this.toThemeProperty("jqx-fill-state-focus")),this.host.addClass(this.toThemeProperty("jqx-dropdownlist-state-focus")),this.host.addClass(this.toThemeProperty("jqx-fill-state-focus")))}},hideListBox:function(){e.jqx.aria(this,"aria-expanded",!1);var t=this.listBoxContainer,i=this.listBox,o=this.container,s=this;if(e.data(document.body,"openedJQXListBox"+this.id,null),"none"==this.animationType)this.container.css("display","none");else if(!s.ishiding){t.stop();var n=t.outerHeight();t.css("margin-top",0),s.isanimating=!0;var r=-n;parseInt(this.container.coord().top)<parseInt(this.host.coord().top)&&(r=n),"fade"==this.animationType?(t.css({opacity:1}),t.animate({opacity:0},this.closeDelay,function(){o.css("display","none"),s.isanimating=!1,s.ishiding=!1})):t.animate({"margin-top":r},this.closeDelay,function(){o.css("display","none"),s.isanimating=!1,s.ishiding=!1})}this.ishiding=!0,this.host.removeClass(this.toThemeProperty("jqx-dropdownlist-state-selected")),this.host.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),this.arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down-selected")),this.arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-up-selected")),this.host.removeClass(this.toThemeProperty("jqx-rc-b-expanded")),t.removeClass(this.toThemeProperty("jqx-rc-t-expanded")),this.host.removeClass(this.toThemeProperty("jqx-rc-t-expanded")),t.removeClass(this.toThemeProperty("jqx-rc-b-expanded")),t.removeClass(this.toThemeProperty("jqx-fill-state-focus")),this.host.removeClass(this.toThemeProperty("jqx-dropdownlist-state-focus")),this.host.removeClass(this.toThemeProperty("jqx-fill-state-focus")),this._raiseEvent("1",i)},closeOpenedListBox:function(t){var i=t.data.me,o=e(t.target),s=t.data.listbox;if(null==s)return!0;if(e(t.target).ischildof(t.data.me.host))return!0;if(!i.isOpened())return!0;if(e(t.target).ischildof(i.listBoxContainer))return!0;var n=!1;return e.each(o.parents(),function(){if("undefined"!=this.className&&this.className.indexOf){if(-1!=this.className.indexOf("jqx-listbox"))return n=!0,!1;if(-1!=this.className.indexOf("jqx-dropdownlist"))return i.element.id==this.id&&(n=!0),!1}}),null!=s&&!n&&i.isOpened()&&i.hideListBox(),!0},clearFilter:function(){this.listBox.clearFilter()},loadFromSelect:function(e){this.listBox.loadFromSelect(e)},refresh:function(e){!0!==e&&(this._setSize(),this._arrange(),this.listBox&&this.renderSelection())},_arrange:function(){var e=this,t=parseInt(e.host.width()),i=parseInt(e.host.height()),o=(e.arrowSize,e.arrowSize),s=t-o-6;if(s>0&&"auto"!==e.width?e.dropdownlistContent[0].style.width=s+"px":s<=0&&(e.dropdownlistContent[0].style.width="0px"),"auto"===e.width&&(e.dropdownlistContent.css("width","auto"),t=e.dropdownlistContent.width()+o+6,e.host.width(t)),e.dropdownlistContent[0].style.height=i+"px",e.dropdownlistContent[0].style.left="0px",e.dropdownlistContent[0].style.top="0px",e.dropdownlistArrow[0].style.width=o+"px",e.width&&e.width.toString().indexOf("%")>=0){var n=100*o/t,r=100*s/t;e.dropdownlistArrow[0].style.width=n+"%",e.dropdownlistContent[0].style.width=r+"%"}e.dropdownlistArrow[0].style.height=i+"px",e.rtl&&(e.dropdownlistArrow.css("float","left"),e.dropdownlistContent.css("float","right"))},destroy:function(){e.jqx.utilities.resize(this.host,null,!0),this.removeHandler(this.listBoxContainer,"select"),this.removeHandler(this.listBoxContainer,"unselect"),this.removeHandler(this.listBoxContainer,"change"),this.removeHandler(this.dropdownlistWrapper,"selectstart"),this.removeHandler(this.dropdownlistWrapper,"mousedown"),this.removeHandler(this.host,"keydown"),this.removeHandler(this.listBoxContainer,"select"),this.removeHandler(this.listBox.content,"click"),this.removeHandler(this.listBoxContainer,"bindingComplete"),this.host.parents()&&this.removeHandler(this.host.parents(),"scroll.dropdownlist"+this.element.id),this.removeHandlers(),this.listBoxContainer.jqxListBox("destroy"),this.listBoxContainer.remove(),this.host.removeClass(),this.removeHandler(e(document),"mousedown."+this.id,this.closeOpenedListBox),this.touch&&this.removeHandler(e(document),e.jqx.mobile.getTouchEventName("touchstart")+"."+this.id),this.dropdownlistArrow.remove(),delete this.dropdownlistArrow,delete this.dropdownlistWrapper,delete this.listBoxContainer,delete this.input,delete this.arrow,delete this.dropdownlistContent,delete this.listBox,delete this._firstDiv,this.container.remove(),delete this.container;var t=e.data(this.element,"jqxDropDownList");t&&delete t.instance,this.host.removeData(),this.host.remove(),delete this.comboStructure,delete this.host,delete this.element},_raiseEvent:function(t,i){void 0==i&&(i={owner:null});var o=this.events[t];args=i,args.owner=this;var s=new e.Event(o);return s.owner=this,2!=t&&3!=t&&4!=t&&5!=t&&6!=t&&7!=t&&8!=t&&9!=t||(s.args=i),this.host.trigger(s)},propertiesChangedHandler:function(e,t,i){if(i.width&&i.height&&2==Object.keys(i).length){if(e._setSize(),"width"==t&&"auto"==e.dropDownWidth){var o=e.host.width();e.listBoxContainer.jqxListBox({width:o}),e.container.width(parseInt(o)+25)}e._arrange(),e.close()}},propertyChangedHandler:function(t,i,o,s){if(void 0!=t.isInitialized&&0!=t.isInitialized&&!(t.batchUpdate&&t.batchUpdate.width&&t.batchUpdate.height&&2==Object.keys(t.batchUpdate).length)){if("template"==i&&(t.listBoxContainer.removeClass(t.toThemeProperty("jqx-"+o+"-item")),t.listBoxContainer.addClass(t.toThemeProperty("jqx-"+t.template+"-item")),t.host.removeClass(t.toThemeProperty("jqx-"+o)),t.host.addClass(t.toThemeProperty("jqx-"+t.template))),"dropDownVerticalAlignment"==i&&(t.arrow.removeClass(t.toThemeProperty("jqx-icon-arrow-up")),t.arrow.removeClass(t.toThemeProperty("jqx-icon-arrow-down")),"top"==t.dropDownVerticalAlignment?t.arrow.addClass(t.toThemeProperty("jqx-icon-arrow-up")):t.arrow.addClass(t.toThemeProperty("jqx-icon-arrow-down")),t.listBoxContainer.css("top",0),t.listBoxContainer.removeClass(this.toThemeProperty("jqx-popup-up"))),"autoItemsHeight"==i&&t.listBoxContainer.jqxListBox({autoItemsHeight:s}),"filterable"==i&&t.listBoxContainer.jqxListBox({filterable:s}),"filterHeight"==i&&t.listBoxContainer.jqxListBox({filterHeight:s}),"filterPlaceHolder"==i&&t.listBoxContainer.jqxListBox({filterPlaceHolder:s}),"filterDelay"==i&&t.listBoxContainer.jqxListBox({filterDelay:s}),"enableSelection"==i&&t.listBoxContainer.jqxListBox({enableSelection:s}),"enableHover"==i&&t.listBoxContainer.jqxListBox({enableHover:s}),"autoOpen"==i&&t._updateHandlers(),"emptyString"==i&&(t.listBox.emptyString=t.emptyString),"itemHeight"==i&&t.listBoxContainer.jqxListBox({itemHeight:s}),"renderer"==i&&t.listBoxContainer.jqxListBox({renderer:s}),"rtl"==i&&(s?(t.dropdownlistArrow.css("float","left"),t.dropdownlistContent.css("float","right")):(t.dropdownlistArrow.css("float","right"),t.dropdownlistContent.css("float","left")),t.listBoxContainer.jqxListBox({rtl:t.rtl})),"source"==i&&(t.listBoxContainer.jqxListBox({source:t.source}),t.listBox.selectedIndex=-1,t.listBox.selectIndex(this.selectedIndex),t.renderSelection(),null==s&&t.clear()),"displayMember"!=i&&"valueMember"!=i||(t.listBoxContainer.jqxListBox({displayMember:t.displayMember,valueMember:t.valueMember}),t.renderSelection()),"placeHolder"==i&&t.renderSelection(),"theme"==i&&null!=s&&(t.listBoxContainer.jqxListBox({theme:s}),t.listBoxContainer.addClass(t.toThemeProperty("jqx-popup")),e.jqx.utilities.setTheme(o,s,t.host)),"autoDropDownHeight"==i&&(t.listBoxContainer.jqxListBox({autoHeight:t.autoDropDownHeight}),t.autoDropDownHeight?t.container.height(t.listBoxContainer.height()+25):(t.listBoxContainer.jqxListBox({height:t.dropDownHeight}),t.container.height(parseInt(t.dropDownHeight)+25)),t.listBox._arrange(),t.listBox._updatescrollbars()),"searchMode"==i&&t.listBoxContainer.jqxListBox({searchMode:t.searchMode}),"incrementalSearch"==i&&t.listBoxContainer.jqxListBox({incrementalSearch:t.incrementalSearch}),"incrementalSearchDelay"==i&&t.listBoxContainer.jqxListBox({incrementalSearchDelay:t.incrementalSearchDelay}),"dropDownHeight"==i&&(t.autoDropDownHeight||(t.listBoxContainer.jqxListBox({height:t.dropDownHeight}),t.container.height(parseInt(t.dropDownHeight)+25))),"dropDownWidth"==i||"scrollBarSize"==i){n=t.width;"auto"!=t.dropDownWidth&&(n=t.dropDownWidth),t.listBoxContainer.jqxListBox({width:n,scrollBarSize:t.scrollBarSize}),t.container.width(parseInt(n)+25)}if(("width"==i||"height"==i)&&s!=o){if(this.refresh(),"width"==i&&"auto"==t.dropDownWidth){var n=t.host.width();t.listBoxContainer.jqxListBox({width:n}),t.container.width(parseInt(n)+25)}t.close()}"checkboxes"==i&&t.listBoxContainer.jqxListBox({checkboxes:t.checkboxes}),"selectedIndex"==i&&null!=t.listBox&&(t.listBox.selectIndex(parseInt(s)),t.renderSelection())}}})}(jqxBaseFramework);

