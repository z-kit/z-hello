// Webpack config to serve the JSX component with bundled styles

import path from 'path';

const demoPath = path.join(__dirname, './demo');
const jsxPath = path.join(__dirname, './jsx');

export default {
  entry: {
    js: [demoPath.concat('/render.js')],
  },
  output: {
    path: demoPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsxPath,
    ],
  },
};
