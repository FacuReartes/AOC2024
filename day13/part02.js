const { input } = require('./input');

let total = 0;

for (let i = 0; i < input.length; i += 3) {
  let [AX, AY] = input[i];
  let [BX, BY] = input[i + 1];
  let [PX, PY] = input[i + 2];

  PX += 10000000000000;
  PY += 10000000000000;

  // AX + BX = PX
  // AY + BY = PY
  // From here we just do row reduction of the matrix, finally getting A and B values

  // R1 <= R1(1/AX)
  BX = (1 / AX) * BX;
  PX = (1 / AX) * PX;
  AX = Number(((1 / AX) * AX).toPrecision(15)); // 1
  // R2 <= R1(-AY) + R2
  BY = BX * -AY + BY;
  PY = PX * -AY + PY;
  AY = Number((AX * -AY + AY).toPrecision(15)); // 0
  // R2 <= R2(1/BY)
  PY = Number(((1 / BY) * PY).toPrecision(15)); // B
  BY = Number(((1 / BY) * BY).toPrecision(15)); // 1
  // R1 <= R2(-BX) + R1
  PX = Number((PY * -BX + PX).toPrecision(15)); // A
  BX = Number((BY * -BX + BX).toPrecision(15)); // 0

  if (
    AX === 1 &&
    BX === 0 &&
    AY === 0 &&
    BY === 1 &&
    Number.isInteger(PX) &&
    Number.isInteger(PY)
  ) {
    total += PX * 3 + PY;
  }
}

console.log(total);
