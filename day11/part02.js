// NOT FINISHED
const { input } = require('./input')
let str = input

for (let i = 0; i < 75; i++) {
  console.log(i)

  for (let j = 0; j < str.length; j++) {

    if (str[j] === 0) {
  
      str[j] = 1
  
    } else if (String(str[j]).length % 2 === 0) {
  
      const firstHalf = String(str[j]).slice(0, String(str[j]).length / 2)
      const secondHalf = String(str[j]).slice(String(str[j]).length / 2)
      str.splice(j, 1, Number(firstHalf), Number(secondHalf))
      j++
  
    } else {

      str[j] *= 2024

    }
  }
}
