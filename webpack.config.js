const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackVersionFile = require('webpack-version-file');

const now = new Date();
const yy = now.getFullYear();
const mm = now.getMonth() + 1;
const dd = now.getDate();
const ver = `${yy}${mm < 10 ? '0' + mm : mm}${dd < 10 ? '0' + dd : dd}.${now.getTime()}`;

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader'
                }
            },
            {
                test : /\.(c|sc|sa)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new WebpackVersionFile({
            output : './dist/version.php',
            templateString : '<?php define("_BUILD_VERSION", "<%= version %>");',
            data : {
                version : ver
            }
        })
    ],
    output: {
        filename : "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
}