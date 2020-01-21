const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin')
const path = require("path")

module.exports = {
    entry: "./src/index.js" ,
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "main.js",
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8000
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                resolve: {
                    extensions: ['.ts', '.js']
                },
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', "@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'VIRTUS',
            template: "src/template/template.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'public')
            },
            {
                from: './src/assets/images',
                to: './assets/images'
            },
            {
                from: './src/assets/fonts',
                to: './assets/fonts'
            },
        ]),
        new HtmlBeautifyPlugin({
            config: {
                html: {
                    end_with_newline: true,
                    indent_size: 2,
                    indent_with_tabs: true,
                    indent_inner_html: true,
                    preserve_newlines: true
                }
            },
            replace: [' type="text/javascript"']
        })
    ]

}