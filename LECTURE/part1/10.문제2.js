"use strict";

let absolutes = [1, 2, 3];
let signs = [false, false, true];

/**
//  *
 * @param {*} absolutes : 배열
 * @param {*} signs : 부호
 * @returns : 부호를 고려해서 계산한 값! a
 */
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
