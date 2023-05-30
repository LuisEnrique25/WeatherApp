import React, { useEffect, useState } from 'react'
import "./darkMode.css"

const DarkMode = () => {
    const [isDark, setIsDark] = useState(localStorage.getItem("DarkMode")==="true")

    const handleIsDark = () =>{
        setIsDark(!isDark)
        localStorage.setItem("DarkMode", !isDark)
    }

    useEffect(() => {
        if(isDark){
          document.documentElement.classList.add('dark')
        }else{
          document.documentElement.classList.remove("dark")}
          localStorage.setItem('DarkMode', isDark)
      },[isDark])
  



  return (
    <div className='absolute bottom-10 -z-0'>
        <button onClick={handleIsDark} className='text-xl hover:text-3xl'>{ isDark ? <i className="fa-solid fa-sun text-yellow-500 "></i>: <i className="fa-solid fa-moon"></i>}</button>
    </div>
  )
}

export default DarkMode