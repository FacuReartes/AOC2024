const { input } = require('./input');
const str = input;

let directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const calculateArea = (y, x, areaID, visitedBorder) => {
  let area = 1;
  let perimeter = 0;
  str[y][x] = areaID.toLowerCase();

  directions.forEach((dir) => {
    const nextPos = str?.[y + dir[0]]?.[x + dir[1]];

    if (nextPos === areaID) {
      let res = calculateArea(y + dir[0], x + dir[1], areaID, visitedBorder);
      area += res.area;
      perimeter += res.perimeter;
    } else if (nextPos !== areaID.toLowerCase()) {
      perimeter += calculateBorder(y, x, dir[0], dir[1], areaID, visitedBorder);
    }
  });

  return { area, perimeter };
};

const calculateBorder = (y, x, dy, dx, areaID, visitedBorder) => {
  let isNewBorder = true;

  // Loops for 1 and -1 | positive and negative directions
  for (let i = 1; i > -2; i -= 2) {
    let posY = y;
    let posX = x;

    let borderPosY = y + dy;
    let borderPosX = x + dx;

    while (
      str?.[posY]?.[posX]?.toUpperCase() === areaID &&
      str?.[borderPosY]?.[borderPosX]?.toUpperCase() !== areaID &&
      isNewBorder
    ) {
      if (visitedBorder.has(`${posY}:${posX}:${dy}${dx}`)) isNewBorder = false;

      posY += dx * i;
      posX += dy * i;

      borderPosY += dx * i;
      borderPosX += dy * i;
    }
  }

  if (isNewBorder) {
    visitedBorder.add(`${y}:${x}:${dy}${dx}`);
    return 1;
  }
  return 0;
};

const total = str.reduce((acc, val, y) => {
  return (acc += val.reduce((acc, val, x) => {
    if (val !== val.toLowerCase()) {
      const visitedBorder = new Set();
      const { area, perimeter } = calculateArea(y, x, val, visitedBorder);

      return (acc += area * perimeter);
    }
    return acc;
  }, 0));
}, 0);

console.log(total);
