const apiKey = "1a1150b67c76efc17533e48da419f46a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const error = document.querySelector('.error');
const weatherBox = document.querySelector('.weather-box');
const formBox = document.querySelector("form");
const searchBox = document.querySelector(".inputbox")
const submitBox = document.querySelector(".submit")
const temp = document.querySelector(".temp");
const sky = document.querySelector(".sky");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const country = document.querySelector(".country");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json()

    if (response.status == 404) {
        error.textContent = `Please Enter Valid City Name`;
        error.style.display = 'block'
        weatherBox.style.display = 'none'
    }
    else { 
        weatherBox.style.display = 'block'
        weatherBox.style.marginTop = '30px'
        temp.textContent =  `Temprature: ` + data.main.temp + `°C`;
        cityName.textContent = `City: ` + data.name;
        humidity.textContent = `Humidity: ` + data.main.humidity + `g/kg`;
        wind.textContent = `Wind Speed: ` + data.wind.speed + `km/h`;
        sky.textContent = `Sky: ` + data.weather[0].description;
        country.textContent = ` Country: ` + data.sys.country;
        error.style.display = 'none'
    }
}

submitBox.addEventListener("click", (e) => {
    if(searchBox.value == " " || searchBox.value == undefined) {
        error.textContent = `Please Enter Valid City Name`;
        error.style.display = 'block'
    }
    else {
        checkWeather(searchBox.value);
    }
})

formBox.addEventListener("click", (e) => {
    e.preventDefault()
})