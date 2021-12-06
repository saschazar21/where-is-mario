const { URL } = require('url');
const day = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
day.extend(relativeTime);

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
  dateRelative: (date, compareDate) => {
    if (!compareDate) {
      throw new Error('Second date parameter is missing!');
    }
    return day(date).from(day(compareDate), true);
  },
  hostname: url => new URL(url).hostname,
  isodate: date => new Date(date).toISOString(),
};
