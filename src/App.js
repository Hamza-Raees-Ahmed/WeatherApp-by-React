// import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import { WeatherApp } from './WeatherApp/weatherApp.js';
import clouds from '../src/assests/clouds.png';
import heavy_rain from '../src/assests/heavy-rain.png';
import loupe from '../src/assests/loupe.png';
import snow from '../src/assests/snow.png';
import wind from '../src/assests/wind.png';
import tity from '../src/assests/tity.png';
import cleaning from '../src/assests/cleaning.png'
import sunny from '../src/assests/sunny.png'
import rainy from '../src/assests/rainy.png'

function App() {
  return (
    <div className="App">
      <WeatherComponent />
    </div>
  );
}

export default App;


function WeatherComponent() {


  const [wicon, setWin] = useState(clouds)
  let apiKey = 'fdad05851e8be05bb41dacbe56042e07';





  const API = async () => {
    // const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=hyderabad&units=Metric&appid=fdad05851e8be05bb41dacbe56042e07'
    const input = document.querySelector('.inputTxt')
    const userInput = input.value;
    if (userInput === "") {
      return 0;

    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=Metric&appid=${apiKey}`
    const response = await fetch(apiUrl)
    const data = await response.json()

    // console.log(data)
    let humidity = data.main.humidity;
    let temp = data.main.temp;
    let location = data.name;
    let windSpeed = data.wind.speed;
    const humidityPercentage = document.querySelector('.humidity-percentage')
    humidityPercentage.innerHTML = `${humidity} %`;
    const temperature = document.querySelector('.weather-temp')
    temperature.innerHTML = `${Math.floor(temp)}*C`
    const cityLocation = document.querySelector('.weather-location')
    cityLocation.innerHTML = location;
    const wind = document.querySelector('.wind-speed')
    wind.innerHTML = `${windSpeed} km/h`;
    console.log(data.weather[0].icon,"icons")

    if (data.weather[0].icon == '01d' || data.weather[0].icon =='01n') {
      setWin(sunny)

    } else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
      setWin(clouds)

    } else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
      setWin(rainy)

    } else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
      setWin(rainy)

    } else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
      setWin(heavy_rain)

    } else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
      setWin(heavy_rain)}
      else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
        setWin(snow)
      }
      else {
      setWin(clouds)
    }









  }


  return (
    <>
      <div className='container'>
        <div className='top-bar'>
          <input type='text' placeholder='Search here...' className='inputTxt' />
          <div className='img'>
            <img src={loupe} onClick={() => API()}></img>
          </div>
        </div>
        <div className='weather-imge'>
          <img src={wicon}></img>
        </div>
        <div className='weather-temp'>20*C</div>
        <div className='weather-location'>Pakistan</div>
        <div className='data-container'>
          <div className='element'>
            <img src={tity} className='icon' />
            <div className='data'>
              <div className='humidity-percentage'>30%</div>
              <div className='text'>Humidity</div>
            </div>
          </div>
          <div className='element'>
            <img src={wind} className='icon' />
            <div className='data'>
              <div className='wind-speed'>5 km/h</div>
              <div className='text'>Wind Speed</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}




