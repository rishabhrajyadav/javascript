let cityName = document.querySelector(".weather_city")
let dateTime = document.querySelector(".weather_date_time")
let w_forecast = document.querySelector(".weather_forecast")
let w_icon = document.querySelector(".weather_icon")
let w_temp = document.querySelector(".weather_temp")
let w_min = document.querySelector(".weather_min")
let w_max = document.querySelector(".weather_max")

let citySearch = document.querySelector(".weather_search");

const getCountryName = (countryCode) => {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode);
}

let city = "pune";

citySearch.addEventListener("submit" ,(e) => {
    e.preventDefault();

    let cityName = document.querySelector(".city_name")
    city = cityName.value
    console.log(city);
    getWeatherData();

    cityName.value = "";
})

const getWeatherData = async() => {
   
   const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=
   `
    try {
    const res = await fetch(weatherURL);
    const data = await res.json();
    console.log(data);
    const {main, name , weather , wind , sys , dt} = data

    cityName.innerHTML = `${name} ${getCountryName(sys.country)}`;
    dateTime.innerHTML = `${new Date(dt * 1000)}`

    w_forecast.innerHTML = weather[0].main
    w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png"/>`
    w_temp.innerHTML = `${main.temp}&#176`
    w_min.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`
    w_max.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`

  } catch (error) {
    console.log(error);
  }
}

document.body.addEventListener("load", getWeatherData())