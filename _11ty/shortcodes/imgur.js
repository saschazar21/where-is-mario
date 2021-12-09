const fetch = require('node-fetch');

const clientID = process.env.IMGUR_CLIENT_ID;

const IMGUR_API_URL = 'https://api.imgur.com/3/image/';
const IMGUR_IMAGE_URL = 'https://i.imgur.com/';

const formats = {
  webp: {
    type: 'image/webp',
    suffix: 'webp',
  },
  jpeg: {
    type: 'image/jpeg',
    suffix: 'jpg',
  },
};

const sizes = [
  {
    suffix: 's',
    width: 90,
    formats: [formats.jpeg],
  },
  {
    suffix: 't',
    width: 160,
    formats: [formats.jpeg],
  },
  {
    suffix: 'm',
    width: 320,
    formats: [formats.jpeg, formats.webp],
  },
  {
    suffix: 'l',
    width: 640,
    formats: [formats.jpeg, formats.webp],
  },
  {
    suffix: 'h',
    width: 1024,
    formats: [formats.jpeg, formats.webp],
  },
];

const fetchMetadata = async id =>
  fetch(new URL(id, IMGUR_API_URL), {
    headers: { authorization: `Client-ID ${clientID}` },
  })
    .then(res => res.json())
    .catch(e => {
      console.error(e);
      return {};
    });

const getImageUrl = (id, size, type) =>
  new URL(`${id + size.suffix}.${type.suffix}`, IMGUR_IMAGE_URL).toString();

const srcset = (id, type) => {
  const supported = sizes.filter(size => size.formats.includes(type));

  return supported
    .map(size => `${getImageUrl(id, size, type)} ${size.width}w`)
    .join(', ');
};

module.exports = (...args) => {
  const [id, layout = 'responsive'] = args;

  // TODO: wait for new Eleventy release (1.0.0-beta.9) for adding asynchronous shortcodes
  // source: https://github.com/11ty/eleventy/issues/2108
  // ------
  // const { data: { description, height, width } = {} } = await fetchMetadata(id);

  const iter = Object.keys(formats)[Symbol.iterator]();

  const getImage = () => {
    const { value: format, done } = iter.next();

    if (done) {
      return '';
    }

    return `
      <amp-img
        alt="An image showing Mario on his travels"
        srcset="${srcset(id, formats[format])}"
        layout="${layout}"
        width="4"
        height="3"
      >
        ${getImage()}
      </amp-img>`;
  };

  return getImage();
};
