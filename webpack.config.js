'use strict';

var resolve = require('path').resolve;

module.exports = {
    devtool: 'source-map',
    context: resolve(__dirname, 'app'),
    entry: [
        'webpack/hot/dev-server',
        './index.js'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        // quiet: true,
        inline: true,
        // publicPath: 'dist/',
        // noInfo: false,
        // compress: true,
        historyApiFallback: false,
        contentBase: 'dist/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'react-hmre']
                }
            }, {
                test: /\.scss$/,
                loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[path]_[name]_[local]!sass?sourceMap'
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url',
                query: {
                    name: '[path][name].[ext]?[hash]',
                    limit: 10000,
                },
            }, {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    sassLoader: {
        includePaths: [
            resolve(__dirname, 'app/scss')
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
