const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entryPoint: './resources/main.js',
  outputDir: '../static/',
  stylesDir: 'css/',
  library: 'window'
};

const enabledStyles = {
  css: loadStyle(),
  scss: loadStyle('sass')
};

// -------------------------------------
// Utility functions

function addSuffix(entry, suffix) {
  if (entry) {
    if (Array.isArray(entry)) {
      return entry.map(e => e + suffix);
    }
    return entry + suffix;
  }
  return '';
}

function trim(str, char) {
  if (str.substr(-1) === char) {
    return str.substr(0, str.length - 1);
  }
  return str;
}

function loadStyle(types) {
  let loaders = ['css-loader'];
  if (types) {
    loaders.push(addSuffix(types, '-loader'));
  }
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader'
  });
}

// -------------------------------------

module.exports = {
  watch: true,
  entry: config.entryPoint,
  output: {
    path: path.resolve(__dirname, config.outputDir),
    filename: '[name].min.js',
    publicPath: '/build/',
    libraryTarget: config.library
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.join(__dirname, '..', 'resources')
    }
  },
  module: {
    rules: [
      { // compiles vue files
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: enabledStyles
        }
      },
      { // transpile ECMAScript 5
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: addSuffix(trim(config.stylesDir, '/'), '/') + '[name].bundle.css'
    })
  ]
};