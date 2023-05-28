import { useEffect, useState } from 'react'
import axios from 'axios'
import { getRandom } from './utils/random.js'
import dbImages from "./db/bgsImages.json"
import './App.css'
import Weather from './components/Weather'
import Loader from './components/Loader.jsx'
import dbIcoBgs from "./db/bgsIcons.json"



function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  {/*TODO EL LIO PARA PODER CAMBIAR DE FONDO SEGUN EL CLIMA LOCAL */}
  console.log(weatherInfo?.weather[0].icon)
  const icon = dbIcoBgs[0][weatherInfo?.weather[0].icon]?.icon 
  console.log("ruta del icono " + icon)
  const rutaad =dbImages[0][weatherInfo?.weather[0].icon]?.[getRandom(dbImages[0][weatherInfo?.weather[0].icon])]
  const bg =dbIcoBgs[0][weatherInfo?.weather[0].icon]?.bg[getRandom(dbIcoBgs[0][weatherInfo?.weather[0].icon]?.bg)]

  
  
  
  

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
    <main style={{ backgroundImage: `url(${bg})` }}  className='bg-no-repeat bg-cover min-h-screen text-white flex flex-col justify-center items-center font-principal-font p-2'>
     {/**
      * 
    */}
      {
        weatherInfo ? <> <h1 className='absolute top-16'>HOLA</h1>  <Weather weatherInfo={weatherInfo} /> </>: <Loader/>
      }
   
      
    
 
   
    </main>
  )
}

export default App
{/**
style={{ backgroundImage: `url(${ruta})` }}
style={{ backgroundImage: `url(${ruta})` }} 
*/}
