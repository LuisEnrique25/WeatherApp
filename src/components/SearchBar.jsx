import React from 'react'
import axios from 'axios'

const SearchBar = ({setWeatherInfo}) => {


    const handleBtnForm = (e) => {
        e.preventDefault()
        const cityName = e.target.cityName.value
        const API_KEY = "9f4bd02c4f52d34d888298157bc8406b"
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

        
    axios.get(URL)
    .then(({data}) => setWeatherInfo(data))
    .catch((err) => alert("Probablemente la ciudad no se encutre en nuestro registro ó asegurate de escribir correctamente el nombre de la ciudad"))
    }



  return (
    <form onSubmit={handleBtnForm} className='absolute top-16  flex rounded-lg overflow-hidden '>
        <input id='cityName' type="text" placeholder='City Name' required className='w-36 text-black px-2 bg-white/25  focus:bg-white/80 outline-0'/>
        <button className='bg-blue-500 p-[0.15rem] px-2 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500'>
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
    </form>
  )
}

export default SearchBar