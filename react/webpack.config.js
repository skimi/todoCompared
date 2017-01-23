var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './react/src/index',
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        [
                            'es2015',
                            {
                                modules: false
                            }
                        ],
                        'react',
                    ],
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
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
            template: 'react/src/index.html'
        })
    ],
};
