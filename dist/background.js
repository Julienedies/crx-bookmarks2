(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{390:function(n,e,t){n.exports=t(391)},391:function(n,e,t){"use strict";t.r(e);var o=t(4),r=t(12);function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}
/*!
 * 
 * Created by j on 2019-01-11.
 */var u=Object(r.b)("trash"),i=Object(r.b)("visit"),a=Object(r.b)("shortcut");o.a.on("onRemoved",function(n,e,t){var o=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){c(n,e,t[e])})}return n}({index:e.index,parentId:e.parentId},e.node);console.log("保存到回收站",o),u.set(o),i.remove(n),a.remove(n)});o.c.on(function(){}),o.c.on("onUpdated",function(n,e,t,r){console.log(t.status),"complete"===t.status&&function(n){n.url&&o.a.search(n.url).then(function(e){e.forEach(function(e){e.url===n.url&&(console.log("添加新访问记录 => ",e),i.get(e.id).then(function(n){(n=n||{id:e.id,count:0}).count+=1,i.set(n)}))})})}(t)})}},[[390,1,2,0]]]);
//# sourceMappingURL=background.js.map