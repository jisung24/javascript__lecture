"use strict";
// 단축 속성명!
// 객체에서 같은 이름의 변수가 들어 올 경우, 생략해도 된다.
const name = "abc";
const age = 30;

// const obj = {
//   name,
//   age : newAge, // 얘는 생략 불가능
// };

const obj = { name, age }; // 이렇게 생략이 가능해! => 이거 속성, 값 단축시킨거니까 잘 이해하자!
console.log(obj);
// 언뜻 보면 배열처럼 느껴질 수 있어.
// 그리고 구조분해 할당은 {name, age} = obj이거야!!!

// 스프레드 연산자 (...)
{
  let arr = [1, 2, 3, 4];
  console.log(arr);
  console.log(...arr);

  console.log([...arr, 4, 5]);

  // 배열의 복사, concat기능도 가능하다.!
  let arr1 = [1, 2, 3];
  let arr2 = [9, 8, 7];
  console.log([...arr1, ...arr2]);

  let arr3 = [4, 5, 6];
  let arr4 = [...arr3]; // deep copy!
  console.log(arr4);
}

// 객체의 스프레드 연산자!
// 복사도 가능, concat
{
  let obj = {
    name: "지성",
    age: 26,
  };

  let obj2 = { ...obj };
  console.log(obj2);
}

// rest parameters
let nums = [1, 2, 3, 4];

let printNums = (...nums) => nums.map(String);
// ...nums는 안 돼! => 여러 개의 값을 return할 수 없음!
console.log(printNums(...nums));

let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let printNums2 = (a,b,c,...rest) =>

// 템플릿 리터럴 : 벡틱을 사용함
// - 줄바꿈 기능
