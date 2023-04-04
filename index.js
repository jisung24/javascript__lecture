// 자바스크립트 탄생 배경
// 웹 문서 html을 다루기 위해서 태어남 (조작하기 위해서! => 만들고 삭제하고 등등..)

// 어떻게 제어할 수 있을까?

// 브라우져 내부에는 html을 해석할 수 있는 렌더링 엔진이 있음
// 이 렌더링 엔진이 html을 싹 다 해석하고 html문서를 객체화 한다.
// 그걸 dom이라고 하며 js는 dom을 통해서만 html을 다룰 수 있다.

// 문서를 객체화 했다고 해서 문서 객체 모델 DOM이라고 한다.
// DOM은 TREE구조를 갖고있다 (상하관계)

// 브라우져란?
// html, css, javascript를 해석해서 내용을 화면에 보여주는 소프트웨어이다.

// 구성
// 브라우져 엔진 (렌더링엔진) ❗️가장 중요❗️
// 자바스크립트 엔진 (v8, 스파이더 몽키 등등..)
// 통신 모듈 (req res를 왔다갔다~)

// 브라우져 엔진
// 브라우져가 동작하는데 필요한 기반 기술!

// 종류
// Blink engine (크롬, 오페라, 삼성인터넷 등의 브라우져에서 사용)
// 웹킷 (사파리)

// ⭐️ 브라우져 해석 과정 ⭐️
// 1. dom tree 생성 : html을 해석해서 tree구조로 객체화 시킨 것! (이게 있어야 javascript로 제어가능)
// 2. cssom 트리 생성 : css를 스타일링 한다.
// 3. javascript실행 : javascript로 dom을 조작한다.
// 4. 렌더링 트리 생성 : dom과 cssom은 독립적이다. 두 가지를 결합해야 한다.
// 5. 레이아웃 생성

// 이 5가지를 계속 발동해서 html이 화면에 띄워지게 된다.
// csr은 저 중 3번이 가장 핵심이야! => js로 html을 그린다.
