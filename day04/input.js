const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(/[\n\r]/).filter(x => x !== '');

module.exports = {
  input
}