const { col1, col2 } = require('./input.js')

col1.sort();
col2.sort();

let total = 0;

for (let i = 0; i < col1.length; i++) {
  let sub = Math.abs(col1[i] - col2[i]);
  total += sub;
}

console.log(total);