const WeatherDetaill = ({weather}) => {
    console.log(weather)
    const celsiusToFahrenheit=(tempCelcius)=>{
        const tempF=(tempCelcius*(9/5)+32).toFixed(1)
        return tempF
    }
  return (
    <article className="text-center grid gap-4">
        <h3>{weather.name}, {weather.sys.country}</h3>
        
        <div className="text-black grid gap-4">
            {/* seccion1: temperatura, descripcion e imagen */}
        <section className="bg-white/60 p-2 rounded-xl grid grid-cols-2 items-center">
            <h3 className="col-span-2">{weather.weather[0].description}</h3>
            <span className="text-3xl">{celsiusToFahrenheit(weather.main.temp)}ºC</span>
            <div>
                <img className="block mx-auto" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
            </div>
        </section>
            {/* seccion2: detalles adicionales del clima*/}
        <section className="grid grid-cols-3 justify-items-center
         bg-white/60 p-2 rounded-xl ">
            <div className="flex gap-1">
                <div>
                    <img src="/wind.svg" alt="" />
                </div>
                <span>{weather.wind.speed}m/s</span>
            </div>
            <div className="flex gap-1">
                <div>
                    <img src="/humidity.svg" alt="" />
                </div>
                <span>{weather.main.humidity}%</span>
            </div>
            <div className="flex gap-1">
                <div>
                    <img src="pressure.svg" alt="" />
                </div>
                <span>{weather.main.pressure}hPa</span>
            </div>
        </section>
        </div>
        
        <button>Cambiar Fº</button>
    </article>
  )
}
export default WeatherDetaill