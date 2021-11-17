const { URL } = require('url');
const day = require('dayjs');

const pkg = require('../package.json');

const domain = process.env.URL || pkg.homepage;

module.exports = {
  absoluteURL: (path = '') => {
    if (/^https?:\/\//i.test(path)) {
      return path;
    }
    const url = new URL(path, domain);
    return url.toString();
  },
  date: (date, format = 'dddd, MMMM D, YYYY') => day(date).format(format),
  hostname: url => new URL(url).hostname,
  isodate: date => new Date(date).toISOString(),
};
