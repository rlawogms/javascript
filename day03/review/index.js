// Counter -10 ~ 10
// - +
// [10, -10]: red 그 외는 Black
const minusBtn = document.querySelector('.minusBtn');
const result = document.querySelector('.result');
const plusBtn = document.querySelector('.plusBtn');

plusBtn.addEventListener('click', () => {
  const num = Number(result.innerText);
  const newNum = num < 10 ? num + 1 : num;
  result.innerText = newNum;
  result.computedStyleMap.color = newNum == 10 ? 'red' : 'black';
});
minusBtn.addEventListener('click', () => {
  const num = Number(result.innerText);
  const newNum = num > -10 ? num - 1 : num;
  result.innerText = newNum;
  result.computedStyleMap.color = newNum == -10 ? 'red' : 'black';
});
