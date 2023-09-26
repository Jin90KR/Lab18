const locationTemp = document.querySelector(".temp");
const locationCity = document.querySelector(".city");
const locationTempImg = document.getElementById("weather_img");
const locationHumid = document.querySelector(".humidity");
const locationWind = document.querySelector(".windspeed");
const searchBtn = document.querySelector(".header div");
const searchData = document.querySelector(".header input");




function showWeather() {
    navigator.geolocation.getCurrentPosition(success => {
        const coords = success.coords;
        const userLat = coords.latitude;
        const userLon = coords.longitude;
        const userApi = "2777dcfb4da8ada8b4b37d074761cac6"
        //unit=metric 섭씨로 변환
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLon}&units=metric&appid=${userApi}`)
            .then((data) => data.json())
            .then((result) => {
                locationTemp.innerHTML = Math.round(result.main.temp);
                locationCity.innerHTML = result.name;
                locationHumid.innerHTML = result.main.humidity + "%";
                locationWind.innerHTML = result.wind.speed + "km/h";
                if(result.weather[0].main === "clear") {
                    locationTempImg.className = ("fa-solid fa-sun");
                }else if(result.weather[0].main === "Clouds") {
                    locationTempImg.className = ("fa-solid fa-cloud");
                }else if(result.weather[0].main === "Thunderstorm") {
                    locationTempImg.className = ("fa-solid fa-cloud-bolt");
                }else if(result.weather[0].description === "few clouds") {
                    locationTempImg.className = ("fa-solid fa-cloud-sun");
                }else if(result.weather[0].main === "Rain") {
                    locationTempImg.className = ("fa-solid fa-umbrella");
                }else if(result.weather[0].main === "Mist") {
                    locationTempImg.className = ("fa-solid fa-smog");
                }else if(result.weather[0].main === "Snow") {
                    locationTempImg.className = ("fa-solid fa-snowflake");
                }else {locationTempImg.className = ("fa-solid fa-sun");}
        })
    })

}

showWeather()

searchBtn.addEventListener("click", () => {
        const cityName = searchData.value;
        console.log(searchData.value)
        const userApi = "2777dcfb4da8ada8b4b37d074761cac6"
        //unit=metric 섭씨로 변환
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${userApi}`)
            .then((data) => data.json())
            .then((result) => {
                console.log(result)
                locationTemp.innerHTML = Math.round(result.main.temp);
                locationCity.innerHTML = result.name;
                locationHumid.innerHTML = result.main.humidity + "%";
                locationWind.innerHTML = result.wind.speed + "km/h";
                if(result.weather[0].main === "clear") {
                    locationTempImg.className = ("fa-solid fa-sun");
                }else if(result.weather[0].main === "Clouds") {
                    locationTempImg.className = ("fa-solid fa-cloud");
                }else if(result.weather[0].main === "Thunderstorm") {
                    locationTempImg.className = ("fa-solid fa-cloud-bolt");
                }else if(result.weather[0].description === "few clouds") {
                    locationTempImg.className = ("fa-solid fa-cloud-sun");
                }else if(result.weather[0].main === "Rain") {
                    locationTempImg.className = ("fa-solid fa-umbrella");
                }else if(result.weather[0].main === "Mist") {
                    locationTempImg.className = ("fa-solid fa-smog");
                }else if(result.weather[0].main === "Snow") {
                    locationTempImg.className = ("fa-solid fa-snowflake");
                }else {locationTempImg.className = ("fa-solid fa-sun");}
                console.log(result)
        })
});
