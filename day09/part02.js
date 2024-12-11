// WORKS ON TEST INPUTS BUT NOT ON REAL ONE
const { input } = require('./input')

let finalDisk = [];
let idCounter = 0;

for (let i = 0; i < input.length; i++) {

  if (i % 2 === 0) {
    
    const newBlocks = Array(Number(input[i])).fill(idCounter);
    finalDisk.push(...newBlocks);
    idCounter++;

  } else {

    const newSpaces = Array(Number(input[i])).fill('.');
    finalDisk.push(...newSpaces);

  }
}

let inputIndex = 0;
let total = 0;
console.log(finalDisk)

for (let i = 0; i < finalDisk.length; i++) {

  if (finalDisk[i] === '.') {
    let reverseInputIndex = input.length - 1
    let spaceAmount = input[inputIndex]
    let j = finalDisk.length

    while (spaceAmount > 0 && j > i) {
      j--
      if (finalDisk[j] === '.' || finalDisk[j] === 'X') {

        j -= Number(input[reverseInputIndex]) - 1
        reverseInputIndex--

      } else {

        if (input[reverseInputIndex] <= spaceAmount) {

          for (let k = 0; k < input[reverseInputIndex]; k++) {

            finalDisk[i + k] = finalDisk[j - k];
            finalDisk[j - k] = 'X'
            total += Number(finalDisk[i + k]) * (i + k)

          }

          spaceAmount -= Number(input[reverseInputIndex])
          i += Number(input[reverseInputIndex]) 

        }
        j -= Number(input[reverseInputIndex]) - 1
        reverseInputIndex--
      }
    }
    if (spaceAmount > 0) i += Number(spaceAmount)
    i--
    inputIndex++

  } else if (finalDisk[i] === 'X') {
  
    i += Number(input[inputIndex]) - 1;
    inputIndex++

  } else {
    total += Number(finalDisk[i]) * i
    if (finalDisk?.[i + 1] !== finalDisk[i]) inputIndex++
  }
}

console.log(total)