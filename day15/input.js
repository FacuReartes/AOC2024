const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(/\r\n/);

const board = input.slice(0, input.indexOf('')).map((x) => x.split(''));
const moves = input.slice(input.indexOf('') + 1).join('');

module.exports = {
  board,
  moves,
};
