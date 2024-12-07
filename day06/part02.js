// UNFINISHED
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

const simulateObstacle = () => {
  let isChecking = true
  let newGuardDirection = directionList[directionList.indexOf(guardDirection) + 1] ?? '^'
  let newGuardLvl = guardLvl
  let newGuardPos = guardPos
  const visitedSet = new Set()
  while (isChecking) {
    let newDirection = directions[newGuardDirection];
    let nextPosEl = areaList[newGuardLvl + newDirection[0]]?.[newGuardPos + newDirection[1]];
    let nextPos = `${newGuardLvl + newDirection[0]},${newGuardPos + newDirection[1]}`
    
    //console.log(nextPosEl)
    if ( nextPosEl === 'X' || nextPosEl === '.' ) {
      newGuardLvl += newDirection[0]
      newGuardPos += newDirection[1]
      
    } else if ( nextPosEl === '#' ) {
      if (visitedSet.has(nextPos)) {
        return true
      }
      visitedSet.add(nextPos)
      newGuardDirection = directionList[directionList.indexOf(newGuardDirection) + 1] ?? '^';
    } else if ( nextPosEl && '^<>v'.includes(nextPosEl)) {
      return true
    } else {
      return false
    }
    //console.log(nextPosEl)
  } 
}

let guardDirection = '^';
let total = 0;
let direction;
const directionList = Object.keys(directions);

let isInArea = true;
while (isInArea) {

  direction = directions[guardDirection];
  let nextPosEl = areaList[guardLvl + direction[0]]?.[guardPos + direction[1]];

  if ( nextPosEl === '.' || nextPosEl === 'X' ) {
    movePos();
    if (simulateObstacle()) total += 1
    console.log(total)

  } else if ( nextPosEl === '#' ) {
    guardDirection = directionList[directionList.indexOf(guardDirection) + 1] ?? '^';

  } else {
    areaList[guardLvl][guardPos] = 'X';

    isInArea = false;
  };
};

console.log(total);