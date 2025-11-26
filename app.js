const apiKey = "bc16f24b07db306a815c20ad679eb883";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const input = document.querySelector('input');
        const btn = document.querySelector('button');
        const weatherIcon = document.querySelector('.weather-icon');
        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if (response.status == 404) {
                document.querySelector('.error').style.display = "block";
                document.querySelector('.weather').style.display = "none";
            } else {
                var data = await response.json();
                console.log(data);
                document.querySelector('.city').innerText = data.name;
                document.querySelector('.temp').innerText = Math.round(data.main.temp) + "°c";
                document.querySelector('.wind-speed').innerText = data.wind.speed + "km/h";
                document.querySelector('.humidity').innerText = data.main.humidity + "%";
                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "images/clouds.png";
                }
                else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "images/clear.png";
                }
                else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "images/drizzle.png";
                }
                else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "images/mist.png";
                }
                else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "images/rain.png";
                }
                else if (data.weather[0].main == "Snow") {
                    weatherIcon.src = "images/snow.png";
                }
                else if (data.weather[0].main == "Haze") {
                    weatherIcon.src = "images/haze.png";
                }
                document.querySelector('.weather').style.display = "block";
                document.querySelector('.error').style.display = "none";
            }
        }
        btn.addEventListener("click", () => {
            checkWeather(input.value);
        })