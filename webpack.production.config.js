'use strict';

var resolve = require('path').resolve;

var webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'app'),

    entry: [
        './index.js'
    ],

    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.scss$/,
                loader: 'style!css?minimize&modules&importLoaders=1&localIdentName=[name]_[hash:base64:4]!sass'
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url',
                query: {
                    name: '[hash].[ext]',
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

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false },
          comments: false,
          // sourceMap: false,
          mangle: true,
          minimize: true
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
