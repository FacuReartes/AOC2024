const { input } = require('./input');

const mulList = input.match(/mul\(\d{1,3},\d{1,3}\)/g);

const total = mulList.reduce((acc, val) => {
  const numbers = val.split(/[\(\),]/);
  return acc + Number(numbers[1]) * Number(numbers[2])
}, 0);

console.log(total);