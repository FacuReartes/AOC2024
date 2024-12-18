const { input } = require('./input');

let [regA, regB, regC, ...program] = input;

const getComboOperand = (op) => {
  switch (op) {
    case 4:
      return regA;
    case 5:
      return regB;
    case 6:
      return regC;
    default:
      return op;
  }
};

const calculateXOR = (num1, num2) => {
  let bitNum1 = num1.toString(2);
  let bitNum2 = num2.toString(2);
  bitNum1 = bitNum1.padStart(bitNum2.length, '0');
  bitNum2 = bitNum2.padStart(bitNum1.length, '0');

  let res = [];
  for (let j = 0; j < bitNum1.length; j++) {
    bitNum1[j] === bitNum2[j] ? res.push(0) : res.push(1);
  }
  return parseInt(res.join(''), 2);
};

let res = [];

for (let i = 0; i < program.length; i += 2) {
  if (program[i] === undefined || program[i + 1] === undefined) break;

  switch (program[i]) {
    case 0:
      regA = Math.trunc(regA / Math.pow(2, getComboOperand(program[i + 1])));
      break;

    case 1:
      regB = calculateXOR(regB, program[i + 1]);
      break;

    case 2:
      regB = getComboOperand(program[i + 1]) % 8;
      break;

    case 3:
      if (regA !== 0) i = program[i + 1] - 2;
      break;

    case 4:
      regB = calculateXOR(regB, regC);
      break;

    case 5:
      res.push(getComboOperand(program[i + 1]) % 8);
      break;

    case 6:
      regB = Math.trunc(regA / Math.pow(2, getComboOperand(program[i + 1])));
      break;

    case 7:
      regC = Math.trunc(regA / Math.pow(2, getComboOperand(program[i + 1])));
      break;

    default:
      break;
  }
}

// Result
console.log(res.join(','));
