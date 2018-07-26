import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { readFileSync } from 'fs';

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

export default {
  mode: 'production',
  entry: {
    js: [path.join(sourcePath, '/component.js')],
  },
  output: {
    path: distPath,
    filename: (process.env.MIN === 'true') ? 'index.min.js' : 'index.js',
    library: 'zhello',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?sourceMap', 'postcss-loader'],
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: ['handlebars-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new HTMLWebpackPlugin({
      filename: 'component.html',
      template: 'src/webcomponent/component.hbs',
      inject: false,
      css: readFileSync(path.join(sourcePath, '/style.css'), { encoding: 'utf8' }),
      js: readFileSync(path.join(sourcePath, '/webcomponent/component.js'), { encoding: 'utf8' }),
    }),
  ],
};
