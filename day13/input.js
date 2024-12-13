const fs = require('fs');

const input = fs
  .readFileSync('input.txt')
  .toString()
  .split(/\r\n/)
  .filter((x) => x !== '')
  .map((x) => x.split(/[+=,]/).map(Number).filter(Number));

module.exports = {
  input,
};
