const { resolve } = require('path');
const amp = require('@ampproject/eleventy-plugin-amp');
const { cache: pwa } = require('eleventy-plugin-workbox');
const rss = require('@11ty/eleventy-plugin-rss');

module.exports = [
  [
    amp,
    {
      filter: /^dist\/(?!service-worker\.html)/,
      imageBasePath: imageSrc => resolve(__dirname, '../dist' + imageSrc),
    },
  ],
  [pwa, {}],
  [rss, {}],
];
