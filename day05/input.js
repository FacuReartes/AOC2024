const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(/\r\n/);

const divider = input.indexOf('');

const orderList = input.slice(0, divider);
const updateList = input.slice(divider + 1);

module.exports = {
  orderList,
  updateList
};