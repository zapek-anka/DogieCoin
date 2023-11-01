const path = require('path');
const cssExtract = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    cssExtract.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif|eot|ttf|woff)$/,
                type: 'asset/resource'
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('icons', '[name][ext]'),
                },
            }
        ]
    },
    plugins: [
        new cssExtract({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: path.join(__dirname, 'src', 'template.html'),
            filename: 'index.html',
        }),
    ],
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },
};