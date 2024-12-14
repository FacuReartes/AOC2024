const { input } = require('./input');

let quadrants = [0, 0, 0, 0]

const sec = 100;

const areaWidth = 101;
const areaHeight = 103;
let qLimiterX = (areaWidth - 1) / 2;
let qLimiterY = (areaHeight - 1) / 2;

for (let i = 0; i < input.length; i++) {
  const [posX, posY, velX, velY] = input[i];

  // Calculate positions after X seconds
  let afterPosX = velX * sec + posX;
  while (afterPosX < 0 || afterPosX >= areaWidth) {
    afterPosX > 0 ? (afterPosX -= areaWidth) : (afterPosX += areaWidth);
  }
  // Calculate positions after X seconds
  let afterPosY = velY * sec + posY;
  while (afterPosY < 0 || afterPosY >= areaHeight) {
    afterPosY > 0 ? (afterPosY -= areaHeight) : (afterPosY += areaHeight);
  }
  // Determine quadrant
  if (afterPosX < qLimiterX && afterPosY < qLimiterY) {
    quadrants[0]++;
  } else if (afterPosX < qLimiterX && afterPosY > qLimiterY) {
    quadrants[2]++;
  } else if (afterPosX > qLimiterX && afterPosY < qLimiterY) {
    quadrants[1]++;
  } else if (afterPosX > qLimiterX && afterPosY > qLimiterY) {
    quadrants[3]++;
  }
}

total = quadrants.reduce((acc, val) => {
  return acc *= val
}, 1)

console.log(total);