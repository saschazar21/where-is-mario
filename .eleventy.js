const plugins = require('./_11ty/plugins');

module.exports = config => {
  config.addPassthroughCopy({ 'src/_data/**/*.json': './' });
  config.addPassthroughCopy({ public: './' });

  plugins.forEach(([plugin, pluginOptions]) =>
    config.addPlugin(plugin, pluginOptions)
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
