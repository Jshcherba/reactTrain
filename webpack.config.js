var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/app.js',
    output: { path: __dirname, filename: 'bundle.js' },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};