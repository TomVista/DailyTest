const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: '/dist/'
  },
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 10086,
    contentBase: [path.resolve(__dirname), path.resolve(__dirname, 'view')],
    publicPath: '/dist/',
    inline: true,
    hot: true,
    watchContentBase: true,
    watchOptions: {
      poll: true,
      aggregateTimeout: 500
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
      ]
    }]
  }
};