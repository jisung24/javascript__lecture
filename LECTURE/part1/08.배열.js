"use strict";

// 01 생성
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1-2 크기 지정
{
  let numbers = new Array(5); // 크기가 5인 empty length선언!
  console.log(numbers);
}

// 2. 요소 접근 (배열의 최대 장점 : O(1)로 접근이 가능)

// 3. 배열 메서드
{
  // push unshift (맨 뒤, 맨 앞 값 추가)
  // pop shift (맨 뒤, 맨 앞 제거)
  // splice(중간 추가 삭제)
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.pop());
  console.log(arr.shift());
  console.log(arr);
  console.log(arr.splice(0, 2, "index0번 삭제", "index 1번 삭제")); // 0번부터 index 1번까지 삭제
  console.log(arr);

  // slice : 원본을 바꾸지 않고 그냥 잘라서 가져옴!
  console.log(arr.slice(1)); // index 1번 부터 끝까지!
}
{
  // forEach, map, filter, reduce, find, 등등...!
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evens = numbers.filter((ele) => ele % 2 === 0); // 짝수만!
  let odds = numbers.filter((ele) => ele % 2 === 1); // 홀수만!
  let allPlusOne = numbers.map((ele) => ele + 1);
  console.log(evens, odds, allPlusOne);
}

// for break continue
{
  let arr = [1, 2, 3, 4, 5];
  arr.forEach((value, index) => {
    if (index % 2 === 0) {
      console.log(arr[index]);
    }
  });
}
