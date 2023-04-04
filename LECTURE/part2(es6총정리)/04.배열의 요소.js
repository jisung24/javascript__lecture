"use strict";
// 마찬가지로 함수는 객체의 값 뿐 만 아니라, 배열의 요소로도 쓸 수 있다.

const myArr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];

console.log(myArr[0](1, 2));

// 일급 객체로서의 함수 5번째

// 자 함수에 괄호가 쳐져있으면 그 return값으로 대체 됐다고 쉽게 생각하자!
// let add = (a, b) => a + b
// add(2,3) => 괄호있지? 2 + 3 이라고 대체 됨.
