const { orderList, updateList } = require("./input");

const orderHash = {};

orderList.forEach(num => {
  const [ firstNum, secondNum ] = num.split('|');
  if (!orderHash[firstNum]) orderHash[firstNum] = new Set();
  orderHash[firstNum].add(secondNum);
});

const checkUpdate = (update) => {
  let safe = false;
  let isIncorrect = false;

  while (!safe) {
    safe = true;

    for (let i = 1; i < update.length; i++) {

      if (orderHash[update[i]]) {

        for (let y = 0; y < i; y++) {

          if (orderHash[update[i]].has(update[y])) {

            safe = false;
            isIncorrect = true;

            const temp = update[i];
            update[i] = update[y];
            update[y] = temp;

            break
          };
        };
      };
    };
  };
  return isIncorrect ? Number(update[Math.ceil(update.length / 2) - 1]) : 0
};

const total = updateList.reduce((acc, val) => {
  const update = val.split(',');
  return acc += checkUpdate(update)
}, 0);

console.log(total);