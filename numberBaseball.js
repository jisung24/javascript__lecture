"use strict";
// 숫자야구 팀 과제 제출!

// 무조건 3개는 입력을 받아야 하고, 해당 조건일 때 아니면 입력을 받지 말아버려
// 그럼 언젠간 받겠지 그치?

let map = new Map();

while (map.size < 3) {
  let randomValue = parseInt(Math.random() * 10);

  if (map.has(randomValue) === false) {
    map.set(randomValue, map.size); // index까지 같이 넣어줌!
  }
}
console.log([...map.keys()]);

let readline = require("readline");

let r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let i = 1;
r.setPrompt(`${i}번째 시도!`);
i += 1;
r.prompt();
r.on("line", function (line) {
  r.setPrompt(`${i}번째 시도!`);
  i += 1;
  if (line == [...map.keys()].join("")) {
    // 'exit'을 입력받으면 끝!!!!
    console.log(`${i}번만에 맞히셨습니다!`);
    console.log("게임을 종료합니다");
    r.close();
  }
  // 여기에 로직을 넣으면 돼!!!
  let s = 0;
  let b = 0;
  for (let i = 0; i < line.length; i++) {
    if (map.has(Number(line[i])) && map.get(Number(line[i])) === i) {
      s += 1; // 둘 다 일치한다면 스트라이커를 늘려준다!
    } else if (map.has(Number(line[i])) && map.get(Number(line[i])) !== i) {
      // 일치하진 않아...
      b += 1;
    }
  }

  if (s === 0 && b !== 0) {
    console.log(`${b}B`);
  } else if (b === 0 && s !== 0) {
    console.log(`${s}S`);
  } else {
    console.log(`${b}B${s}S`);
  }
  r.prompt();
});
r.on("close", function () {
  process.exit();
});
