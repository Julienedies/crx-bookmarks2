(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{166:function(t,e,n){"use strict";var r=n(15),a=n(122),o=n(89);
/*!
 * 
 * Created by j on 2019-01-07.
 */
r.a.use(a.a),e.a=new a.a({routes:o.a,scrollBehavior:function(t,e,n){return{x:0,y:0}}})},168:function(t,e,n){"use strict";var r=n(89),a=n(13);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={name:"searchBar",data:function(){return{query:""}},mounted:function(){console.log(this,this.$route.params.query),this.query=this.$route.params.query},methods:{search:function(){var t=this.query;t&&this.$router.push({name:"search",params:{query:t}})}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}({},Object(a.c)({}))},c=(n(382),n(2)),s=Object(c.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field has-addons",staticStyle:{flex:"1"}},[n("div",{staticClass:"control",staticStyle:{width:"100%"}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:t.query},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.search()},input:function(e){e.target.composing||(t.query=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("div",{staticClass:"control"},[n("a",{staticClass:"button is-info search-btn",on:{click:function(e){t.search()}}},[n("i",{staticClass:"fa fa-search"})])])])},[],!1,null,"9ea83e22",null);s.options.__file="searchBar.vue";var u={name:"navBar",components:{searchBar:s.exports},data:function(){return{routes:r.a}}},l=(n(383),Object(c.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"search-box"},[n("search-bar")],1),t._v(" "),n("div",{staticClass:"nav-items"},t._l(t.routes,function(e){return"search"!=e.name?n("router-link",{key:e.path,staticClass:"nav-item hvr-underline-from-center",attrs:{to:e._path||e.path}},[n("span",[t._v(" "+t._s(e.name))])]):t._e()}),1)])},[],!1,null,"45a6f805",null));l.options.__file="navBar.vue";var f=l.exports,v=n(4),h=n(39),d={name:"tree",props:{tree:Array,selectable:{type:Boolean,default:!1}},methods:{edit:function(t){Object(h.b)(t)},createSubFolder:function(t){Object(h.a)(t)},remove:function(t){confirm("确认删除, 不可撤销!")&&v.a.remove(t)},toggle:function(t){this.$set(t,"extend",!t.extend)},onContextmenu:function(t,e){t.preventDefault(),this.$set(e,"contextmenu",t)},select:function(){}}},m=(n(384),Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.tree,function(e){return n("li",{key:e.id,attrs:{node:e}},[n("div",{staticClass:"node-item",class:{extend:!e.extend,selected:e.contextmenu},on:{contextmenu:function(n){t.onContextmenu(n,e)}}},[e.children&&e.children.length?n("button",{staticClass:"arrow",on:{click:function(n){t.toggle(e)}}},[t._v(" ▼")]):n("button",{staticClass:"arrow"}),t._v(" "),t.selectable?n("a",{on:{click:function(n){t.select(e)}}},[t._v(t._s(e.title||"根目录"))]):n("router-link",{attrs:{to:"/node/"+e.id}},[t._v(t._s(e.title||"根目录"))]),t._v(" "),n("contextmenu",{model:{value:e.contextmenu,callback:function(n){t.$set(e,"contextmenu",n)},expression:"node.contextmenu"}},[t._t("default",[n("div",{staticClass:"contextmenu"},[n("div",[n("button",{attrs:{title:"新建子文件夹"},on:{click:function(n){t.createSubFolder(e)}}},[n("i",{staticClass:"fas fa-folder-plus"}),t._v("新建子文件夹\n                            ")])]),t._v(" "),n("div",[n("button",{attrs:{title:"编辑"},on:{click:function(n){t.edit(e)}}},[n("i",{staticClass:"fas fa-edit"}),t._v("编辑")])]),t._v(" "),n("div",[n("button",{on:{click:function(n){t.remove(e)}}},[n("i",{staticClass:"far fa-trash-alt"}),t._v(" 删除")])])])])],2)],1),t._v(" "),e.children?n("tree",{attrs:{tree:e.children}}):t._e()],1)}),0)},[],!1,null,"1d7eed3c",null));function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}m.options.__file="tree.vue";var y={name:"asideBar",components:{tree:m.exports},data:function(){return{tree:[]}},created:function(){this.getData()},methods:{getData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return!0,t.next=3,v.a.getTree(!0);case 3:this.tree=t.sent;case 4:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function i(t){b(o,r,a,i,c,"next",t)}function c(t){b(o,r,a,i,c,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},watch:{"$root.event":function(t){var e=t.name,n=p(t.args,2),r=n[0],a=n[1];this.tree;if(!a.url){if("onRemoved"===e){return function t(e){for(var n=e.length;n--;){var a=e[n];a.id===r?e.splice(n,1):a.children&&t(a.children)}}(this.tree)}this.getData()}}}},_=(n(385),Object(c.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",[e("tree",{attrs:{tree:this.tree}})],1)},[],!1,null,"6f5e08cf",null));_.options.__file="asideBar.vue";var k={name:"App",components:{AsideBar:_.exports,navBar:f},methods:{onResize:function(t){var e=this.$refs.aside.$el,n=e.offsetWidth;n+=t.moveX,console.log(e,n,t),e.style.width="".concat(n,"px")}}},g=(n(386),Object(c.a)(k,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav-bar"),this._v(" "),e("div",{attrs:{id:"view"}},[e("div",{attrs:{id:"main"}},[e("aside-bar",{ref:"aside"}),this._v(" "),e("drag-resize-bar",{on:{resize:this.onResize}}),this._v(" "),e("div",{ref:"content",attrs:{id:"content"}},[e("router-view")],1)],1)])],1)},[],!1,null,"9714f906",null));g.options.__file="App.vue";e.a=g.exports},170:function(t,e,n){t.exports=n(171)},171:function(t,e,n){"use strict";n.r(e),function(t){n(124),n(162),n(163),n(371),n(164),n(372);var e=n(15),r=n(166),a=n(95),o=n(55),i=n(93),c=n(4),s=n(168);
/*!
 * Created by j on 2018-12-24.
 */
e.a.use(o.a),Object(i.a)(e.a),console.log(t.env),window.v=new e.a({el:"#app",router:r.a,store:a.a,data:{event:{name:"",args:""}},mounted:function(){var t=this;c.a.on(function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console.log("bookmarks event => ",e,r),t.event={name:e,args:r}})},render:function(t){return t(s.a)}})}.call(this,n(123))},371:function(t,e,n){},372:function(t,e,n){},382:function(t,e,n){"use strict";var r=n(83);n.n(r).a},383:function(t,e,n){"use strict";var r=n(84);n.n(r).a},384:function(t,e,n){"use strict";var r=n(85);n.n(r).a},385:function(t,e,n){"use strict";var r=n(86);n.n(r).a},386:function(t,e,n){"use strict";var r=n(87);n.n(r).a},83:function(t,e,n){},84:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){},87:function(t,e,n){},89:function(t,e,n){"use strict";n(146),n(68);var r={name:"home",components:{shortcut:n(91).a}},a=n(2),o=Object(a.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("list-tool-bar"),this._v(" "),e("shortcut")],1)},[],!1,null,"23259d94",null);o.options.__file="home.vue";var i=o.exports,c=n(90),s=n(37),u=n(38),l=n(4),f=n(12),v=n(13);function h(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=Object(f.b)("trash"),p={name:"trash",components:{toolBar:s.a,list:u.a},data:function(){return{bookmarkArray:[]}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}({},Object(v.c)({reverse:function(t){return t.ui.list.reverse}})),created:function(){var t=this;this.getData();var e=function(e){console.log("db event listener",e),t.bookmarkArray.unshift(e[0])};m.on("add",e),this.$once("hook:beforeDestroy",function(){m.off("add",e)})},methods:{getData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get().then(function(t){return Object.values(t)});case 2:this.bookmarkArray=t.sent,this.reverse&&this.bookmarkArray.reverse();case 4:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function i(t){h(o,r,a,i,c,"next",t)}function c(t){h(o,r,a,i,c,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}(),recover:function(t){l.a.recover(t),m.remove(t),this._remove(t)},remove:function(t){m.remove(t),this._remove(t)},clear:function(){confirm("确认清空回收站, 该操作不可撤销!")&&(m.clear(),this.bookmarkArray=[])},_remove:function(t){var e=this.bookmarkArray.findIndex(function(e){return e===t});this.bookmarkArray.splice(e,1)}},watch:{reverse:function(t){this.bookmarkArray.reverse()}}},b=Object(a.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tool-bar",[n("button",{staticClass:"flex-middle active",attrs:{title:"清空回收站"},on:{click:t.clear}},[n("i",{staticClass:"far fa-trash-alt"})])]),t._v(" "),n("list",{attrs:{bookmarkArray:t.bookmarkArray},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.bookmark;return[n("button",{attrs:{title:"恢复"},on:{click:function(e){t.recover(r)}}},[n("i",{staticClass:"fa fa-undo"})]),t._v(" "),n("button",{on:{click:function(e){t.remove(r)}}},[n("i",{staticClass:"far fa-trash-alt"})])]}}])})],1)},[],!1,null,"7d3fdd2d",null);b.options.__file="trash.vue";var y=b.exports;
/*!
 * Created by j on 2019-01-02.
 */e.a=[{name:"首页",path:"/home",component:i},{name:"常用",path:"/hot",component:function(){return n.e(0).then(n.bind(null,169))}},{name:"最近",path:"/recent",component:c.a},{name:"目录",path:"/node/:id",_path:"/node/38",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,395))}},{name:"回收站",path:"/trash",component:y},{name:"设置",path:"/setting",component:function(){return n.e(8).then(n.bind(null,396))}},{name:"search",path:"/search/:query",component:function(){return n.e(7).then(n.bind(null,397))}},{path:"*",redirect:{path:"/recent"}}]}},[[170,1,2,0]]]);
//# sourceMappingURL=app.js.map