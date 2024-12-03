const { input } = require('./input');

const mulList = input.match(/mul\(\d{1,3},\d{1,3}\)|do(n't)*\(\)/g);

let isEnabled = true;

const filteredMulList = mulList.filter(x => {
  if (x === 'do()') {
    isEnabled = true;
    return false
  };
  if (x === "don't()") isEnabled = false;
  return isEnabled
});

const total = filteredMulList.reduce((acc, val) => {
  const numbers = val.split(/[\(\),]/);
  return acc + Number(numbers[1]) * Number(numbers[2])
}, 0);

console.log(total);