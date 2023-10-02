const path = require('path');
const cssExtract = require('mini-css-extract-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: [
                cssExtract.loader,
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new cssExtract({
            filename: 'style.css',
        }),
    ]
};