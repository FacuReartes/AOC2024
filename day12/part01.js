const { input } = require('./input');
const str = input;

let directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const calculateArea = (y, x, areaID) => {
  let area = 1;
  let perimeter = 0;
  str[y][x] = areaID.toLowerCase();

  directions.forEach((dir) => {
    const nextPos = str?.[y + dir[0]]?.[x + dir[1]];

    if (nextPos === areaID) {
      let res = calculateArea(y + dir[0], x + dir[1], areaID);
      area += res.area;
      perimeter += res.perimeter;
    } else if (nextPos !== areaID.toLowerCase()) {
      perimeter += 1;
    }
  });

  return { area, perimeter };
};

const total = str.reduce((acc, val, y) => {
  return (acc += val.reduce((acc, val, x) => {
    if (val !== val.toLowerCase()) {
      const { area, perimeter } = calculateArea(y, x, val);

      return (acc += area * perimeter);
    }
    return acc;
  }, 0));
}, 0);

console.log(total);
