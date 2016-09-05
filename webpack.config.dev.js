import webpack from 'webpack';
import path from 'path';

export default {
  entry: ['./src/index'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']}
    ]
  }
}
