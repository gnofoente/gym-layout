var path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
  	rules: [
  		{
  			test: /\.json$/,
  			use: 'json-loader'
  		}
  	]
  }
};