/*
jQWidgets v5.0.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){"use strict";t.jqx.jqxWidget("jqxMaskedInput","",{}),t.extend(t.jqx._jqxMaskedInput.prototype,{defineInstance:function(){var e={value:null,mask:"99999",width:null,height:25,textAlign:"left",readOnly:!1,cookies:!1,promptChar:"_",rtl:!1,disabled:!1,events:["valueChanged","textchanged","mousedown","mouseup","keydown","keyup","keypress","change"],aria:{"aria-valuenow":{name:"value",type:"string"},"aria-disabled":{name:"disabled",type:"boolean"}}};return this===t.jqx._jqxMaskedInput.prototype?e:(t.extend(!0,this,e),e)},createInstance:function(){this.render()},render:function(){var e=this;e.element.setAttribute("role","textbox"),e.element.setAttribute("data-role","input");var s=e.element.getAttribute("value");void 0!==s&&""!==s&&null!==s&&(e.value=s),t.jqx.aria(this),t.jqx.aria(this,"aria-multiline",!1),t.jqx.aria(this,"aria-readonly",e.readOnly),e._helpers=[],e._helpers.element=new jqxHelper(e.element),e._helpers.element.addClass(e.toThemeProperty("jqx-input jqx-rc-all jqx-widget jqx-widget-content"));var i=e.element.getAttribute("name");if("div"===e.element.nodeName.toLowerCase()){e.element.innerHTML="";var a=document.createElement("input");a.setAttribute("type","textarea"),a.setAttribute("autocomplete","off"),a.setAttribute("autocorrect","off"),a.setAttribute("autocapitalize","off"),a.setAttribute("spellcheck",!1),a.setAttribute("name",i),e.element.appendChild(a),e.maskbox=t(a),e.disabled&&(e._helpers.element.addClass(e.toThemeProperty("jqx-input-disabled jqx-fill-state-disabled")),a.setAttribute("disabled",!0))}else e.maskbox=e.host,e.element.setAttribute("autocomplete","off"),e.element.setAttribute("autocorrect","off"),e.element.setAttribute("autocapitalize","off"),e.element.setAttribute("spellcheck",!1),e.element.setAttribute("name",i),e.disabled&&(e._helpers.element.addClass(e.toThemeProperty("jqx-input-disabled jqx-fill-state-disabled")),e.element.setAttribute("disabled",!0));if(e._helpers.maskbox=new jqxHelper(e.maskbox[0]),e._helpers.maskbox.addClass(e.toThemeProperty("jqx-reset jqx-input-content jqx-widget-content")),e.rtl&&e._helpers.maskbox.addClass(e.toThemeProperty("jqx-rtl")),e.propertyChangeMap.disabled=function(t,s,i,a){a?t._helpers.maskbox.addClass(e.toThemeProperty("jqx-input-disabled")):t._helpers.maskbox.removeClass(e.toThemeProperty("jqx-input-disabled"))},e.selectedText="",e.self=this,e.oldValue=e._value(),e.items=[],e._initializeLiterals(),e._render(),null!=e.value&&e.inputValue(e.value.toString()),e.host.parents("form").length>0&&e.host.parents("form").on("reset",function(){setTimeout(function(){e.clearValue()},10)}),e.addHandlers(),e.cookies){var r=t.jqx.cookie.cookie("maskedInput."+e.element.id);r&&e.val(r)}},addHandlers:function(){var e=this,s="";this.addHandler(this.maskbox,"blur",function(){e.rtl&&e.maskbox.css("direction","ltr"),e._helpers.maskbox.removeClass(e.toThemeProperty("jqx-fill-state-focus")),e.maskbox.val()!==s&&(e._raiseEvent(7,{type:"keyboard"}),e.cookies&&t.jqx.cookie.cookie("maskedInput."+e.element.id,e.maskbox.val()))}),this.addHandler(this.maskbox,"focus",function(){s=e.maskbox[0].value,e.rtl&&(e.maskbox[0].style.direction="rtl"),e._helpers.element.addClass(e.toThemeProperty("jqx-fill-state-focus"))}),this.addHandler(this.host,"keydown",function(t){var s=e.readOnly,i=t.charCode?t.charCode:t.keyCode?t.keyCode:0;if(s||e.disabled)return!1;var a=e._handleKeyDown(t,i);return a||(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()),a}),this.addHandler(this.host,"keyup",function(t){return!(!e.readOnly&&!e.disabled)||(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1)}),this.addHandler(this.host,"keypress",function(t){var s=e.readOnly,i=t.charCode?t.charCode:t.keyCode?t.keyCode:0;if(s||e.disabled)return!0;var a=e._handleKeyPress(t,i);return a||(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()),a})},focus:function(){try{var t=this;t.maskbox.focus(),setTimeout(function(){t.maskbox.focus()})}catch(t){}},_getString:function(){for(var t="",e=0;e<this.items.length;e++){var s=this.items[e].character;this.items[e].character===this.promptChar&&this.promptChar!==this.items[e].defaultCharacter?t+=this.items[e].defaultCharacter:t+=s}return t},_initializeLiterals:function(){if(void 0!==this.mask&&null!==this.mask){var t=this,e=function(e,s,i){var a={};return a.character=e,a.regex=s,a.canEdit=i,a.defaultCharacter=t.promptChar,a};this.mask=this.mask.toString();for(var s=this.mask.length,i=0;i<s;i++){var a=this.mask.substring(i,i+1),r="",n=!1;if("["===a){for(var h=i;h<s&&"]"!==this.mask.substring(h,h+1);h++);r="("+this.mask.substring(i,h+1)+")",i=h,n=!0}"#"===a?(r="(\\d|[+]|[-])",n=!0):"9"===a||"0"===a?(r="\\d",n=!0):"$"===a?n=!1:"/"===a||":"===a?n=!1:"A"===a||"a"===a?(r="\\w",n=!0):"c"===a||"C"===a?(r=".",n=!0):"L"!==a&&"l"!==a||(r="([a-zA-Z])",n=!0);var l={};l=n?e(this.promptChar,r,n):e(a,r,n),this.items.push(l)}}else this.items=[]},setRegex:function(t,e,s,i){null!==t&&void 0!==t&&null!==e&&void 0!==e&&t<this.items.length&&(this.items[t].regex=e,null!==s&&void 0!==s&&(this.items[t].canEdit=s),null!==i&&void 0!==i&&(this.items[t].defaultCharacter=i))},_match:function(t,e){return new RegExp(e,"i").test(t)},_raiseEvent:function(e,s){var i=this.events[e],a={};a.owner=this;var r=!0,n=new t.Event(i);return n.owner=this,a.value=this.inputValue(),a.text=this.maskedValue(),7===e&&(a.type=s.type,void 0===a.type&&(a.type=null)),n.args=a,(e<2||e>6)&&(r=this.host.trigger(n)),r},_handleKeyPress:function(t,e){return this._isSpecialKey(e,t)},_insertKey:function(t,e){var s,i=this._selection(),a=this;if(i.start>=0&&i.start<this.items.length){var r=String.fromCharCode(t);t>=65&&t<=90&&(e.shiftKey||(r=r.toLowerCase()));for(var n=!1,h=0;h<this.items.length;h++)if(!(h<i.start)){var l=a.items[h];if(l.canEdit){if(a._match(r,l.regex)){if(!n&&i.length>0){for(var o=i.start;o<i.end;o++)a.items[o].canEdit&&(a.items[o].character=a.promptChar);s=a._getString(),a.maskedValue(s),n=!0}l.character=r,s=a._getString(),a.maskedValue(s),i.start<a.items.length&&a._setSelectionStart(h+1);break}break}}}},_deleteSelectedText:function(){var t=this._selection(),e=!1;if(t.start>0||t.length>0){for(var s=t.start;s<t.end;s++)s<this.items.length&&this.items[s].canEdit&&this.items[s].character!==this.promptChar&&(this.items[s].character=this.promptChar,e=!0);var i=this._getString();return this.maskedValue(i),e}},_saveSelectedText:function(){var e=this._selection(),s="";if(e.start>0||e.length>0)for(var i=e.start;i<e.end;i++)this.items[i].canEdit&&(s+=this.items[i].character);if(window.clipboardData)window.clipboardData.setData("Text",s);else{var a=t("<textarea style='position: absolute; left: -1000px; top: -1000px;'/>");a.val(s),t("body").append(a),a.select(),setTimeout(function(){document.designMode="off",a.select(),a.remove()},100)}return s},_pasteSelectedText:function(){var e=this._selection(),s="",i=0,a=e.start,r="",n=this,h=function(t){if(!(t!==n.selectedText&&t.length>0&&(n.selectedText=t,null===n.selectedText||void 0===n.selectedText))){if(e.start>=0||e.length>0)for(var r=e.start;r<n.items.length;r++)n.items[r].canEdit&&i<n.selectedText.length&&(n.items[r].character=n.selectedText[i],i++,a=1+r);s=n._getString(),n.maskedValue(s),a<n.items.length?n._setSelectionStart(a):n._setSelectionStart(n.items.length)}};if(window.clipboardData)r=window.clipboardData.getData("Text"),h(r);else{var l=t("<textarea style='position: absolute; left: -1000px; top: -1000px;'/>");t("body").append(l),l.select(),setTimeout(function(){var t=l.val();h(t),l.remove()},100)}},_handleKeyDown:function(e,s){var i,a=this._selection();s>=96&&s<=105&&(s-=48);var r=e.ctrlKey||e.metaKey;if(r&&97===s||r&&65===s)return!0;if(r&&120===s||r&&88===s)return this.selectedText=this._saveSelectedText(e),this._deleteSelectedText(e),!t.jqx.browser.msie;if(r&&99===s||r&&67===s)return this.selectedText=this._saveSelectedText(e),!t.jqx.browser.msie;if(r&&122===s||r&&90===s)return!1;if(r&&118===s||r&&86===s||e.shiftKey&&45===s)return this._pasteSelectedText(),!t.jqx.browser.msie;if(8===s){if(0===a.length)for(i=this.items.length-1;i>=0;i--)if(this.items[i].canEdit&&i<a.end&&this.items[i].character!==this.promptChar){this._setSelection(i,i+1);break}a=this._selection();var n=this._deleteSelectedText();return(a.start>0||a.length>0)&&a.start<=this.items.length&&(n?this._setSelectionStart(a.start):this._setSelectionStart(a.start-1)),!1}if(190===s)for(i=a.start;i<this.items.length;i++)if("."===this.items[i].character){this._setSelectionStart(i+1);break}if(191===s)for(i=a.start;i<this.items.length;i++)if("/"===this.items[i].character){this._setSelectionStart(i+1);break}if(189===s)for(i=a.start;i<this.items.length;i++)if("-"===this.items[i].character){this._setSelectionStart(i+1);break}if(46===s){if(0===a.length)for(i=0;i<this.items.length;i++)if(this.items[i].canEdit&&i>=a.start&&this.items[i].character!==this.promptChar){this._setSelection(i,i+1);break}var h=a;return((a=this._selection()).start>=0||a.length>=0)&&a.start<this.items.length&&(a.length<=1?h.end!==a.end?this._setSelectionStart(a.end):this._setSelectionStart(a.end+1):this._setSelectionStart(a.start)),!1}return this._insertKey(s,e),this._isSpecialKey(s,e)},_isSpecialKey:function(t,e){return 189===t||9===t||13===t||35===t||36===t||37===t||39===t||46===t||!!(16===t&&e.shiftKey||e.ctrlKey||e.metaKey)},_selection:function(){var t,e=this.maskbox[0];if("selectionStart"in this.maskbox[0])return t=e.selectionEnd-e.selectionStart,{start:e.selectionStart,end:e.selectionEnd,length:t,text:e.value};var s=document.selection.createRange();if(null==s)return{start:0,end:e.value.length,length:0};var i=this.maskbox[0].createTextRange(),a=i.duplicate();return i.moveToBookmark(s.getBookmark()),a.setEndPoint("EndToStart",i),t=s.text.length,{start:a.text.length,end:a.text.length+s.text.length,length:t,text:s.text}},_setSelection:function(t,e){if("selectionStart"in this.maskbox[0])this.maskbox[0].focus(),this.maskbox[0].setSelectionRange(t,e);else{var s=this.maskbox[0].createTextRange();s.collapse(!0),s.moveEnd("character",e),s.moveStart("character",t),s.select()}},_setSelectionStart:function(t){this._setSelection(t,t)},refresh:function(t){t||this._render()},resize:function(t,e){this.width=t,this.height=e,this.refresh()},_render:function(){var e=parseInt(this.host.css("border-left-width"),10),s=parseInt(this.host.css("border-left-width"),10),i=parseInt(this.host.css("border-left-width"),10),a=parseInt(this.host.css("border-left-width"),10),r=parseInt(this.host.css("height"),10)-i-a,n=parseInt(this.host.css("width"),10)-e-s;null!=this.width&&-1!==this.width.toString().indexOf("px")?n=this.width:void 0===this.width||isNaN(this.width)||(n=this.width),null!=this.height&&-1!==this.height.toString().indexOf("px")?r=this.height:void 0===this.height||isNaN(this.height)||(r=this.height),n=parseInt(n,10),r=parseInt(r,10),this.maskbox[0]!==this.element&&this.maskbox.css({"border-left-width":0,"border-right-width":0,"border-bottom-width":0,"border-top-width":0}),this.maskbox.css("text-align",this.textAlign);var h=this.maskbox.css("font-size");isNaN(r)||this.maskbox.css("height",parseInt(h,10)+4+"px"),isNaN(n)||this.maskbox.css("width",n-2);var l=parseInt(r,10)-2*parseInt(i,10)-2*parseInt(a,10)-parseInt(h,10);if(isNaN(l)&&(l=0),isNaN(r)||this.host.height(r),isNaN(n)||this.host.width(n),this.maskbox[0]!==this.element){var o=l/2;t.jqx.browser.msie&&t.jqx.browser.version<8&&(o=l/4),this.maskbox.css("padding-right","0px"),this.maskbox.css("padding-left","0px"),this.maskbox.css("padding-top",o),this.maskbox.css("padding-bottom",l/2)}this.maskbox[0].value=this._getString(),this.width&&(this.width.toString().indexOf("%")>=0&&(this.element.style.width=this.width),this.height.toString().indexOf("%")>=0&&(this.element.style.height=this.height))},destroy:function(){var e=this;t.jqx.utilities.resize(this.host,null,!0),e.host.remove(),e._helpers=[]},maskedValue:function(t){return void 0===t?this._value():(this.value=t,this._refreshValue(),this.oldValue!==t&&(this._raiseEvent(1,t),this.oldValue=t,this._raiseEvent(0,t)),this)},propertyChangedHandler:function(e,s,i,a){if(void 0!==this.isInitialized&&!1!==this.isInitialized){if("rtl"===s&&(e.rtl?e._helpers.maskbox.addClass(e.toThemeProperty("jqx-rtl")):e._helpers.maskbox.removeClass(e.toThemeProperty("jqx-rtl"))),"value"===s&&(void 0!==a&&null!==a||(a=""),""===a?this.clear():(a=a.toString(),this.inputValue(a)),e._raiseEvent(7,a)),"theme"===s&&t.jqx.utilities.setTheme(i,a,this.host),"disabled"===s&&(a?(e._helpers.maskbox.addClass(e.toThemeProperty("jqx-input-disabled")),e._helpers.element.addClass(e.toThemeProperty("jqx-fill-state-disabled")),e._helpers.maskbox.attr("disabled",!0)):(e._helpers.maskbox.removeClass(this.toThemeProperty("jqx-input-disabled")),e._helpers.element.removeClass(this.toThemeProperty("jqx-fill-state-disabled")),e._helpers.maskbox.attr("disabled",!1)),t.jqx.aria(e,"aria-disabled",a)),"readOnly"===s&&(this.readOnly=a),"promptChar"===s){for(var r=0;r<e.items.length;r++)e.items[r].character===e.promptChar&&(e.items[r].character=a,e.items[r].defaultCharacter=a);e.promptChar=a}"textAlign"===s&&(e.maskbox.css("text-align",a),e.textAlign=a),"mask"===s&&(e.mask=a,e.items=[],e._initializeLiterals(),e.value=e._getString(),e._refreshValue()),"width"===s?(e.width=a,e._render()):"height"===s&&(e.height=a,e._render())}},_value:function(){return this.value},_getEditStringLength:function(){for(var t="",e=0;e<this.items.length;e++)this.items[e].canEdit&&(t+=this.items[e].character);return t.length},_getEditValue:function(){for(var t="",e=0;e<this.items.length;e++)this.items[e].canEdit&&this.items[e].character!==this.promptChar&&(t+=this.items[e].character);return t},parseValue:function(t){if(void 0===t||null===t)return null;for(var e=t.toString(),s="",i=0,a=0;a<e.length;a++)for(var r=e.substring(a,a+1),n=i;n<this.items.length;n++)if(this.items[n].canEdit&&this._match(r,this.items[n].regex)){s+=r,i=n;break}return s},clear:function(){this.clearValue()},clearValue:function(){this.inputValue("",!0)},val:function(t){return void 0!==t&&"object"!=typeof t&&("number"==typeof t&&isFinite(t)&&(t=t.toString()),this.maskedValue(t)),this.maskbox[0].value},inputValue:function(t,e){var s;if(void 0===t||null===t){var i="";for(s=0;s<this.items.length;s++)this.items[s].canEdit&&(i+=this.items[s].character);return i}var a=0;for(t=t.toString(),s=0;s<this.items.length;s++)this.items[s].canEdit&&(this._match(t.substring(a,a+1),this.items[s].regex)?(this.items[s].character=t.substring(a,a+1),a++):e&&(this.items[s].character=this.promptChar,a++));var r=this._getString();return this.maskedValue(r),this.inputValue()},_refreshValue:function(){for(var e=this.maskedValue(),s=0,i=0;i<this.items.length;i++)e.length>s&&(this.items[i].canEdit&&this.items[i].character!==e[s]&&(!this._match(e[s],this.items[i].regex)&&e[s]!==this.promptChar||1!==e[s].length||(this.items[i].character=e[s])),s++);this.value=this._getString(),e=this.value,this.maskbox[0].value=e,t.jqx.aria(this,"aria-valuenow",e)}})}(jqxBaseFramework);

