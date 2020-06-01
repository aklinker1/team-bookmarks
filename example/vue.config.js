const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/aklinker1/teams-bookmarks' : '/',
  outputDir: path.join(__dirname, 'dist'),
};
