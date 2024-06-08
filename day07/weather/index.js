const lat = 37.51;
const lon = 126.72;
const APIkey = 'e3bcf8a602e12be32f0df472f4c3bc9a';
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
const getWeather = fetch(URL);

const btn1 = document.querySelector('.bupyeong');
const btn2 = document.querySelector('.fukuoka');
const btn3 = document.querySelector('.tsingtao');
const btn4 = document.querySelector('.taipei');
const btn5 = document.querySelector('.sydney');

btn1.addEventListener('click', () => {
  getWeather
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      const weather = document.querySelector('.weather');
      weather.innerText = `부평역 현재 날씨: ${v}`;
    });
});

btn2.addEventListener('click', () => {
  getWeather
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      const weather = document.querySelector('.weather');
      weather.innerText = `후쿠오카 현재 날씨: ${v}`;
    });
});

btn3.addEventListener('click', () => {
  getWeather
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      const weather = document.querySelector('.weather');
      weather.innerText = `칭따오 현재 날씨: ${v}`;
    });
});

btn4.addEventListener('click', () => {
  getWeather
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      const weather = document.querySelector('.weather');
      weather.innerText = `타이베이 현재 날씨: ${v}`;
    });
});

btn5.addEventListener('click', () => {
  getWeather
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      const weather = document.querySelector('.weather');
      weather.innerText = `시드니 현재 날씨: ${v}`;
    });
});
