const helmet = require('eleventy-plugin-helmet');
const { cache: pwa } = require('eleventy-plugin-workbox');
const rss = require('@11ty/eleventy-plugin-rss');

module.exports = [
  [helmet, {}],
  [pwa, {}],
  [rss, {}],
];
