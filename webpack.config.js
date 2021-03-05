const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js"
    },
    plugins: [ 
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        new HtmlWebpackPlugin( {
            template: "./module19.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|svg|jpg)$/i,
                use: ['file-loader']
            },
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true
                    }
                }, 'css-loader','sass-loader'],
                test: /\.css$/
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
             },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }

        ]
    }
}