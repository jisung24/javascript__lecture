"use strict";
// 데이터 타입
// js는 run time때 할당 된 값으로 결정이 된다.

// 선언은 run time이전에 되는데, 원래는 선언때 data type을 적어준다.
// int a = 10; 이런식으로...!

// 근데 js는 선언 때 type을 지정해주지 않아서 어쩔 수 없이,
// run time때 할당 된 값의 type으로 지정이 됨
// ❗️실제 run time때 데이터 타입이 결정된다❗️

// 타입

// 👉 number : 숫자(10진수(정수, 실수), 10진수 이외 , NaN, Infinity, -Infinity)
{
  // block scope
  let num1 = 10;
  console.log(`type >> ${typeof num1}`);
  console.log(parseFloat(num1) / 3);
}
{
  // 실수지만 type은 number
  let num1 = 3.14; //  scope밖이니까 상관없어.
  console.log(`type >> ${typeof num1}`);
}
{
  // 지수형
  let num1 = 2.5e5; // 2.5 * 10^5
  console.log(num1);
  console.log(typeof num1);
}
{
  // NaN : Not a Number (숫자가 아니다!)
  // 숫자가 아닌 지, 맞는 지 파악을 해주는 함수!
  console.log(isNaN(3)); // false면 숫자이고, true면 숫자가 아니다.
  console.log(10 / "안녕!"); // Not a Number

  let str = "12안녕!!53 5";
  str.split("").forEach((value, index) => {
    console.log(value, index, isNaN(value));
  });

  // 근데 isNaN 공백이 왜 숫자라고 뜨지...?
  // 0으로 인식하고 false를 반환한다.
}
{
  // 실수인지 아닌 지!
  // Number.isInteger(값) : 정수면 true, 아니면 false반환한다.
  console.log(Number.isInteger(parseInt(10 / 4))); //
}

// ❗️ 숫자인 지 아닌 지! => 좀 더 깊게 들어가서 숫자긴 숫자인데, 정수인 지 실수인 지!

{
  // 0으로 나누면 무조건 무한!
  console.log(10 / 0); // Infinity
  console.log(-10 / 0); // -Infinity
}

// 👉 string(문자열)
{
  let str = "dwdwdwdwdwdw";
  console.log(typeof str); // string
}
{
  // string의 다양한 기능
  let str = "hello world";
  console.log(str.length); // 11 (문자열의 길이 확인 : id pw check!)
  let str2 = "ddd";
  // 02 문자열 합치기 ( + 아니면 concat )
  {
    let result = str2 + str;
    console.log(result);
  }

  // 03 문자열 자르기
  {
    let result = str.slice(2, 7); // index 2번부터 6번까지
    console.log(result);
    console.log(str); // 원본은 건들지 않음.
  }

  // 04. 문자열 검색! indexOf, search
  {
    let searchResult = str.search("w"); // index 6번에 있습니다.
    console.log(searchResult);
  }

  // 05. ❗️문자열 대체 : replace❗️
  {
    let result = str.replace("l", "3"); // 가장 앞에 있는..!
    console.log(result);

    // 여러 개 바꾸기..!
    let str3 = "gogoHello!"; // o를 A로 바꾸기!
    let answer = "";
    for (let i = 0; i < str3.length; i++) {
      // 하지만 replace는 가장 앞에 있는 값을 바꿔서 전체 값을 return해줘...!
      if (str3[i] === "o") {
        let result = str3[i].replace(str3[i], "A");
        answer += result;
      } else {
        answer += str3[i];
      }
    }
    console.log(answer);
  }

  // 06. 문자열 분할해서 배열로 만들기
  {
    let str3 = "1 2 3 4 5 6 7 8 9 10 11";
    let splitArr = str3.split(" ").map(Number); // 정수 타입 배열!
    console.log(splitArr, typeof splitArr[3]);
  }
}

// 👉 boolean(인 지, 아닌 지!)
{
  // 프로그래밍 흐름이 달라지니까 중요!
  let trueValue = true;
  let falseValue = false;
  console.log(trueValue, falseValue, typeof trueValue, typeof falseValue);
}

{
  // ⭐️ Truthy vs Falsy (❗️매우 중요❗️)
  // 👉 6개빼고 전부 Truthy (falsy만 외우자..!)

  // falsy
  // 0, -0, undefined, null, ''(빈문자열), NaN

  console.log(!!0); // false
  console.log(!!-0); // false
  console.log(!!undefined); // false
  console.log(!!null); // false
  console.log(!!""); // false
  console.log(!!NaN); // false

  console.log(!!Infinity); // true
  console.log(!!-Infinity); // true
  console.log(!!{}); // true
  console.log(!![]); // true

  let func = () => {
    return gogo;
  };
  console.log(!!func); // true
}

// 👉 undefined : 아직 값이 할당 전이야!(할당 이전)
{
  console.log(varValue); // undefined!
  var varValue;
}
// 👉 null : 아무 값이 없는 걸로 할당이 된 거야! (할당 이후)
{
  let nullValue = null; // 완전히 비어있는 걸로 할당이 됐어!
  console.log("object" === typeof null); // typeof 찍으면 object가 찍힘..
}

// 여기까지 primitive type

// 이젠 object type! => 매우 중요!
// 함수 배열 모두가 object type임!

// object (객체)
{
  const obj = {
    name: "지성",
    age: 26,
  };
  console.log(obj.age, typeof obj);

  let arr = [1, 2, 3, 4];
  console.log(typeof arr); // object
}
