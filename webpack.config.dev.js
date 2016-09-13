import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader"},
      {test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=100000&mimetype=image/png"},
      {test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=image/jpg"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
};
