var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './riot/src/index',
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.(tag)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?' + JSON.stringify({
                    presets: [
                        [
                            'es2015',
                            {
                                modules: false
                            }
                        ],
                    ],
                }), 'riotjs-loader'],
            },
            {
                test: /\.js$/,
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
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new HtmlWebpackPlugin({
            title: 'Riot JS',
            template: 'riot/src/index.html'
        })
    ],
};
