const { input } = require('./input');

let total = 0;

let overlappedAntis = new Set();

const handleCell = (y, x, dx, dy) => {

  const targetY = y + dy;
  const targetX = x + dx;

  if ( input[targetY]?.[targetX] && input[targetY][targetX] !== '#') {

    if (input[targetY][targetX] === '.') {

      input[targetY][targetX] = '#';
      total++;
    } else {

      if (!overlappedAntis.has(`${targetY}:${targetX}`)) total++
      overlappedAntis.add(`${targetY}:${targetX}`);
    };
  };
};

const searchAnti = (x, y, node) => {

  for (let newY = y + 1; newY < input.length; newY++) {

    for (let newX = 0; newX < input[newY].length; newX++) {

      if (input[newY][newX] === node) {

        const dx = newX - x;
        const dy = newY - y;

        handleCell(newY, newX, dx, dy);

        handleCell(y, x, -dx, -dy);

      };
    };
  };
};

for (let y = 0; y < input.length; y++) {

  for (let x = 0; x < input[y].length; x++) {

    if (input[y][x] !== '.' && input[y][x] !== '#') {

      searchAnti(x, y, input[y][x]);

    };
  };
};

console.log(total);
