const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base');

const config = {
  // Inform webpack we're building a bundle for nodJS and not for the browser
  target: 'node',

  // Tell weback the root file of our server app
  entry: './src/index.js',

  // Tell Webpack where to put the outpufile
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Don't bundle imports present in node_modules/
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
