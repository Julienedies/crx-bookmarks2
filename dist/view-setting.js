(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{883:function(t,n,e){},885:function(t,n,e){"use strict";var r=e(883);e.n(r).a},889:function(t,n,e){"use strict";e.r(n);var r=e(6),a=e(22);function o(t,n,e,r,a,o,s){try{var i=t[o](s),c=i.value}catch(t){return void e(t)}i.done?n(c):Promise.resolve(c).then(r,a)}function s(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var s=t.apply(n,e);function i(t){o(s,r,a,i,c,"next",t)}function c(t){o(s,r,a,i,c,"throw",t)}i(void 0)})}}var i=Object(a.b)("visit"),c=Object(a.b)("shortcut"),u={name:"setting",data:function(){return{msg:""}},methods:{clean:function(){var t=s(regeneratorRuntime.mark(function t(){var n,e,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=function(){return(a=s(regeneratorRuntime.mark(function t(e,a){var o,s,i,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get();case 2:o=t.sent,s=Object.keys(o),i=0;case 5:if(!(i<s.length)){t.next=14;break}return c=s[i],t.next=9,r.a.get(c);case 9:t.sent||(console.log(c,o[c]),e.remove(c),n.msg+=" ".concat(c,"; "));case 11:i++,t.next=5;break;case 14:case"end":return t.stop()}},t,this)}))).apply(this,arguments)},e=function(t,n){return a.apply(this,arguments)},(n=this).msg="已清理无效ID:",[i,c].forEach(e);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),download:function(){var t=this,n=a.a.getAll(),e=JSON.stringify(n),o=window.URL.createObjectURL(new Blob([e],{type:"text/plain;charset=utf-8"}));r.b.download({filename:"bookmarks2-bak.json",url:o}).then(function(n){console.log(n),t.msg="备份已下载!"})},upload:function(){var t=this,n=this.$refs.file.files[0];if(n){console.log(n);var e=new FileReader;e.onload=function(n){var e=this.result;e=JSON.parse(e),console.log(e),a.a.init(e),t.msg="恢复成功!"},e.readAsText(n)}}}},l=(e(885),e(5)),f=Object(l.a)(u,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("button",{staticClass:"button",on:{click:t.download}},[t._v("备份配置")]),t._v(" "),e("label",{staticClass:"button",attrs:{for:"upload"},on:{click:t.upload}},[t._v("恢复配置")]),t._v(" "),e("button",{staticClass:"button",on:{click:t.clean}},[t._v("数据清洗")]),t._v(" "),e("input",{ref:"file",staticStyle:{position:"absolute",left:"-3000px"},attrs:{type:"file",id:"upload",name:"upload"},on:{change:t.upload}}),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.msg?e("div",{staticClass:"box"},[t._v(" "+t._s(t.msg))]):t._e()])],1)},[],!1,null,"d67ff634",null);n.default=f.exports}}]);
//# sourceMappingURL=view-setting.js.map