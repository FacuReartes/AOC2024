const fs = require('fs');

const input = fs
  .readFileSync('input.txt')
  .toString()
  .split(/\r\n/)
  .map((x) => x.split(''));

module.exports = {
  input,
};
