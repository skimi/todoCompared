var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: {
        index: './angular2/src/index.ts',
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: 'angular2/tsconfig.json',
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loaders: ['html-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        // Look for modules in assets and node_modules
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        host: '0.0.0.0',
        compress: true,
        inline: true,
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Angular 2',
            template: 'angular2/src/index.html'
        }),
        new CheckerPlugin()
    ],
};
