const fs = require('fs');

const input = fs
  .readFileSync('input.txt')
  .toString()
  .split(/\D/g)
  .filter((x) => x !== '')
  .map(Number);

module.exports = {
  input,
};
