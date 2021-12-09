const amp = require('@ampproject/eleventy-plugin-amp');
const { cache: pwa } = require('eleventy-plugin-workbox');
const rss = require('@11ty/eleventy-plugin-rss');

module.exports = [
  [amp, {}],
  [pwa, {}],
  [rss, {}],
];
