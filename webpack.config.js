const path = require('path')
const HtmlWebPackPlugin= require('html-webpack-plugin')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: __dirname+'/src/index.js',
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    publicPath:'/'
                }
            }
        },
        {
            test:/\.scss$/,
            use:[
                {
                    loader:'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        modules: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        
                    }
                },
                {
                    loader: 'postcss-loader'
                }
            ]
        }
    ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: `${__dirname}/src/index.html`
    }),
        new CleanWebpackPlugin()
    ],
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: "./dist",
        open: true,
        port: 8081
    }
}