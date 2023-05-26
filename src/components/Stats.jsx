import React from 'react'

const statsImgs = {
    wind: "/images/wind.png", 
    pressure: "/images/presure.png",
    humidity:"/images/humidity.png"
}
const statsType = {
    wind: "m/s", 
    pressure: "pHa",
    humidity:"%"
}

const Stats = ({prop, stat}) => {
    
    
  return (
    
    <article className='flex gap-2 items-center sm:justify-around sm:w-full sm:px-3 sm:border-b-2  last:sm:border-none sm:py-5 transition-all duration-500 ease-in-out'>
        <div >
            <img src={`${statsImgs[stat]}`} alt="" />
        </div>
        <span>{prop}{`${statsType[stat]}`}</span>
    </article>
      
  )
}

export default Stats