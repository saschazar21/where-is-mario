const pkg = require('../../package.json');

module.exports = {
  name: pkg.appName,
  short_name: pkg.displayName,
  start_url: '/',
  display: 'standalone',
  background_color: pkg.color,
  lang: 'en',
  scope: '/',
  description: pkg.description,
  icons: [
    {
      src: '/icons/maskable-192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/icons/maskable-512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/icons/rounded-192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/icons/rounded-512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
  ],
  theme_color: pkg.color,
};
