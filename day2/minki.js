// 문제 1
// 숫자 n을 입력받아서 구구단 n단을 출력하는 함수 작성
function gugudan(n) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

gugudan(Math.floor(Math.random() * 10));

// // 문제 2
// console.log로 아래 모양처럼 * 찍기 힌트 - for문 두번 사용
//*
//**
//***
//****
//*****
function star() {
  let Test = '';
  for (let a = 0; a < 5; a++) {
    for (let b = 0; b <= a; b++) {
      Test += '*';
    }
    Test += '\n';
  }
  console.log(Test);
}
star();
