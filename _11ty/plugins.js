const helmet = require('eleventy-plugin-helmet');
const { cache: pwa } = require('eleventy-plugin-workbox');

module.exports = [
  [helmet, {}],
  [pwa, {}],
];
