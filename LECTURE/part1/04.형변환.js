"use strict";

// 암시적 형 변환
// -> 의도하지 않았지만 엔진이 자동으로 바꿔준다.

// 암시적 형 변환 예시
// 👉 string
{
  let result = 1 + "2";
  // 숫자 + 문자 = 문자열로 자동으로 암시적으로 형 변환이 됨.
  console.log(`결과 >> ${result}, ${typeof result}`); // string

  let result2 = true + "hello";
  console.log(result2, typeof result2); // "truehello"가 됨!
  // 역시 문자열에 더하면 정수 뿐 아니라 boolean도 string이 됨.

  // ❗️문자열과 다른 data type(객체도 포함)이 더하기 연산자를 만나면 문자열이 우선시 된다❗️
  console.log(typeof ("4" + {})); // string
  console.log(typeof ("dwdwd" + [])); // string
}

// 👉 number
{
  let result = 1 - "2"; // +였다면 12가 출력이 됐겠지만 -니까 이번엔 문자열이 number로 암시적 형변환 됨.
  console.log(result, typeof result); // -1이 됨.

  let result2 = "2" * "3";
  console.log(result2, typeof result2); // number 6

  // + 이외 연산자들이 나왔다면 모든 값들이 일단 number로 한 번 바껴...!
  console.log(typeof ({} - {}), {} - {}); // number(값은 NaN)가 됨
  console.log(typeof ([] - [])); // number(value = NaN)가 됨
  console.log(typeof (null - undefined), null - undefined); // number NaN
}

// 명시적 형 변환
// -> 개발자가 의도적으로 바꾼다.

// 1. 숫자로 바꾸기 (Number(값))
console.log(Number("dwdwdw")); // NaN , number로 바뀜

// 2. 문자열 (String(값))
console.log(String(4), typeof String(4));

// 3. 불린(Boolean(값)) : truthy, falsy로 바뀜

// falsy값
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// truthy값
// falsy값을 제외하고 모든 값
