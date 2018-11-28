const path = require('path');

const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public/dist');
const SVR_DIR = path.join(__dirname, '/public');

module.exports = [
  {
    entry: `${SRC_DIR}/server.jsx`,
    output: {
      path: DIST_DIR,
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    target: 'node',
    devtool: 'source-map',
    externals: nodeExternals(),
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        },
        {
          test: [/\.(js|jsx)$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
    ],
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
