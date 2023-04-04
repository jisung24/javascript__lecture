"use strict";
// 삼항연산자
let x = 10;
x === 10 ? console.log("10맞아요!") : console.log("아닙니다.");

// switch
let month = 4;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31일!");
    break;
  case 2:
    console.log("윤년이면 29일 아니라면 28일!");
    break;
  default:
    console.log("30일!");
    break;
}

// 단축평가
let x1 = 10;
console.log(x1 > 0 && "앞 값이 맞으면 이 값을 출력입니다!");
console.log(x1 < 0 || "앞 값이 틀리면 이 값을 출력입니다!");

let y = undefined; // 무조건 초기화를 이렇게 해줘야 돼 let은..!
let z = y || 40; // y가 falsy값이라서 40이 들어감!
console.log(z);
