var autoprefixer = require('autoprefixer');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var bundleTrackerPlugin = new BundleTracker({
  filename: 'webpack-bundle.json'
});

var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[chunkhash].js');

var extractTextPlugin = new ExtractTextPlugin(
  '[name].[chunkhash].css'
);

var providePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  '_': 'underscore',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
});

var config = {
  entry: {
    app: './app/js/app.js',
    vendor: [
      'jquery',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'app/assets/'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract([
          'css?sourceMap',
          'postcss',
        ])
      },
      {
        test: /\.(eot|otf|jpg|png|svg|ttf|woff|woff2)(\?v=[0-9.]+)?$/,
        loader: 'url',
        include: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'app/fonts'),
          path.resolve(__dirname, 'app/images')
        ]
      },
      { test: /\.csv$/, loader: 'csv-loader' }
    ]
  },
  plugins: [
    bundleTrackerPlugin,
    commonsChunkPlugin,
    extractTextPlugin,
    providePlugin,
    new HtmlWebpackPlugin({
      title: "Smart Mirror",
      template: "app/index.html"
    })
  ],
  postcss: function() {
    return [autoprefixer];
  },
  resolve: {
    alias: {
      'jquery': path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js')
    }
  },
  sassLoader: {
    sourceMap: true
  },
  node: {
    fs: "empty"
  }
};

module.exports = config;
