"use strict";
let s = "Pyy";

/**
 * ⭐️ PY의 개수를 판단해서 같다면 true, 다르다면 false ⭐️
 * @param {*} str : 입력받을 문자열
 * @returns : PY의 개수가 같다면 true, 아니라면 false
 */
let countOfPY = (str) => {
  let capitalized = str
    .toUpperCase() // Pp PP
    .split("") // str => arr ['P','Y,'Y'];
    .reduce(
      // only array
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

// 합
{
  let arr = [1, 2, 3, 4, 5, 6];
  let reduceArr = arr.reduce((acc, cur) => {
    return acc * cur;
    // acc = 1

    // cur = 2
    // cur = 3 4 5 6
  });
  console.log(`합 >> ${reduceArr}`);
}
