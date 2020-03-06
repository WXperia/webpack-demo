const commConfig = require('./webpack.comm.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const devConfig = {
    mode: 'development',
    
    optimization: {
        //tree shaking
        usedExports: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "cheap-module-source-map"
}

module.exports = merge(commConfig,devConfig)