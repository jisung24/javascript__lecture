"use strict";

let absolutes = [1, 2, 3];
let signs = [false, false, true];

let sum = (absolutes, signs) => {
  let sum = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      sum -= absolutes[i];
    } else {
      sum += absolutes[i];
    }
  }
  return sum;
};

console.log(sum(absolutes, signs));
