'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {
  AdvancedInjectionPlugin,
  Preload,
  AsyncCss,
  InlineCss,
  Js,
  InlineJs,
} = require('advanced-injection-plugin');
const vueLoaderConfig = require('./vue-loader.conf')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

const extractCssApp = new ExtractTextPlugin({
  filename: utils.assetsPath('css/[name].[contenthash:8].css'),
  allChunks: true,
});
const extractCssVendor = new ExtractTextPlugin({
  filename: utils.assetsPath('css/[name].vendor.[contenthash:8].css'),
  allChunks: true,
});

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
      ...utils.styleLoaders({
        sourceMap: config.build.productionSourceMap,
        extract: true,
        usePostCSS: true
      }, {
        app: extractCssApp,
        vendor: extractCssVendor,
      }),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig(extractCssApp),
      },
    ],
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash:8].js')
  },
  optimization: {
    concatenateModules: true,
    splitChunks: {
      minChunks: 3,
      name: false,
    },
    minimize: true,
    minimizer: [{
      apply: (compiler) => new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: config.build.productionSourceMap,
        uglifyOptions: {
          ecma: 8,
          compress: {
            warnings: false,
            // [#2842](https://github.com/mishoo/UglifyJS2/issues/2842)
            inline: 1,
          },
          output: {
            comments: false,
          },
        },
      }).apply(compiler),
    }],
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // extract css into its own file
    extractCssApp,
    extractCssVendor,
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      template: 'index.html',
      inject: false, // Use advanced-injection-plugin
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: false,
      },
      chunksSortMode: 'manual',
    }),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    new AdvancedInjectionPlugin({
      prefix: 'static/',
      rules: [{
        match: 'index.html',
        head: [
          // outdatedbrowser.min.css
          new AsyncCss(/^css\/outdatedbrowser\..*\.css$/),
          // app.vendor.css
          new AsyncCss(/^css\/app\.vendor\..*\.css$/),
          // app.css
          new InlineCss(/^css\/app\.(?!vendor).*\.css$/),
          // app.js
          new Preload(/^js\/app\..*\.js$/, { as: 'script' }),
          // cssrelpreload.min.js
          new InlineJs(/^js\/cssrelpreload\..*\.js$/),
          // outdatedbrowser.min.js
          new InlineJs(/^js\/outdatedbrowser\..*\.js$/),
        ],
        body: [
          // app.js
          new Js(/^js\/app\..*\.js$/),
        ],
      }],
    }),
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
