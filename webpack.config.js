const path = require('path')
const fs = require('fs')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const indexFile = `${__dirname}/example`
module.exports = {
    mode: 'development',
    entry: {
        main: `${indexFile}/hmr&loader/index.js`,
    },
    output: {
        path: __dirname + '/dist',
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                        // options: {
                        //     presets: [["@babel/preset-env", {
                        //         useBuiltIns: 'usage',
                        //         targets: {
                        //             chrome: '67'
                        //         }
                        //     }]],
                        // }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[hash].[ext]',
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
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
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin(),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: "/dist",
        open: false,
        port: 8080,
        hot: true,
        hotOnly: true
    }
}