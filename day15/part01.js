const { board, moves } = require('./input');

const directions = {
  v: [1, 0],
  '^': [-1, 0],
  '>': [0, 1],
  '<': [0, -1],
};

// Initial position
let posY = Math.floor((board.length - 1) / 2);
let posX = Math.floor((board[0].length - 1) / 2);

for (let move of moves) {
  let dy = directions[move][0];
  let dx = directions[move][1];

  let i = 1;
  while (board[posY + dy * i][posX + dx * i] === 'O') {
    i++;
  }

  if (board[posY + dy * i][posX + dx * i] === '.') {
    board[posY + dy * i][posX + dx * i] = 'O';
    board[posY + dy][posX + dx] = '@';
    board[posY][posX] = '.';

    posY += dy;
    posX += dx;
  }
}

let total = 0;
for (let y = 1; y < board.length - 1; y++) {
  for (let x = 1; x < board[y].length - 1; x++) {
    if (board[y][x] === 'O') total += 100 * y + x;
  }
}

console.log(total);
