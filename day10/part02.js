const { input } = require('./input');

let directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];

const checkPos = (n, y, x) => {
  let sum = 0;

  if (n === 9) return 1

  directions.forEach(dir => {
    
    if (input?.[y + dir[0]]?.[x + dir[1]] === n + 1) sum += checkPos(n + 1, y + dir[0], x + dir[1]) 

  });

  return sum

};

const total = input.reduce((acc, col, y) => {

  return acc += col.reduce((acc, num, x) => {

    if (num === 0) {
      return acc += checkPos(0, y, x)
    };
    return acc
  }, 0);

}, 0);

console.log(total);