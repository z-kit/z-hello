// Webpack config to serve the component with bundled styles

const multi = require('multi-loader');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: multi('style-loader!css-loader?modules=false', 'file-loader?name=style.css'),
      },
    ],
  },
};
