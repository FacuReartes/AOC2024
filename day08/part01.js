// IMPROVE THIS CODE
const { input } = require('./input');

let total = 0

let overlappedAntis = new Set()

const searchAnti = (x, y, node) => {

  for (let newY = y + 1; newY < input.length; newY++) {

    for (let newX = 0; newX < input[newY].length; newX++) {

      if (input[newY][newX] === node) {

        const dx = newX - x;
        const dy = newY - y;

        if ( input[newY + dy]?.[newX + dx] && input[newY + dy][newX + dx] !== '#') {

          if (input[newY + dy][newX + dx] === '.') {

            input[newY + dy][newX + dx] = '#';
            total++
          } else {

            if (!overlappedAntis.has(`${newY + dy}:${newX + dx}`)) total++
            overlappedAntis.add(`${newY + dy}:${newX + dx}`)
          }
        }

        if ( input[y - dy]?.[x - dx] && input[y - dy][x - dx] !== '#') {

          if (input[y - dy][x - dx] === '.'){
            
            input[y - dy][x - dx] = '#';
            total++
          } else {

            if (!overlappedAntis.has(`${y - dy}:${x - dx}`)) total++
            overlappedAntis.add(`${y - dy}:${x - dx}`)
          }
        }
      }
    }
  }

}

for (let y = 0; y < input.length; y++) {

  for (let x = 0; x < input[y].length; x++) {

    if (input[y][x] !== '.' && input[y][x] !== '#') {

      searchAnti(x, y, input[y][x])

    }
  }
}

console.log(total)
