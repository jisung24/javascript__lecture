"use strict";

// ⭐️ 객체 생성 방법 ⭐️
// 👉 객체 리터럴
let person = {
  name: "jisung",
  age: 26,
};

delete person.age; // key 삭제
console.log(person);
// 👉 생성자 함수
// 👉 class : 여러 개 만들고싶을 때!

// ⭐️ 객체 메소드 ⭐️
// -1) Object.keys : 키 들을 모아서 배열로!
// -2) Object.values : 값 들을 모아서 배열로!
// -3) Object.entries : 키, 값 들을 모아서 2차원 배열로!
// -3) Object.assign : 객체를 복사한다. ...를 사용해도 돼!

{
  let obj2 = {
    name: "지성",
    age: 26,
    major: "comEngineering!",
    contact: {
      phone: "010-9287-6446",
    },
  };
  console.log(Object.entries(obj2));
  let arr = Object.entries(obj2);
  console.log(arr[2][0]);

  console.log({ ...obj2 } === obj2); // 주소값이 달라서 다르다고 표시 됨!
  console.log({ ...obj2, add: "추가된 속성" });
  console.log(Object.assign(obj2, { add: "dwdwdwd" }));

  // 그럼 주소값으로 비교하지 말고 문자열로 바꾸면 내용물로 같은 지 아닌 지 비교가능!
  console.log(JSON.stringify(obj2) === JSON.stringify({ ...obj2 })); // true
}
