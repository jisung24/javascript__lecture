"use strict";
// 실행 컨텍스트
// 스코프 호이스팅 클로져등을 이해할 수 있다.

// ES6문법
// 👉 변수 선언(컴퓨터에 변수이름을 알리는 순간!) 방법
// 1. let const (재할당 가능 or 불가능)

// 2. 화살표 함수 (arrow function)
// - 함수 선언문(선언이니까 호이스팅 가능)
// - 함수 표현식(호이스팅 불가능)
// - arrow function
{
  let sum = (num1) => num1;
}

// 3. 삼항연산자
let myName = "김지성";
console.log(myName === "김지성" ? "맞아!" : "아닙니다..");

// 4. 단축평가
let value = undefined;
console.log(value || "앞 값은 falsy값 입니다!");

let num = 1;
console.log(num && `num >> ${num}`);

// 5. 구조분해할당 : 구조를 찢어서 다 할당한다.!
// 배열이나 객체의 속성을 다 흩어지게 해서 그 값들을 변수에 담을 수 있게 함!
{
  let arr = [1, 2, 3, 4]; // 배열의 구조를 분해를 해서 다른 변수에 할당을 했다.
  // 할당받을 변수가 더 많다면 할당 할 값이 없어서 undefined가 뜨겠지..?
  let [a, b, c, d, e = 4] = arr;
  console.log(...arr);
  console.log(a, b, c, d, e); // e에는 할당이 아직 안 됐어!

  let jisung = {
    name: "지성",
    age: 26,
  };

  // 객체
  let { name, age } = jisung; // 각 속성을 분해할 수 있다.
  console.log(name, age);

  // 객체 key와 값이 일치할경우...!
  let myName = "지성";
  let me = {
    myName,
    // myName = myName이라는 변수
  };
  console.log(me);
}
