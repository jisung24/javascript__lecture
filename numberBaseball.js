"use strict";
// 무조건 3개는 입력을 받아야 하고, 해당 조건일 때 아니면 입력을 받지 말아버려
// 그럼 언젠간 받겠지 그치?

let map = new Map();

while (map.size < 3) {
  let randomValue = parseInt(Math.random() * 10);

  if (map.has(randomValue) === false) {
    map.set(randomValue, map.size); // index까지 같이 넣어줌!
  }
}
const readline = require("readline");
let i = 1;
while (i < 5) {
  let input = [];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(`${i}번째 시도!`, (answer) => {
    input.split("").map(Number);
  });
}
