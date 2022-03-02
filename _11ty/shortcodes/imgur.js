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

const getImageUrl = (id, size, type) =>
  new URL(`${id + size.suffix}.${type.suffix}`, IMGUR_IMAGE_URL).toString();

const srcset = (id, type) => {
  const supported = sizes.filter(size => size.formats.includes(type));

  return supported
    .map(size => `${getImageUrl(id, size, type)} ${size.width}w`)
    .join(', ');
};

module.exports = (...args) => {
  const [data, layout = 'responsive'] = args;
  const { description, height, id, width } = data;

  const iter = Object.keys(formats)[Symbol.iterator]();

  const getImage = () => {
    const { value: format, done } = iter.next();

    if (done) {
      return '';
    }

    return `
      <amp-img
        alt="${description.replace(/"/g, "'")}"
        srcset="${srcset(id, formats[format])}"
        layout="${layout}"
        width="${width}"
        height="${height}"
      >
        ${getImage()}
      </amp-img>`;
  };

  return getImage();
};
