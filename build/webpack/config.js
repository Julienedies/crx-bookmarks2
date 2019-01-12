/*!
 * webpack根据具体项目所做的配置
 * Created by j on 2018-12-31.
 */

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const isProd = process.env.NODE_ENV === 'production'

const dev = require('./dev')
const prod = require('./prod')

const config = isProd ? prod : dev

const publicPath = config.publicPath
const projectRoot = path.resolve(__dirname, '../../')
const outputPath = path.resolve(__dirname, '../../dist')
const context = path.resolve(__dirname, '../../src')

const devtool = config.devtool

const output = {
    path: outputPath,
    publicPath: publicPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
    sourceMapFilename: '[file].map'
}

const entry = {
    'app': ['./app/main.js'],
    'popup': ['./popup/main.js'],
    'background': ['./app/background.js']
}

const plugins = [
    new HtmlPlugin({
        template: 'app/index.html',
        filename: 'app.html',
        chunks: ['runtime', 'vendors', 'common', 'app']
    }),
    new HtmlPlugin({
        template: 'popup/index.html',
        filename: 'popup.html',
        chunks: ['runtime', 'vendors', 'common', 'popup']
    }),
    new HtmlPlugin({
        template: 'app/background.html',
        filename: 'background.html',
        chunks: ['runtime', 'vendors', 'common', 'background']
    }),

    new VueLoaderPlugin(),
    new ManifestPlugin(),
    new CleanPlugin(['dist'], {
        root: projectRoot
    })
]

const externals = {}

let devServer = {}
let cssLoader

if (isProd) {  // 产品环境

    plugins.push(new MiniCssExtractPlugin({
        filename: "css/[name]_[hash].css",
        chunkFilename: "[id].css"
    }))

    cssLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: publicPath
        }
    }

} else {

    // 添加热模块替换client端脚本
/*    for (let i in entry) {
        let arr = entry[i]
        arr = Array.isArray(arr) ? arr : [arr]
        arr.push('webpack-hot-middleware/client')
        entry[i] = arr
    }

    plugins.push(new webpack.HotModuleReplacementPlugin())*/

    cssLoader = {
        loader: 'style-loader',
        options: {}
    }

    devServer = {
        publicPath: publicPath,
        contentBase: outputPath,
        hot: true
    }

}


module.exports = {
    mode: config.mode,
    projectRoot,
    publicPath,
    context,
    devtool,
    cssLoader,
    devServer,
    entry,
    output,
    externals,
    plugins
}