'use strict';

var path = require('path');

module.exports = {
    entry: "./js/common.js",
    output: {
        filename: "./js/build.js"
    },
    watch: true,
    devtool: "source-map",
    module: {
        loaders: [{
            include: [path.resolve(__dirname, "/js")],
            loader: "babel-loader",
            exclude: /node_modules/,
        }]
    }
};
