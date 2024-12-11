const { input } = require('./input')

let finalDisk = '';
let idCounter = 0;
let lastId = Math.floor(input.length / 2)
let lastBlocks = []
let str = input
let total = 0;
let index = 0;

for (let i = 0; i < str.length; i++) {

  if (i % 2 === 0) {

    finalDisk += `${String(idCounter).repeat(str[i])}`
    for (let k = 0; k < str[i]; k++) {
      total += idCounter * index
      index++
    } 
    idCounter++

  } else {

    while (lastBlocks.length < str[i]) {
      const newLastBlocks = Array(Number(str[str.length - 1])).fill(lastId)
      lastBlocks.unshift(...newLastBlocks)
      lastId--
      str = str.slice(0, -2);
    }

    for (let j = 0; j < str[i]; j++) {
      const block = lastBlocks.pop()
      finalDisk += block
      total += block * index
      index++
    }
  }
}

lastBlocks.reverse().forEach(x => {
  finalDisk += String(x);
  total += x * index;
  index++
})

console.log(total)