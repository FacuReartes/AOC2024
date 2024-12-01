const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(/[ \n\r]/).filter(x => x !== '');
const col1 = [];
const col2 = [];

input.forEach((x, index) => index % 2 === 0 ? col1.push(x) : col2.push(x));

module.exports = {
  col1, col2
}