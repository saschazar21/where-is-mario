const filters = require('./_11ty/filters');
const plugins = require('./_11ty/plugins');
const {
  async: asyncShortcodes,
  sync: syncShortcodes,
} = require('./_11ty/shortcodes');

module.exports = (config) => {
  config.addPassthroughCopy({ 'src/_data/**/*.json': './' });
  config.addPassthroughCopy({ public: './' });

  Object.keys(filters).forEach((filter) => {
    config.addFilter(filter, filters[filter]);
  });

  plugins.forEach(([plugin, pluginOptions]) =>
    config.addPlugin(plugin, pluginOptions)
  );

  asyncShortcodes.forEach(([shortcode, fn]) =>
    config.addNunjucksAsyncShortcode(shortcode, fn)
  );

  syncShortcodes.forEach(([shortcode, fn]) =>
    config.addNunjucksShortcode(shortcode, fn)
  );

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      output: 'dist',
    },
    templateFormats: ['njk'],
  };
};
