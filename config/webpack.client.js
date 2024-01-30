const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
  }),
];

if (process.env.analyze) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(png|jp(e*)g|svg|gif|ttf)$/, type: 'asset/resource' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: plugins,
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
      publicPath: '/',
    },
    port: 3002,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
