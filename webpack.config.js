const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  
  entry:'./src/app/index.js',
  mode: 'development',
   devServer: {
     port: 3000,
     open:true
   },
   module:{
    rules: [
        {
          test: /\.css$/i,
           use: [MiniCssExtractPlugin.loader, 'css-loader'],   
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader',
          },
        }
    ]
    },
  output: {
    filename: 'js/app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.bundle.css'
  }),
    new HTMLWebpackPlugin({
        template: './src/index.html',
        minify:  {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          }
          
    })
  ]
};
