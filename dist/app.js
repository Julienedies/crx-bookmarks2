(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,e,n){},168:function(t,e,n){},169:function(t,e,n){},170:function(t,e,n){},356:function(t,e,n){"use strict";var r=n(176),a={name:"navBar",components:{searchBar:n(181).a},data:function(){return{routes:r.a}}},i=(n(573),n(5)),o=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"search-box"},[n("search-bar")],1),t._v(" "),n("div",{staticClass:"nav-items"},t._l(t.routes,function(e){return e.title&&"search"!=e.name?n("router-link",{key:e.path,staticClass:"nav-item hvr-underline-from-center",attrs:{to:e._path||e.path}},[n("span",[t._v(" "+t._s(e.title))])]):t._e()}),1)])},[],!1,null,"e9e277c2",null).exports,s=n(6),c=n(70),u={name:"tree",props:{tree:Array,selectable:{type:Boolean,default:!1}},methods:{edit:function(t){Object(c.b)(t)},createSubFolder:function(t){Object(c.a)(t)},remove:function(t){confirm("确认删除, 不可撤销!")&&s.a.remove(t)},toggle:function(t){this.$set(t,"extend",!t.extend)},onContextmenu:function(t,e){t.preventDefault(),this.$set(e,"contextmenu",t)},select:function(){}}};n(574);function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}var v={name:"asideBar",components:{tree:Object(i.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.tree,function(e){return n("li",{key:e.id,attrs:{node:e}},[n("div",{staticClass:"node-item",class:{extend:!e.extend,selected:e.contextmenu},on:{contextmenu:function(n){return t.onContextmenu(n,e)}}},[e.children&&e.children.length?n("button",{staticClass:"arrow",on:{click:function(n){return t.toggle(e)}}},[t._v(" ▼")]):n("button",{staticClass:"arrow"}),t._v(" "),t.selectable?n("a",{on:{click:function(n){return t.select(e)}}},[t._v(t._s(e.title||"根目录"))]):n("router-link",{attrs:{to:"/node/"+e.id}},[t._v(t._s(e.title||"根目录"))]),t._v(" "),n("contextmenu",{model:{value:e.contextmenu,callback:function(n){t.$set(e,"contextmenu",n)},expression:"node.contextmenu"}},[t._t("default",[n("div",{staticClass:"contextmenu"},[n("div",[n("button",{attrs:{title:"新建子文件夹"},on:{click:function(n){return t.createSubFolder(e)}}},[n("i",{staticClass:"fas fa-folder-plus"}),t._v("新建子文件夹\n                            ")])]),t._v(" "),n("div",[n("button",{attrs:{title:"编辑"},on:{click:function(n){return t.edit(e)}}},[n("i",{staticClass:"fas fa-edit"}),t._v("编辑")])]),t._v(" "),n("div",[n("button",{on:{click:function(n){return t.remove(e)}}},[n("i",{staticClass:"far fa-trash-alt"}),t._v(" 删除")])])])])],2)],1),t._v(" "),e.children?n("tree",{attrs:{tree:e.children}}):t._e()],1)}),0)},[],!1,null,"db428b64",null).exports},data:function(){return{tree:[]}},created:function(){this.getData()},methods:{getData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return!0,t.next=3,s.a.getTree(!0);case 3:this.tree=t.sent;case 4:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function o(t){f(i,r,a,o,s,"next",t)}function s(t){f(i,r,a,o,s,"throw",t)}o(void 0)})});return function(){return e.apply(this,arguments)}}()},watch:{"$root.event":function(t){var e=t.name,n=l(t.args,2),r=n[0],a=n[1];this.tree;if(!a.url){if("onRemoved"===e){return function t(e){for(var n=e.length;n--;){var a=e[n];a.id===r?e.splice(n,1):a.children&&t(a.children)}}(this.tree)}this.getData()}}}},d=(n(575),{name:"App",components:{AsideBar:Object(i.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",[e("tree",{attrs:{tree:this.tree}})],1)},[],!1,null,"6f5e08cf",null).exports,navBar:o},methods:{onResize:function(t){var e=this.$refs.aside.$el,n=e.offsetWidth;n+=t.moveX,console.log(e,n,t),e.style.width="".concat(n,"px")}}}),h=(n(576),Object(i.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav-bar"),this._v(" "),e("div",{attrs:{id:"view"}},[e("div",{attrs:{id:"main"}},[e("aside-bar",{ref:"aside"}),this._v(" "),e("drag-resize-bar",{on:{resize:this.onResize}}),this._v(" "),e("div",{ref:"content",attrs:{id:"content"}},[e("router-view")],1)],1)])],1)},[],!1,null,"6db2229e",null));e.a=h.exports},359:function(t,e,n){t.exports=n(360)},360:function(t,e,n){"use strict";n.r(e),function(t){n(235),n(273),n(274),n(275),n(276),n(561);var e=n(29),r=n(174),a=n(182),i=n(103),o=n(178),s=n(6),c=n(356);
/*!
 * Created by j on 2018-12-24.
 */
e.a.use(i.a),Object(o.a)(e.a),console.log(t.env),window.v=new e.a({el:"#app",router:r.a,store:a.a,data:{event:{name:"",args:""}},mounted:function(){var t=this;s.a.on(function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console.log("bookmarks event => ",e,r),t.event={name:e,args:r}})},render:function(t){return t(c.a)}})}.call(this,n(234))},561:function(t,e,n){},573:function(t,e,n){"use strict";var r=n(167);n.n(r).a},574:function(t,e,n){"use strict";var r=n(168);n.n(r).a},575:function(t,e,n){"use strict";var r=n(169);n.n(r).a},576:function(t,e,n){"use strict";var r=n(170);n.n(r).a}},[[359,2,1,0]]]);
//# sourceMappingURL=app.js.map