const { input } = require('./input.js')

let total = 0;

input.forEach((report) => {

  const levelList = report.split(' ');
  let asc = false;
  let safe = true;

  levelList.forEach((lvl, index) => {

    if ( index === 0 && Number(lvl) < Number(levelList[index + 1]) ) asc = true; 

    if ( index !== levelList.length - 1 ) {

      const diff = Number(lvl) - Number(levelList[index + 1]);

      if (asc) {
        if ( diff < -3 || diff > -1 ) safe = false;
      } else {
        if ( diff > 3 || diff < 1 ) safe = false;
      }
    }
  })

  if (safe) total += 1;
})

console.log(total);
