"use strict";
// 함수 인자로 넘어갈 때 값이 복사돼서 넘어감
// 1. call by value : deep copy
let changePrim = (num1) => {
  num1 = 3;
  return num1;
};

console.log(changePrim(10));
