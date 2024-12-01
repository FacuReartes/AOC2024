const { col1, col2 } = require('./input.js')

let total = 0;

col1.forEach(firstNum => {
  col2.forEach(secondNum => {
    if (firstNum === secondNum) total += Number(firstNum)
  })
})

console.log(total)