var webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        name: 'css',
        entry: {
            styles: [
                path.join(__dirname, 'src/assets/scss/style.scss')
            ]
        },
        output: {
            path: path.join(__dirname, "dist/css"),
            filename: "[name].css"
        },
        resolve: {
            modules: [path.join(__dirname, "src")],
        },
        plugins: [
            new ExtractTextPlugin({ filename: '[name].css' })
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            { loader: 'css-loader' },
                            { loader: 'postcss-loader' },
                            { loader: 'sass-loader' }
                        ]
                    })
                }
            ]
        }
    }
]