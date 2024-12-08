const { input } = require('./input');

const total = input.reduce((total, eq) => {
  const numbers = eq.split(/:? /);
  const eqid = numbers.shift();
  opCombinations = Math.pow(3, numbers.length - 1);
  for (let comb = 0; comb < opCombinations; comb++) {

    let subTotal = Number(numbers[0]);
    const trinary = comb.toString(3).padStart(numbers.length - 1, 0);

    for (let i = 0; i < numbers.length - 1; i++) {
      if (trinary[i] == 0) {
        subTotal += Number(numbers[i + 1]);
      } else if (trinary[i] == 1) {
        subTotal *= Number(numbers[i + 1]);
      } else {
        subTotal += numbers[i + 1];
        subTotal = Number(subTotal);
      }
    };

    if (subTotal == Number(eqid)) {
      return total += Number(subTotal)
    };
  }
  return total

}, 0);

console.log(total);