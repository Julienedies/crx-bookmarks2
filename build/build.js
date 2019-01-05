/*!
 * Created by j on 2018-12-28.
 */


const webpack = require('webpack')

const config = require('./webpack/base.js')

webpack(config, (err, stats) => {
    let err2 = stats.hasErrors()
    if(err || err2){
        console.log(1,err2, err)
        const info = stats.toJson({
            colors: true
        });
        console.log(info);
    }
})