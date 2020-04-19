// next.config.js
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['echaloasuerte-js-sdk']);

module.exports = withImages(withTM());
