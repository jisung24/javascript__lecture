"use strict";

// Map 자료구조
// 객체는 항상 key가 string type이었다면 Map은 다양한 type의 Key가 존재한다.
let obj1 = {
  1: "value", // 형 변환이 돼서 '1'로 출력이 돼..!
};

let makeObj = (key, value) => {
  return {
    [key]: value,
  };
};
// console.log(makeObj("이름", "김지성"));
// console.log(obj1);

// MAP
let map = new Map();
let arr = [
  1, 1, 1, 2, 2, 1, 2, 2, 3, 3, 1, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 2, 3, 3,
  1, 1, 3,
];

// 값 setting!
arr.forEach((value) => {
  if (map.has(value)) {
    // 값이 있을 경우,,!
    map.set(value, map.get(value) + 1);
  } else {
    // 값이 없을 경우..!
    map.set(value, 1);
  }
});
console.log(map);

// size : 키의 개수 구하기!
console.log(map.size); // 3

// delete : 키 삭제!
// map.delete(1);
// console.log(map);

// clear : 전부 삭제!
// map.clear();
// console.log(map);

map.forEach((value, key) => {
  console.log(`key >> ${value}, idx >> ${key}`);
});
