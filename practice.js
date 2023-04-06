"use strict";
// -01. 최대공약수 구하는 법 !
let a = 10;
let b = 8;
let maximum = 0;
// 최대 공약수! => 8까지만 돌려서 8의 약수중에서 8로도 나눠지고, 10으로도 나눠지는 최대 수!
for (let i = 1; i <= Math.min(a, b); i++) {
  if (a % i === 0 && b % i === 0) {
    maximum = i; // 결국 가장 큰 값이 들어온다!
  }
}

console.log(maximum);

// -02) 거듭제곱
// 10의 3제곱
console.log(10 ** 3); // 이거 사용하자!
console.log(Math.pow(10, 3)); // 좀 더 무겁겠지..?
