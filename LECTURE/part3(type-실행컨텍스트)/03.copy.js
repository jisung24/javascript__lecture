// 값을 복사하는 방법
// - 그 메모리의 주소값을 복사하는 지 => 즉, 같은 공간을 가리키는 지
// - 메모리의 값만 복사해서 새로운 공간에 할당 해주는 지!

// 👉 deep copy : 깊은 복사(따로따로)
// 👉 shallow copy : 얕은 복사(공동소유 => 완전히 똑같아짐! 이라고 봐도 돼 a를 바꾸면 b도 바뀌기 때문)

// 즉, shallow는 주소값 자체를 복사, deep copy는 새로운 공간에 값을 복사.

// 원시 값은 원래 깊은 복사
// 객체 값은 얕은 복사가 이루어짐
{
  // 원시 값은 무조건 깊은 복사
  let a = 10;
  let b = a; // 값을 복제해서 새로운 공간에 할당!
  b = 11;
  console.log(`a >> ${a}`);
  console.log(`b >> ${b}`); // 기존 값에 영향을 주지 않음!
}

// 객체의 얕은 복사
{
  const jisung = { name: "kim jisung", age: 26 };
  const jisungKim = jisung;
  jisungKim.name = "Kim Jisung!";
  console.log(jisung, jisungKim);

  const arr = [1, 2, 3, 4, 5, 6];
  const arr2 = arr;
  arr2[3] = 1000000;
  console.log(arr, arr2);
}

{
  // 1차원은 깊은 복사 2차원은 얕은 복사!
  // 1. spread
  // 2. slice
  // 3. Object.assign
  let jisung = {
    name: "지성",
    contact: {
      phone: "010~~~~",
    },
  };
  let me = { ...jisung }; // 1차원까지는 깊은 복사, 2부턴 얕은 복사
  me.contact.phone = "12121";
  console.log(jisung.contact.phone);
  console.log(me.contact.phone); // 같이 변함!

  //   let ji3 = jisung.slice();
  //   ji3.contact.phone = "dwdwdawdaw";
  //   console.log(ji3.contact.phone);
}
{
  // ❗️JSON.parse(문자열을 객체로!) && JSON.stringify(객체를 문자열로)❗️
  // 🟡❗️2차원을 넘어가도 이건 깊은 복사가 실행 됨❗️🟡
  // 를 이용한 깊은 복사!
  let a = {
    name: "mike",
    age: 26,
    email: "dwdawdwadwadwad",
    contact: {
      phone: {
        myphone: "3232323232323232",
      },
    },
  };
  let b = JSON.parse(JSON.stringify(a));
  console.log(b);
  b.contact.phone.myphone = "98978969646565";
  console.log(a, b);
}

// 🔴 복사 정리 🔴
// 1. 원시 값은 깊은 복사(값 복사), 객체는 얕은 복사가 이루어짐(주소값 복사)
// 2. 근데 객체도 원본이 수정되지 않게 하기 위해서, 깊은 복사를 지원해줌.

// (3) 객체의 깊은 복사
// - spread 연산자 (1차원만 깊은 복사)
// - Object.assign(1차원만 깊은 복사)
// - 배열은 slice()로도 깊은 복사 가능 (단! 1차원 만 깊은 복사 => 2차원 부턴 얕은 복사)
// - ❗️JSON.parse(JSON.stringify(객체)) : 2차원 이상도 전부 깊은 복사 해 줌! ===> 🔴 깊은 복사 그 자체 🔴

{
  // slice를 이용한 배열 복사 : 2차원 부터는 얕은 복사..!
  let arr = [1, 2, 3, 4, [5, 6]];
  let arr2 = arr.slice();
  arr2[arr2.length - 1][0] = 4444444; // 원본까지 변함
  console.log(arr, arr2);

  let arr3 = JSON.parse(JSON.stringify(arr));
  arr3[arr3.length - 1][0] = 222222222;
  console.log(arr, arr2, arr3); // arr3만 따로! => 깊은 복사 수행됨!
}
