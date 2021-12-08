const imgur = require('./imgur');
const youtube = require('./youtube');

module.exports = {
  async: [],
  sync: [
    ['imgur', imgur],
    ['youtube', youtube],
  ],
};
