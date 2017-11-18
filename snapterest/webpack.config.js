const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.snapterest.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
