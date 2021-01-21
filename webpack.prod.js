 module.exports = require('webpack-merge')(require('./webpack.common.js'), {
   mode: 'production',
   devtool: 'source-map'
 });
