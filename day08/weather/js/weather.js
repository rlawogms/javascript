const lat = 37.51;
const lon = 126.72;
const APIkey = 'e3bcf8a602e12be32f0df472f4c3bc9a';

const cities = ['Bupyeong', 'Fukuoka', 'Qingdao', 'Taipei', 'Sydney']
const data = [
  {cityName: 'korea', lat:37.51, lon:126.72},
  {cityName: 'japan', lat:33.59, lon:130.4},
  {cityName: 'china', lat:36.06, lon:120.3},
];

const weatherPhoto = {
    Clear: "/day08/weather/photo/clear.jpg",
    Clouds: "/day08/weather/photo/cloudy.jpg",
    Rain: "/day08/weather/photo/rain.jpg",
}

data.forEach(({cityName, lat, lon})=>{
  const btn = document.querySelector(`.${cityName}`)
  btn.addEventListener('click',()=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    const weatherAPI = fetch(URL);

    weatherAPI
    .then((value) => value.json())
    .then(({main, weather}) => ({main, weather}))
    .then((value) =>  {
        const mainTag = document.querySelector("main");
        mainTag.style.backgroundImage = `url('${
            weatherPhoto[value.weather[0].main]
        }')`;

        const weatherTag = document.querySelector(".weather__info");
        weatherTag.innerText = `${cityName} is ${value.weather[0].main}`;
        const tempTag = document.querySelector(".temp__info");
        tempTag.innerText = `${cityName}'s temp is ${value.main.temp}`;
    });
  });
});