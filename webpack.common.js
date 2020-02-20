const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

const indexPath = '/index.html'

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  mode: 'development',
  entry: 'src/index.js',
  output: {
    filename: 'app.min.js',
    path: resolve('public'),
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/remind-password/, to: indexPath },
        { from: /\/sign-up/, to: indexPath },
      ]
    },
    contentBase: resolve('public'),
    compress: true,
    port: 8000,
    https: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          resolve('src'),
        ],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.(sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'import-glob-loader',
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      icons: resolve('node_modules/vue-material-design-icons'),
      src: resolve('src'),
      api: resolve('src/api'),
      map: resolve('src/map'),
      store: resolve('src/store'),
      utils: resolve('src/utils'),

      components: resolve('src/components'),
      atoms: resolve('src/components/atoms'),
      extends: resolve('src/components/extends'),
      mixins: resolve('src/components/mixins'),
      molecules: resolve('src/components/molecules'),
      organisms: resolve('src/components/organisms'),
      pages: resolve('src/components/pages'),
      templates: resolve('src/components/templates'),
    },
    extensions: ['.vue', '.sass', '.js', '.css'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      APP_NAME: JSON.stringify('HarcMap'),
      VERSION: JSON.stringify('1.0.0'),
    }),
  ],
}
