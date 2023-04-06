"use strict";

// 정렬!

let arr = [3, 2, 1, 5, 6, 3];
let sortedArr = arr.sort((a, b) => {
  if (a > b) return -1; // 안 바꿈
  else if (a < b) return 1; // 바
});
console.log(sortedArr);

{
  let arr = ["car", "def", "Zdwdwa", "Avsc", "adwd", "dde"];
  let spellSort = arr.sort((a, b) => {
    if (a.toUpperCase() > b.toUpperCase()) return 1; // 바꿈
    else if (a.toUpperCase() < b.toUpperCase()) return -1;
  });
  console.log(spellSort);
}
