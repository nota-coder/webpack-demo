const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const webpack = require('webpack');
module.exports = {
    entry:{
        app:['webpack-hot-middleware/client',
            './src/index.js'
        ]
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        hot:true
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['*.bundle.js']
        }),
        new HtmlWebpackPlugin({
            title:'Output Managerment',
            favicon:'./favicon.ico'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    }
}