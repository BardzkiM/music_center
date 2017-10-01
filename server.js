"use strict";
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require("./webpack.config.js");
const compiler = webpack(config);
const server = new webpackDevServer(compiler);
server.listen(8100);
