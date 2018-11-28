const path = require('path');

const nodeExternals = require('webpack-node-externals');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public/dist');
const SVR_DIR = path.join(__dirname, '/public');

var isProduction = process.env.NODE_ENV === 'production';
var productionPluginDefine = isProduction ? [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
] : [];
var clientLoaders = isProduction ? productionPluginDefine.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
]) : [];

var commonLoaders = [
  {
    test: /\.json$/,
    loader: 'json-loader'
  }
];


module.exports = [
  {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
      path: DIST_DIR,
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/',
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    externals: nodeExternals(),
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'isomorphic-style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
          ]
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ]
    }
  },
  {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
      filename: 'dh-mortgage.js',
      path: DIST_DIR,
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        },
      ],
    },
  },
];
