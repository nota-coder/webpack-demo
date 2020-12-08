const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express(), DIST_DIR = path.join(__dirname,'dist');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler,{
    log:false,
    heartbeat:2
}));

app.use(express.static(DIST_DIR))
 
app.listen(3000,function(){
    console.log('Example app listening on port 3000!\n');
});
