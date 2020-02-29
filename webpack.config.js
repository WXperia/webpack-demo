const path = require('path')

module.exports = {
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
                    publicPath:'dist'
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
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                },
                {
                    loader: 'postcss-loader'
                }
            ]
        }
    ]
    }
}