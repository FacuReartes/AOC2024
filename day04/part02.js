const { input } = require("./input");

let total = 0;

for (let line = 0; line < input.length; line++) {

  for (let i = 0; i < input[line].length; i++) {

    if (input[line][i] === 'A') {

      let diagonals = 0;

      let leftUp = input[line + 1]?.[i - 1];
      let rightUp = input[line + 1]?.[i + 1];
      let leftDown = input[line - 1]?.[i - 1];
      let rightDown = input[line - 1]?.[i + 1];

      if (
        (leftUp === 'M') && (rightDown === 'S') || 
        (leftUp === 'S') && (rightDown === 'M')
      ) diagonals += 1;

      if (
        (rightUp === 'M') && (leftDown === 'S') || 
        (rightUp === 'S') && (leftDown === 'M')
      ) diagonals += 1;

      if (diagonals === 2) total += 1;
    };
  };
};


console.log(total);