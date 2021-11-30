// 문제 1

function gugudan(n) {
  for (let i = 1; i < 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
  // 숫자 n을 입력받아서 구구단 n단을 출력하는 함수 작성
}

gugudan(Math.floor(Math.random() * 10));

// 문제 2
console.log('어레이');
function star() {
  let starArray = ['*', '**', '***', '****', '*****'];
  for (let i = 0; i < 5; i++) {
    console.log(starArray[i]);
  }
  // console.log로 아래 모양처럼 * 찍기 힌트 - for문 두번 사용
  //*
  //**
  //***
  //****
  //*****
}
star();

console.log('문자열 추가');
function star2() {
  let starCh = '';
  for (let i = 0; i < 5; i++) {
    starCh += '*';
    console.log(starCh);
  }
}

star2();

console.log('리피트');

function star3() {
  for (let i = 1; i < 6; i++) {
    console.log('*'.repeat(i));
  }
}

star3();
