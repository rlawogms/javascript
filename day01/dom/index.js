// js가 html을 만들기 위한 장소

// h1 태그 만들기
// const h1tag = document.createElement('h1');
// h1tag.innerText = '자바스크립트 수업중';
// document.body.appendChild(h1tag);

// 버튼을 만들고, 안의 내용은 클릭! body에 나타내기
// const button1 = document.createElement('button');
// button1.innerText = '클릭!';
// button1.style.backgroundColor = 'skyblue';
// button1.style.padding = '10px';
// button1.style.fontSize = '20px';
// document.body.appendChild(button1);

// const a = prompt('점심 뭐먹을거?');
// console.log(a);

// prompt로 배경색깔을 물어보고 헥사코드,
// ex) red, #ffefed
// div -> width: 100px, height: 100px, background: red

// const color = prompt('배경색깔이 뭐지?');
// const box = document.createElement('div');
// box.style.width = '100px';
// box.style.height = '100px';
// box.style.backgroundColor = color;
// document.body.appendChild(box);

// 폰트 색깔 물어보고
// 버튼 안에 들어갈 내용 물어보고
// 버튼을 html에 보여주기

// const font_color = prompt('폰트 색깔이 뭐지?');
// const text = prompt('버튼안에 들어갈 내용은?');
// const button = document.createElement('button');
// button.innerText = text;
// button.style.color = font_color;
// document.body.appendChild(button);

// 높이 물어보기 주의) 100px
// 넓이 물어보기
// 배경색 물어보기
// 안에 들어갈 내용 물어보기
// div태그로 위의 내용을 고려해서 나타내기

const height = prompt('높이 얼마(px)?');
const width = prompt('넓이 얼마(px)?');
const background_color = prompt('배경색은?');
const inner = prompt('안에 들어갈 내용은?');
const div = document.createElement('div');

div.style.height = height;
div.style.width = width;
div.style.backgroundColor = background_color;
div.innerText = inner;
document.body.appendChild(div);
