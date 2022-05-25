require("dotenv").config();

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

module.exports = (...args) => {
  const [lat, lng, zoom = 15, width = 600, height = 300] = args;

  return `<amp-iframe
    src="https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${lat},${lng}&zoom=${zoom}"
    width="${width}"
    height="${height}"
    frameborder="0"
    layout="responsive"
    sandbox="allow-scripts allow-same-origin"
  ></amp-iframe>`;
};
