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

        let dx1 = 0;
        let dy1 = 0;
        let counter1 = 0

        while ( input[newY + dy1]?.[newX + dx1] ) {

          if ( input[newY + dy1][newX + dx1] !== '#') {
  
            if (input[newY + dy1][newX + dx1] === '.') {
  
              input[newY + dy1][newX + dx1] = '#';
              total++
            } else {
  
              if (!overlappedAntis.has(`${newY + dy1}:${newX + dx1}`)) total++
              overlappedAntis.add(`${newY + dy1}:${newX + dx1}`)
            }
          }

          counter1++
          dx1 = dx * counter1
          dy1 = dy * counter1

        }

        let dx2 = 0;
        let dy2 = 0;
        let counter2 = 0;
        while( input[y - dy2]?.[x - dx2] ) {

          if ( input[y - dy2]?.[x - dx2] && input[y - dy2][x - dx2] !== '#') {
  
            if (input[y - dy2][x - dx2] === '.'){
              
              input[y - dy2][x - dx2] = '#';
              total++
            } else {
  
              if (!overlappedAntis.has(`${y - dy2}:${x - dx2}`)) total++
              overlappedAntis.add(`${y - dy2}:${x - dx2}`)
            }
          }

          counter2++
          dx2 = dx * counter2;
          dy2 = dy * counter2
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
