crx-bookmarks2
===============

chrome扩展, 书签管理器, 基于vue.js开发.
除了原生书签管理器的功能以外, 添加了标签, 分级, 常用, 最近, 回收站, 统计等功能.

#### 在线插件地址
[应用商店](https://chrome.google.com/webstore/detail/bookmarks2/fohgfmagajagjhlmbabhngimanembiia)

#### 开发模式使用
直接下载项目, 然后通过 chrome开发模式; 加载已解压的扩展程序; 导入项目文件夹即可.

#### 构建
```shell
git clone https://github.com/julieneides/crx-bookmarks2.git
cd crx-bookmarks2
// 安装依赖
npm i
// build for develoment
npm run dev
// or
// build for porduction
npm run pro
```

####  其它
开发模式下，如果遇到 can't find vueex 的问题, 把.build/webpack/config.js 中的 vueex: path.resolve(context, './vendor/vueex/') 注释掉.
vueex是我同时开发的一个vue组件库.

