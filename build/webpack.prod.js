const commConfig = require('./webpack.comm.js')
const merge = require('webpack-merge')
const prodConfig = {
    mode: 'production',
    devtool: "cheap-module-source-map"
}

module.exports = merge(commConfig,prodConfig)