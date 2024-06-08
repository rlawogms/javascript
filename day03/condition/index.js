// condition[조건]
// const a = Number(prompt('숫자입력'));
// if (a > 0) {
//   alert('0보다 큽니다.');
// } else if (a == 0) {
//   alert('0입니다.');
// } else {
//   alert('0 또는 0보다 작습니다.');
// }

// prompt로 영어 점수를 입력 받고
// 90점 이상 'a'
// 80점 이상 'b'
// 70점 이상 'c'
// 60점 이상 'd'
// 60점 미만 '나락'

// const score = Number(prompt('영어점수 입력'));
// if (score >= 90) {
//   alert('a');
// } else if (score >= 80) {
//   alert('b');
// } else if (score >= 70) {
//   alert('c');
// } else if (score >= 60) {
//   alert('d');
// } else {
//   alert('나락');
// }

// 유저에게 비밀번호 설정을 물어보고,

// 1. 비밀번호 길이가 8 글자 이상이고
// 2. 특수문자 !,#,$ 가 하나 들어가야 하고
// 3. I로 시작하고, T로 끝나아 하고 // I와T를 꼭 시작과 끝에 넣어야합니다.
// 위의 조건을 모두 통과하면 비밀번호 설정완료!

const password = prompt('비밀번호 입력');
const isLengthOver8 = password.length >= 8;
const hasSpecialChar = ['!','#','$'].some((v)={
    
});

const isValidIT = password.startsWith('I') && password.endsWith('T');

if(!isLengthOver8){
    alert("비밀번호가 짧아용");
} else if(!hasSpecialChar) {
    alert("특수문자 !#$가 포합되어있지 않습니다.");
} else if(!isValidIT) {
    alert("I와T를 꼭 시작과 끝에 넣어야합니다.")
} else {
    alert("비밀번호 설정완료!");
}

const special = ['!', '#', '$'];

special.some((v) => {
  // 하나라도 true이면 true
  return v == '!';
});

special.every((v) => {
  return v == '@';
});

const number = [1, 2, 3, 4, 5];
number.some((v) => {
  return v % 2 == 1;
});

number.every((v) => {
  return v < 6;
});
