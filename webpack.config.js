const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry:{
       app: './src/index.js',
       print:'./src/print.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:path.join(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['*.bundle.js']
        }),
        new HtmlWebpackPlugin({
            title:'Output Managerment',
            favicon:'./favicon.ico'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    }
}