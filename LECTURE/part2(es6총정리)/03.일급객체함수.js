"use strict";
// 일급 객체란?
// 다른 객체들이랑 똑같다는 말!
// 1. 매개변수 전달 가능
// 2. return문 출력도 가능 등등.....자스에선 함수도 가능하다

// 함수가 그저 함수가 아니라, 객체로서 존재한다.

// 👉 함수를 매우 유연하게 사용할 수 있다.

// ⭐️ (1) 변수에 함수를 할당할 수 있다. (다른 언어는 말이 안 됨)
// - 함수가 마치 값처럼 취급돼서 변수에 넣으면서 변수 이름으로 함수를 호출할 수 있다.
let printNum = (number) => number + 10;
// let printNum (선언부) = 이후가 함수부분 ==> 즉, 함수를 할당한다.

// ⭐️ (2) 인자로 함수를 전달할 수 있다 (callback함수) => 왜냐면? 값 처럼 사용되니까!!
// - 인자로 전달할 때는 그냥 함수 이름만.. 주소값으로 전달한다!
// - 호출은 함수 블록 내부에서만!
// - 호출을 한다는 건 return값을 전달하는거야!
// ❗️callback함수 : 다른 함수의 인자로 들어가는 함수(손님)❗️
// ❗️고차함수 : 함수를 인자로 받는 함수나, 함수를 return하는 함수 (주인)❗️

let sayHello = () => "안녕!";
let callFunc = (callback) => {
  return callback();
};

console.log(callFunc(sayHello)); // 함수 이름을 넣어줘야지 함수가 실행되지.
// 함수()를 넣으면 그 함수의 return값 "안녕!"을 넣는거라 인자에 문자열로 들어가.
// 그 문자열을 ()호출시키면 당연히 함수가 아니라고 하지

{
  const person = {
    name: "지성", // string
    age: 26, // number
    isMarried: false, // boolean
    sayHello: function () {
      // function
      return `안녕하세여! ${this.name}입니다!`;
      // ❗️화살표 메서드를 사용하면 this undefined먹음❗️
      // 아직 할당이 안 됐다는 건데...
      // 화살표 함수는 this를 바인딩하지 않는다. => undefined이다!
    },
    hobby: ["play1", "play2", "play3"],
  };

  console.log(person.name);
  console.log(person.sayHello());
}
