"use strict";
// primary type
// - number
// - string
// - boolean
// - null
// - undefined
// - symbol

// 레퍼런스 타입 (참조한다)
// - Array
// - function
// - date
// - RegExp
// - Map, set 등등

// 나누는 기준
// - 값의 저장방식 : 메모리에 어떻게 저장되고, 어떻게 복제가 되는지!
// - 불변성의 여부 : 값이 불변하는지 변경이 되는 지!

// 메모리, data

// bit : 0과 1을 가지고있는 한 칸!
// byte : 8칸!
// ❗️컴퓨터가 bit단위로 계속 메모리를 찾아다니면서 하면, 너무 좀 세부적이야
// ❗️그래서 8개씩 묶어서 최소 단위라고 생각하고 읽는다.
// 🔴 0과 1을 표현하는 bit를 모두 찾기에는 부담이 너무 크다❗️

// memory
// - 값 저장 : 자바스크립트는 8byte로 그냥 싹 다 저장
// - 즉, 개발자가 변수의 크기까지 신경써줘야 할 시대는 아니다.
