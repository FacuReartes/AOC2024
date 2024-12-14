const fs = require('fs');

const input = fs
  .readFileSync('input.txt')
  .toString()
  .split(/\r\n/)
  .map((x) => x.split(/[^\d-]/).filter((x) => x !== '').map(Number));

module.exports = {
  input,
};
