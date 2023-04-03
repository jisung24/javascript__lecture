"use strict";
// 주석 : js엔진(node에서는 v8엔진)이 해석을 하지 않는다.
// nodejs를 설치해야 브라우져 밖에서 사용할 수 있어.
// vs code에서 돌리려면 nodejs가 당연히 필요함!
console.log("hello world");

// ⭐️ 선언, 초기화, 할당 ⭐️
// let const 2015년 es6에서 새롭게 탄생!

// 👉 선언 (declare)
// - 컴퓨터 메모리에 공간을 만들어준다(컴퓨터에게 알린다)
// - var let const 이 3개의 keyword로 선언한다.

// 👉 초기화(initialization)
// - 즉, 변수 공간을 ram에 만들어줌 + undefined라는 값을 할당해줌.
// - 값이 할당이 돼야 그 변수가 참조될 수 있는데 따라서, 선언만 됐다면, 사용이 불가능
// - ❗️var은 선언과 동시에 초기화가 이루어져서, 선언때 사용이 가능하다❗️

// 👉 할당(assignment)
// - 변수에 값을 넣어줌 (원하는 값을 넣어줌)
// - js는 할당된 값에 따라서 타입이 결정된다.
// - const는 할당까지 돼야 사용될 수 있어서, 직접 할당을 무조건 해줘야 한다.

// 👉 변수 선언할 수 있는 2가지!
// var vs let
{
  var a = 10;
  a = 15;
  console.log(a);

  let b = 10;
  b = 100;
  console.log(b); // 이렇게 재할당도 당연히 변수니까 가능.
  // 차이가 없어보이지만 있음
}

// ⭐️ var vs let
// 결론은 var은 사용하지 말자~
// 👉 스코프 : 스코프 바깥에서는 같은 이름으로 재선언 해줘도 돼! let도...!
{
  // let은 블록 스코프 : 모든 블록에서 적용되는데, 블록 바깥에서 사용 불가능.
  // var은 함수 스코프 : 함수에서만 지역변수가 되고, 다른 모든 곳에선 전역변수 처럼 사용됨.
  var functionScopeVar = "hello world var!"; // ❗️전역변수처럼 사용됨 => 여긴 블록이니까 함수가 아님❗️
}
{
  console.log(functionScopeVar); // hello world var! 제대로 출력이 가능.
}
function main() {
  var x = 10;
  if (x) {
    var y = 10; // 전역변수 => 따라서 y 바깥에서 접근 가능하다.
  }
  console.log(y);
}
// console.log(x); // x is not defined => var은 함수 내부에서는 지역변수 처럼 사용되기 때문에, 다른 데서 접근이 불가능
// 즉, scope가 함수 범위야!

// ❗️ 정리 : var은 함수가 아니면 그냥 괄호를 다 벗겨줘도 됨. => 함수가 아니라면 전역변수야!
// ❗️ 정리 : let은 모든 블록에서 다 지역변수 처럼 사용됨 ⭕️
// tip : 스코프를 그냥 눈으로 한 번 쭉 색칠해보자... -> 그 scope 바깥에서 안으로 접근 불가능.
{
  let a = 10;
  if (true) {
    let a = 10000; // scope 밖에기 때문에 재선언이 가능하다!
    console.log(`a >> ${a}`);
  }
  console.log(`a2 >> ${a}`);
  let c = 10;
  {
    console.log(`c >> ${c}`); // 안에서 바깥쪽으로는 접근 가능
  }
}

// 👉 중복 선언 : 너무 안 좋은 거야...! 같은 스코프 내에서 같은 이름으로 또 생성
// var ⭕️
// let ❌

{
  var c = 100; // 전역변수
  var c = 1000;
  console.log(c);
}
{
  let c = 100;
  // let c = 1000; already declared
  // ❗️ 같은 스코프 내에서 같은 이름으로 선언 불가능하다 ❗️
  // 단 접근할 수 없는 다른 scope에서는 중복 선언이 가능하다.
}

// 👉 호이스팅 : 런타임 이전에, 변수 선언과 초기화를 분리해서 선언 부분만 scope최상단으로 끌어 올려주는 것!
// 하지만 var은 선언과, 초기화가 동시에 일어나서, 이미 공간 할당이 일어나고 undefined라는 값으로 초기화가 됐음.
// 그래서 바로 사용이 가능
{
  console.log(num);

  var num = 10;
}
// 를 아래처럼 생각하자..
{
  var num; // 이미 초기화가 된 상태임! 선언과 초기화가 동시에 발생함.
  console.log(num);
  num = 10;
}

// let
{
  let num = 10;
  console.log(num);
}
{
  // 즉 호이스팅이 되긴 하지만 아직 TDZ(t선언부터 초기화 시점 이전까지의 구간 => 아직 공간 할당이 되기 전!)
  // let은 run time때 초기화가 이뤄짐.. 그래서 TDX에 있는 변수를 ❗️참조❗️할 수 없음.
  //   let num; // ❗️let도 호이스팅이 돼! 근데 초기화까지는 시키지 않아.. 런타임때 초기화를 사용자가 직접 해 줌.
  //   // let name; // 아직 초기화 이전이니까 쓸 수 없다고 생각하자.. 1
  //   //
  //   console.log(num); // Cannot access 'num' before initialization
  //   num = 10;
}

// 정리
// let var 둘 다 호이스팅이 된다
// TDZ : 선언 - 초기화 이전까지 : 변수 참조를 할 수 없다.!

// const : let의 모든 장점 + 값을 재할당 할 수 없다! => 상수니까..
{
  const PI = 3.141592; // 무조건 할당을 해줘야 사용할 수 있어.
  console.log(PI);
  // PI = 3.17; // Assignment to constant variable.
  // console.log(PI);
}

// 하지만 상수에 할당된 값이 배열이나 객체면?
{
  const obj = {
    name: "지성",
    age: 26,
  };
  console.log(obj);
  obj.name = "김지성";

  // 객체는 주소값이 저장 돼 있기 때문에, 그 메모리 내부의 값은 변경할 수 있어.
  // 가리키고 있는 객체의 위치만 안 변하면 돼!
  // obj = {새로운 객체} 이건 안 돼.
  console.log(obj);

  // ❗️속성 변경도 막아주는 함수 => Object.freeze({객체})
  const obj2 = Object.freeze({
    // 읽을 수 만 있는 객체!
    name: "지성",
  });
  obj2.name = "jisung"; //  Cannot assign to read only property 'name' of object '#<Object>'
  console.log(obj2);
}
