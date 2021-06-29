const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    publicPath: argv.mode === 'production' ? '/JS-Firebase-Landing-Page-' : '/',
    path: path.resolve(__dirname, 'dist'),
  },
};