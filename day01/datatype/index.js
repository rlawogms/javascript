// const 변수이름 = 데이터[기본 + 참조]
// 기본 타입:숫자, 문자
// 타입 변환
// -1.숫자 타입
// const a = 7(숫자);
// const b = 3.14(숫자);
// const c = 12903812903(숫자);

//  -2.문자 타입
// const d = '아메리카노';
// const e = '바닐라라떼';
// const f = `민트초코렛`;
// const g = `내 최애 음료는: ${e}`;
// console.log(g);

// 프롬포트를 이용해서,
// 1. 당신의 mbti?
// 2. alert으로 당신의 mbti는 ~~, 최애 음식 ~~이군요!

// const mbti = prompt('당신의 mbti?');
// const food = prompt('최애 음식은?');
// alert(`당신의 mbti는 ${mbti}, 최애 음식은 ${food}이군요`);

// 오늘의 날짜는 무엇인가요?
// 오늘의 일정은 무엇인가요?
// 오늘의 날짜는 {}이고, {}을 하실 예정이시군요!

// const date = prompt('오늘 날짜는 무엇인가?');
// const plan = prompt('오늘의 일정은?');
// alert(`오늘의 날짜는 ${date}이고, ${plan}을 하실 예정이시군요!`);

// 첫번째 수 입력
// 두번째 수 입력
// 두 수의 합은 ~~입니다.

// const first_number = prompt('첫번째 수 입력');
// const second_number = prompt('두번째 수 입력');
// const num_first_number = Number(first_number);
// const num_second_number = Number(second_number);
// alert(
//   `${num_first_number} + ${num_second_number} = ${
//     num_first_number + num_second_number
//   }`
// );

// 1. 몇살이세요? -> 20
// html에 h1태그로된 2005년 이시군요

const age = prompt('몇살이십니까?');
const num_age = Number(age);
const h1 = document.createElement('h1');
h1.innerText = `${2024 - (age - 1)}년 이시군요`;
document.body.appendChild(h1);

// 2. 정사각형의 한변의 길이 -> 10
// html에 정사각형의 넓이는 100입니다.

const num = prompt('정사각형의 한별의 길이');
const num_num = Number(num);
const area = num_num * num_num;
const h1_tag = document.createElement('h1');
h1_tag.innerText = `정사각형의 넓이는 ${area}`;
document.body.appendChild(h1_tag);
