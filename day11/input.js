const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(' ').map(Number);

module.exports = {
  input
};