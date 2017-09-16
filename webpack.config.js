const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: './bundle.js'
  },
  plugins:
    process.env.NODE_ENV === 'production'
      ? [ new webpack.optimize.UglifyJsPlugin() ]
      : []
};
