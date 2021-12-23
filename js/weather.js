const API_KEY = "a3abd7ec06ec77d99d9884bdd60690c3";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description} ${data.main.temp}°`;
    });
}

function onGeoError() {
  alert("위치를 찾을 수 없음.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
