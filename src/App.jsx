
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=4c0e6a47ee766d8c36db79c008bd384b

import axios from "axios";
import { useEffect, useState } from "react"
import WeatherDetaill from "./components/WeatherDetaill";

//https://p4.wallpaperbetter.com/wallpaper/574/126/359/amazing-clouds-wallpaper-preview.jpg
//https://c1.wallpaperflare.com/preview/611/151/766/energy-current-clima-tech-power-poles.jpg
function App() {
  const [weather, setWeather] = useState(null)

  const succes=(pos)=>{
    
    const {
      coords: {latitude, longitude},
    }=pos;
   
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4c0e6a47ee766d8c36db79c008bd384b&lang=sp&units=metric
    `)
    .then(({data})=>setWeather(data))
    .catch((err)=>console.log(err))
  }

  const bgImages={
    "04n":"bg-[url(https://p4.wallpaperbetter.com/wallpaper/574/126/359/amazing-clouds-wallpaper-preview.jpg)]",
    "01d": "bg-url[(https://c1.wallpaperflare.com/preview/611/151/766/energy-current-clima-tech-power-poles.jpg)]"
  }

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(succes)
  },[])  
  
  return (
    <main className={`flex justify-center items-center h-screen bg-black text-white 
    bg-cover ${ bgImages[weather?.weather[0].icon]}`}>
     
     {weather ? <WeatherDetaill weather={weather}/>:<span>Cargando...</span>} 
    </main>
  )
}

export default App
