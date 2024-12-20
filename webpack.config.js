'use strict'

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const IconfontWebpackPlugin = require('iconfont-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new miniCssExtractPlugin()
  ],
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: [
                miniCssExtractPlugin.loader,
                "css-loader",
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: (loader) => {
                      return {
                        plugins: [
                          new IconfontWebpackPlugin({
                            resolve: loader.resolve
                          })
                        ]
                      };
                    }
                  }
                },
      
                'sass-loader'
            ],
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/img/[hash][ext][query]'
          }
      }
    ],
  },

}
