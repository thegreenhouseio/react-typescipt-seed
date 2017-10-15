const commonConfig = require('./webpack.config.common');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpackMerge = require('webpack-merge');

// assumes SassLinter is first plugin
commonConfig.plugins[0].failOnError = true;

module.exports = webpackMerge(commonConfig, {

  plugins: [
    new WebpackMd5Hash(),

    new FaviconsWebpackPlugin({
      logo: './components/bootstrap/images/favicon.png',
      emitStats: true,
      prefix: 'icons/',
      statsFilename: 'icons/stats.json',
      inject: true,
      title: 'The Greenhouse',
      background: '#efefef',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
      }
    }),

    new webpack.optimize.ModuleConcatenationPlugin()
  ]

});