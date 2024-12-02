// SOLUTION NOT WORKING ON SOME EDGE CASES, WILL FIX LATER
const { input } = require('./input')

let total = 0;

input.forEach((report) => {

  const levelList = report.split(' ');
  let asc = false;
  let tolerations = 0;

  levelList.forEach((lvl, index) => {
    
    if ( index === 0 && Number(lvl) < Number(levelList[index + 1]) ) asc = true; 

    if ( index !== levelList.length - 1 ) {

      const diff = Number(lvl) - Number(levelList[index + 1]);

      if (asc) {
        if ( diff < -3 || diff > -1 ) tolerations += 1;
      } else {
        if ( diff > 3 || diff < 1 ) tolerations += 1;
      }
    }
  })

  if (tolerations < 2) total += 1;
})

console.log(total);