const helmet = require('eleventy-plugin-helmet');
const { cache: pwa } = require('eleventy-plugin-workbox');
const rss = require('@11ty/eleventy-plugin-rss');
const youtube = require('eleventy-plugin-youtube-embed');

module.exports = [
  [helmet, {}],
  [pwa, {}],
  [rss, {}],
  [youtube, { lazy: true, lite: true }],
];
