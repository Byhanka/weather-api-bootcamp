//worked with house Hayden, Angel, Mena, Patricia and Zach

function getWeather() {
    let cityName = document.querySelector('input').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e8d1869379d757626c33eda772b2a4fa`
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          let kelvin = data.main.temp
          let fahrenheit = (kelvin - 273.15) * 1.8 + 32
          document.querySelector('.city').innerText = data.name
          document.querySelector('.country').innerText = data.sys.country
          document.querySelector('h3').innerText = (`The Temperature is: ${Math.floor(fahrenheit)} °F`)
      })
    .catch(err => {
        console.log(`error ${err}`)
});
}
document.querySelector('button').addEventListener('click', getWeather)