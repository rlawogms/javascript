// 번수(variable): 데이터를 기억하는 공간, 닉네임
// const 이름 = 데이터 [기억 한번만]
// let 이름 = 데이터 [기억 여러번]
// var 이름 = 데이터 [절대절대 쓰지말기]

// const a = 100;
// a = 200; (x)

// let b = 100;
// a = 200; (o)

//변수 이름 문법
// 1. 예약어[키워드] 안됨! ex) const const
// 2. 특수문자 안됨 _(언더바) 빼고
// 3. 숫자로 시작안됨 ex) const 1a(x) a1(o)
// 4. 띄어쓰기 안됨 ex) const mint choco -> const mintchoco
// 5. 변수이름 중복 안됨

// 변수 이름 국룰
// 1. 의미있는 단어로 사용
// ex) const a(x), const button(x), white_button
// 2. 두 단어 합칠때, 낙타표기법, 뱀표기법 사용
//  - 낙타: milkCoffee
//  - 뱀: milk_coffee
// 3. 소문자로 시작하기

const a = 1; // a는 1
const b = '사이다'; // b는 사이다

// 유저에게 내용과 색깔을 두개 각각 입력받고
// html에 h1~h3태그 각각 3개 만들기

const text = prompt('어떤내용?');
const color = prompt('어떤 색깔?');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');

h1.innerText = text;
h1.style.color = color;

h2.innerText = text;
h2.style.color = color;

h3.innerText = text;
h3.style.color = color;

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(h3);

// 유저에게 만들고 싶은 태그 물어보고
// 원하는 안의 내용도 물어보고
// 원하는 폰트 색깔 만들고,
// html에 만들기

const tag = prompt('만들고 싶은 태그는?');
const txt = prompt('안에 넣을 내용은?');
const font_color = prompt('폰트 색깔은?');
const html = document.createElement(tag);

html.innerText = txt;
html.style.color = font_color;

document.body.appendChild(html);
