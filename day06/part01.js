const { input }  = require("./input");

let directions = {
  '^': [-1, 0],
  '>': [0, 1],
  'v': [1, 0],
  '<': [0, -1],
};

const areaList = input.map(x => x.split(''));

let guardPos;
let guardLvl;

// Get guard initial position
guardLvl = areaList.findIndex(lvl => {
  
  guardPos = lvl.findIndex(pos => pos === '^');
  if (guardPos !== -1) return true
});

const movePos = () => {
  areaList[guardLvl][guardPos] = 'X';
  guardLvl += direction[0];
  guardPos += direction[1];
  areaList[guardLvl][guardPos] = guardDirection;
};

let guardDirection = '^';
let total = 0;
let direction;
const directionList = Object.keys(directions);

let isInArea = true;
while (isInArea) {

  direction = directions[guardDirection];
  let nextPosEl = areaList[guardLvl + direction[0]]?.[guardPos + direction[1]];

  if ( nextPosEl === '.' ) {
    movePos();
    total += 1;

  } else if ( nextPosEl === '#' ) {
    guardDirection = directionList[directionList.indexOf(guardDirection) + 1] ?? '^';

  } else if ( nextPosEl === 'X' ) {
    movePos();

  // Guard is out of bounds
  } else {
    areaList[guardLvl][guardPos] = 'X';
    total += 1;

    isInArea = false;
  };
};

console.log(total);