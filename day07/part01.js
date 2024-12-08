const { input } = require('./input');

const total = input.reduce((total, eq) => {
  const numbers = eq.split(/:? /);
  const eqid = numbers.shift();
  opCombinations = Math.pow(2, numbers.length - 1);
  for ( let comb = 0; comb < opCombinations; comb++) {

    let subTotal = Number(numbers[0]);
    const binary = comb.toString(2).padStart(numbers.length - 1, 0);

    for (let i = 0; i < numbers.length - 1; i++) {
      Number(binary[i]) ? subTotal *= Number(numbers[i + 1]) : subTotal += Number(numbers[i + 1]);
    };

    if (subTotal == Number(eqid)) {
      return total += subTotal
    };
  }
  return total

}, 0);

console.log(total);