const { input } = require('./input');

const areaWidth = 101;
const areaHeight = 103;

outer: for (let sec = 0; sec < 10001; sec++) {
  let area = Array.from({ length: areaHeight }, () =>
    Array(areaWidth).fill('.')
  );

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

    area[afterPosY][afterPosX] = '#';
  }

  for (let y = 0; y < area.length; y++) {
    for (let x = 0; x < area[y].length; x++) {
      let j = 0;
      let amount = 0;
      // Look for the border of the easter egg
      while (area[y - j]?.[x] === '#') {
        amount++;
        j--;
        if (amount > 20) {
          console.log(area.map((x) => x.join('')));
          console.log(sec);
          break outer;
        }
      }
    }
  }
}
