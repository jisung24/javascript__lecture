"use strict";
// 함수 : input과 output을 가지고있는 기능의 단위
// 여러군데에서 재활용을 해야한다!

// 함수 선언문 : 선언! 이기 때문에, 역시 호이스팅이 됨. => 선언 부분이 스코프의 가장 위로 올라가는게 호이스팅이니까!
console.log(add(4, 3)); // 7이 잘 출력됨. (선언문은 호이스팅이 되기 때문이다)
function add(num1, num2) {
  // 기본 파라미터 값은 undefined이다.
  return num1 + num2 || 0; // undefined가 나오면 0을 출력해주세요~
}
console.log(add()); //

// 함수 표현식 (hoisting 안 됨. 즉, 무조건 호출이 아래에서 이루어져야 함.)
let add2 = (num1, num2) => num1 + num2;

// 단축평가

// 👉 파라미터 && 인자
// 파라미터 종류
// 👉 default parameter : 원래 파라미터의 default값은 undefined인데 값을 10으로 바꿈!
let defaultParameter = (num1 = 10) => num1;
console.log(defaultParameter()); // 값을 안 넣어도 10으로 default됨

// 👉 rest parameter
let printNumbers = (...numbers) => numbers; // 배열로!
console.log(printNumbers(1, 2, 3, 4, 5, 6, 7, 8));
