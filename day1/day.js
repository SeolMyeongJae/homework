// 문제 1

function reverse() {
  // numbers 배열을 역순으로 console.log로 출력하는 reverse 함수 완성
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

// 실행 결과 10 9 8 7 6 5 4 3 2 1
reverse();

// 문제 2

// Student 무시
function Student(name, score) {
  return { name, score };
}

function score(students) {
  console.log(students);
  /*
  students 배열은 아래처럼 생김
[
  { name: '정민', score: 랜덤 },
  { name: '수민', score: 랜덤 },
  { name: '명재', score: 랜덤 },
  { name: '민기', score: 랜덤 },
  { name: '정훈', score: 랜덤 }
] 
점수가 90이상이면 A, 80이상 90미만이면 B, 70~80 C, 70미만 D를 이름이랑 같이 출력
*/
}

/* 실행결과 
정민, A
수민, B
명재, C
민기, C
정훈, D
*/

// 밑에 무시하셈
function Student(name, score) {
  return { name, score };
}

const students = [
  new Student('정민', Math.random() * 40 + 60),
  new Student('수민', Math.random() * 40 + 60),
  new Student('명재', Math.random() * 40 + 60),
  new Student('민기', Math.random() * 40 + 60),
  new Student('정훈', Math.random() * 40 + 60),
];

score(students);
