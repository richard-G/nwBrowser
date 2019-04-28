const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new CopyWebpackPlugin([
            'index.html', 
            {
                from: 'js',
                to: 'js'
            },
            {
                from: 'css',
                to: 'css'
            },
            {
                from: 'img',
                to: 'img'
            },
            {
                from: 'pages',
                to: 'pages'
            },
            {
                from: 'favicons',
                to: 'favicons'
            },
            {
                from: 'res',
                to: 'res'
            },
            {
                from: 'cordova',
                to: 'cordova'
            },
            {
                from: 'cordova-js-src',
                to: 'cordova-js-src'
            },
            {
                from: 'spec',
                to: 'spec'
            },
            {
                from: 'site.webmanifest',
                to: 'site.webmanifest'
            }
            ]),
        new webpack.HotModuleReplacementPlugin()
    ]
};