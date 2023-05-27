import { useEffect, useState } from 'react'
import axios from 'axios'
import { getRandom } from './utils/random.js'
import dbImages from "./db/bgsImages.json"
import './App.css'
import Weather from './components/Weather'
import Loader from './components/Loader.jsx'



function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  {/*TODO EL LIO PARA PODER CAMBIAR DE FONDO SEGUN EL CLIMA LOCAL */}
  console.log(weatherInfo?.weather[0].icon)
  const icono = weatherInfo?.weather[0].icon
  const ruta =dbImages[0][weatherInfo?.weather[0].icon]?.[getRandom(dbImages[0][weatherInfo?.weather[0].icon])]
  console.log(ruta)
  
  
  
  

  //console.log(dbImages[0][weatherInfo?.weather[0].icon]?.day) //Obtener pocision del json


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
    <main style={{ backgroundImage: `url(${ruta})` }}  className='bg-no-repeat bg-cover min-h-screen text-white flex justify-center items-center font-principal-font p-2'>
     {/**
      * 
    */}
      {
        weatherInfo ?<Weather weatherInfo={weatherInfo} />: <Loader/>
      }
   
      
    
 
   
    </main>
  )
}

export default App
{/**
style={{ backgroundImage: `url(${ruta})` }}
*/}