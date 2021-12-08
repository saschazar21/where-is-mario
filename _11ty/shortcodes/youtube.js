/**
 * YouTube Shortcode for Nunjucks templates
 * @param  {...any} args - The shortcode arguments, starting with ID
 * @returns {string} - The HTML for the YouTube video
 */
module.exports = (...args) => {
  const [id, ...rest] = args;

  return `
    <iframe
      width="576"
      height="324"
      class="lazyload youtube"
      data-src="https://www.youtube-nocookie.com/embed/${id}?rel=0"
      loading="lazy"
      title="YouTube video player"
      data-videoid="${id}"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  `;
};
