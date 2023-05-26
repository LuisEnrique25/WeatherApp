import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import Weather from './components/Weather'
import Stats from './components/Stats'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "9f4bd02c4f52d34d888298157bc8406b"

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    

    axios.get(URL)
      .then(({data}) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  return (
    <main className='bg-gray-700 min-h-screen text-white flex justify-center items-center font-principal-font p-2'>
      <Weather weatherInfo={weatherInfo}/>

   
    </main>
  )
}

export default App
