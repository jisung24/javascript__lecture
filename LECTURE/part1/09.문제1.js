"use strict";
let s = "Pyy";

/**
 * ⭐️ PY의 개수를 판단해서 같다면 true, 다르다면 false ⭐️
 * @param {*} str : 입력받을 문자열
 * @returns : PY의 개수가 같다면 true, 아니라면 false
 */
let countOfPY = (str) => {
  let capitalized = str
    .toUpperCase()
    .split("")
    .reduce(
      (acc, cur) => {
        if (cur === "P") {
          acc[0] += 1;
        } else if (cur === "Y") {
          acc[1] += 1;
        }

        return acc;
      },
      [0, 0]
    );

  return capitalized[0] === capitalized[1] ? true : false;
};

console.log(countOfPY(s));
