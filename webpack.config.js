const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[contenthash].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),

        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),

    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
}

module.exports = (env, { mode }) => {
    if (mode === 'development') {
        config.devServer = {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 4000,
            open: true
        }
    }
    else if (mode === 'production') {
        config.plugins.push(new CleanWebpackPlugin())
    }

    return config;
}