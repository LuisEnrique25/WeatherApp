import React, { useState } from 'react'
import { kelvinToCelsius, kelvinToFarenheit } from '../utils/temp'
import Stats from './Stats'


const Weather = ({weatherInfo}) => {
    console.log(weatherInfo?.weather[0].icon)
    const [isCelsius, setIsCelsius] = useState(true)

  return (
    <section className='text-center grid gap-6 '>
        
        <h2 className='font-bold text-xl sm:text-2xl'>{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>

        <section className=' grid gap-4 sm:grid-cols-[1fr_auto]'>

            <article className='bg-slate-900 p-2 rounded-2xl grid grid-cols-2 items-center sm:p-4 transition-all duration-200 ease-linear' >

                {/* DESCRIPTION */}
                <h3 className='col-span-2 capitalize md:text-lg'>{weatherInfo?.weather[0].description}</h3>

                {/* TEMPERATURE */}
                <span className='text-4xl tracking-widest sm:text-[2.5rem] sm:tracking-[.15em] md:text-5xl transition-all duration-200 ease-in'>{isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFarenheit(weatherInfo?.main.temp)}</span>

                {/* IMAGEN */}
                <div className='flex items-center justify-center'>
                    <img className="w-full" src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`} alt={weatherInfo?.weather[0].description} />
                </div>

            </article>








            <section className='bg-slate-900  p-2 rounded-2xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center sm:justify-center sm:w-[150px] '>

            <Stats prop={weatherInfo?.wind.speed} stat={"wind"}/>
            <Stats prop={weatherInfo?.main.humidity} stat={"humidity"}/>
            <Stats prop={weatherInfo?.main.pressure} stat={"pressure"}/>

            </section>


        </section>
        <div>
        <button onClick={() => setIsCelsius(!isCelsius)} className=' w-fit py-2 px-5 rounded-3xl bg-white text-blue-600 font-semibold sm:px-9 transition-all duration-100 ease-in hover:bg-blue-700 hover:text-blue-950'>{isCelsius ?"To °F":"To °C"}</button>
        </div>



    </section>
  )
}

export default Weather