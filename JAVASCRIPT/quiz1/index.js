const colorBtn = document.querySelector('.color');
const sizeBtn = document.querySelector('.size');
const radiusBtn = document.querySelector('.radius');
const box = document.querySelector('.box');

colorBtn.addEventListener('click', () => {
  colorBtn.innerText = colorBtn.innerText == '파란색' ? '빨간색' : '파란색';
  box.classList.toggle('red');
  box.classList.toggle('blue');
});

sizeBtn.addEventListener('click', () => {
  sizeBtn.innerText = sizeBtn.innerText == '늘리기' ? '줄이기' : '늘리기';
  box.classList.toggle('medium');
  box.classList.toggle('large');
});

radiusBtn.addEventListener('click', () => {
  radiusBtn.innerText = radiusBtn.innerText == '둥글게' ? '직각' : '둥글게';
  box.classList.toggle('borderRadiusZero');
  box.classList.toggle('borderRadiusTen');
});
