/**
 * Created by DEV on 2016/6/20.
 */
var webpack = require("webpack");
var BowerWebpackPlugin = require("bower-webpack-plugin");
module.exports = {
    entry: {
        entry: "./client/entry/entry.js"
    },
    output: {
        path: __dirname+"/client/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"},
            {test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'}
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.coffee', '.json', '.js', '.jsx'],
        modulesDirectories: ["web_modules", "node_modules", "bower_components"],
        alias:{
            jquery:"jquery"
        }
    },
    plugins: [
        new BowerWebpackPlugin({
            excludes: /.*\.less/
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};