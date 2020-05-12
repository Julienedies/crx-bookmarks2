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

const pkg = require('../../package.json')

const isPro = process.env.NODE_ENV === 'production'

const config = isPro ? require('./pro') : require('./dev')

const publicPath = config.publicPath
const projectRoot = path.resolve(__dirname, '../../')
const outputPath = path.resolve(__dirname, '../../dist')
const context = path.resolve(__dirname, '../../src')

const nodeSassIncludePaths = [path.resolve(__dirname, '../../../')]

const entry = {
    'app': ['./pages/app/main.js'],
    'popup': ['./pages/popup/main.js'],
    'background': ['./pages/app/background.js']
}

const output = {
    path: outputPath,
    publicPath: publicPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
    sourceMapFilename: '[file].map'
}

const plugins = [
    new webpack.DefinePlugin({
        'VERSION': `'V${ pkg.version }'`,
        'TIMESTAMP': JSON.stringify((new Date).toLocaleString())
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new VueLoaderPlugin(),
    new CleanPlugin(['dist'], {
        root: projectRoot
    }),

    new HtmlPlugin({
        template: 'pages/app/index.html',
        filename: 'app.html',
        chunks: ['runtime', 'vendors', 'common', 'app']
    }),
    new HtmlPlugin({
        template: 'pages/popup/index.html',
        filename: 'popup.html',
        chunks: ['runtime', 'vendors', 'common', 'popup']
    }),
    new HtmlPlugin({
        template: 'pages/app/background.html',
        filename: 'background.html',
        chunks: ['runtime', 'vendors', 'common', 'background']
    }),
]

let devServer = {}
let cssLoader

const devServerPort = 9083

if (isPro) {

    plugins.push(new MiniCssExtractPlugin({
        filename: "css/[name]_[hash].css",
        chunkFilename: "[name]_[id].css"
    }))

    cssLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: publicPath
        }
    }

} else {

    cssLoader = {
        loader: 'style-loader',
        options: {}
    }

    devServer = {
        publicPath: publicPath,
        contentBase: outputPath,
        port: devServerPort,
        writeToDisk: true,
        quiet: false,
        hot: true,
        disableHostCheck: true
    }

    // hmr
    Object.entries(entry).forEach(([k, v]) => {
        v = Array.isArray(v) ? v : [v]
        //v.push(`webpack-hot-middleware/client?noInfo=true&reload=true&path=http://localhost:${ devServerPort }/__webpack_hmr`)
        v.unshift(`webpack-dev-server/client?http://localhost:${ devServerPort }/`)
        entry[k] = v
    })
    // webapck-dev-server --hot
    plugins.push(new webpack.HotModuleReplacementPlugin())

}


module.exports = {
    mode: config.mode,
    devtool: config.devtool,
    projectRoot,
    context,
    publicPath,
    devServer,
    entry,
    output,
    plugins,
    cssLoader,
    nodeSassIncludePaths,
    resolve: {
        alias: {
            //basic: path.resolve(__dirname, '../../../basic/'),
            //bulma: path.resolve(context, './vendor/bulma/'),
            vueex: path.resolve(context, './vendor/vueex/'),
        },
        extensions: ['.js', '.vue', '.json', '.scss', '.css']
    },
    externals: {}
}
