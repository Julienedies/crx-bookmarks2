/*!
 * 通过 webpack node API 使用webpack
 * Created by j on 2018-12-28.
 */

const path = require('path')

const webpack = require('webpack')

const middleware = require('webpack-dev-middleware')

const open = require('open')

const express = require('express')

const config = require('./webpack')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const compiler = webpack(config)

const app = express()

const port = 9000

const home = path.resolve(__dirname, '../dist/index.html')

app.use(middleware(compiler, config.devServer))

app.use(require("webpack-hot-middleware")(compiler))

//app.use(express.static('../'))

app.get('/', (req, res) => {
    res.sendFile(home)
})

app.listen(port, () => {
    console.log(`express listen to ${port}`)
    open(`http://localhost:${port}/index.html`)
})