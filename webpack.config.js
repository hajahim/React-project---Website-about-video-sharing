var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      { 
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, 
        loader: 'url?limit=100000&name=[name].[ext]'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(png|jpg|mp4)$/,
        loader: 'url?limit=25000'
      }
    ]
  }
};
