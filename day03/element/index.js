// const newDiv = document.createElement("div");
// const h1 = document.createElement("h1");
// h1.innerText = "토요일";
// newDiv.appendChild(h1);

const div = document.querySelector('.box');
div.classList.forEach((v) => {
  console.log(v);
});

div.classList.add('pretty');
div.classList.remove('large');
div.classList.contains('box');
div.classList.replace('box', 'wrapper');
div.classList.toggle('large');
