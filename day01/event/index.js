// Event

// const button = document.createElement('button');
// button.innerText = 'click';

// button.addEventListener('click', () => {
//   window.alert('ㄹㅇㅋㅋ');
// });

// document.body.appendChild(button);

//div 태그 - width:100px, height:100px, bg: red
//         - 클릭을 하면, bg: blue

// const div = document.createElement('div');
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.backgroundColor = 'red';
// div.addEventListener('click', () => {
//   div.style.backgroundColor = 'blue';
// });

// document.body.appendChild(div);

// button 태그 만들고, 글은 '파란상자'
// event 클릭을 하면, html div w:100, h:100, bg:blue 생김

// const button = document.createElement('button');
// button.innerText = '파란상자';

// button.addEventListener('click', () => {
//   const div = document.createElement('div');
//   div.style.width = '100px';
//   div.style.height = '100px';
//   div.style.margin = '10px';
//   div.style.backgroundColor = 'blue';
//   document.body.appendChild(div);
// });
// document.body.appendChild(button);

// 버튼을 3가지 만들고, 각각 이름은 사이트 색깔 이름 넣기
// div: 100px 100px bg: black
// 각각 클릭을 하면, 위의 div 태그의 bg가 클릭한 이름의 색깔로 변경하기

// const btn1 = document.createElement('button');
// const btn2 = document.createElement('button');
// const btn3 = document.createElement('button');
// const div = document.createElement('div');

// btn1.innerText = '#e74c3c';
// btn2.innerText = '#e67e22';
// btn3.innerText = '#f1c40f';

// div.style.width = '100px';
// div.style.height = '100px';
// div.style.backgroundColor = 'black';

// btn1.addEventListener('click', () => {
//   div.style.backgroundColor = '#e74c3c';
// });
// btn2.addEventListener('click', () => {
//   div.style.backgroundColor = '#e67e22';
// });
// btn3.addEventListener('click', () => {
//   div.style.backgroundColor = '#f1c40f';
// });

// document.body.appendChild(btn1);
// document.body.appendChild(btn2);
// document.body.appendChild(btn3);
// document.body.appendChild(div);

// div => w:100 h:100 border:1px solid black bg: white
// button => 내용: 색깔 추가,
// button's event=> prompt로 물어봄 색깔 헥사코드 입력

// button[#123123]을 가진 색깔이 나타남 div의 bg가 변경됨

const div = document.createElement('div');
div.style.width = '100px';
div.style.height = '100px';
div.style.border = '1px solid black';
div.style.backgroundColor = 'white';

const button = document.createElement('button');
button.innerText = '색깔 추가';
button.addEventListener('click', () => {
  const color = prompt('어떤 색깔?');
  const color_button = document.createElement('button');
  color_button.innerText = color;
  document.body.appendChild(color_button);

  color_button.addEventListener('click', () => {
    div.style.backgroundColor = color;
  });
});

document.body.appendChild(div);
document.body.appendChild(button);
