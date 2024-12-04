const { input } = require('./input');

let total = 0;

const directions = [
  { dx: -1, dy: 0 }, // Left
  { dx: 1, dy: 0 },  // Right
  { dx: 0, dy: -1 },  // Down
  { dx: 0, dy: 1 }, // Up
  { dx: -1, dy: -1 }, // Down-Left Diagonal
  { dx: 1, dy: -1 },  // Down-Right Diagonal
  { dx: -1, dy: 1 }, // Up-Left Diagonal
  { dx: 1, dy: 1 }, // Up-Right Diagonal
]

for (let line = 0; line < input.length; line++) {

  for (let i = 0; i < input[line].length; i++) {

    if (input[line][i] === 'X') {

      directions.forEach(({ dx, dy }) => {

        if ([ input[line + dy]?.[i + dx], input[line + (dy * 2)]?.[i + (dx * 2)], 
        input[line + (dy * 3)]?.[i + (dx * 3)]].join('') === 'MAS') total += 1;
      });
    };
  };
};

console.log(total);