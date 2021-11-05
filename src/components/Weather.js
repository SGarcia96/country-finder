import { useState, useEffect } from 'react'
import { getCurrentWeather } from '../services/weather/getCurrentWeather'

export const Weather = ({ capital }) => {

    const [weather, setWeather] = useState();

    useEffect(() => {
        getCurrentWeather(capital)
          .then((weather) => {
            setWeather(weather)
          })
      }, [capital])
      

    if (weather === undefined) {
        return <p>Loading...</p>;
      } else {
        const tempC = weather.current.temp_c
        const tempF = weather.current.temp_f
        const humidity = weather.current.humidity
        const localTime = weather.location.localTime
        const conditionURL = weather.current.condition.icon
        const conditionURLFormat = `https://${conditionURL.substr(2)}`
        const conditionText = weather.current.condition.text
        const wind = weather.current.vis_km;
        const windDirection = weather.current.wind_dir

        return (
          <div>
            <b>temperature:</b> {tempC} ºC {tempF} ºF
            <b>humidity:</b> {humidity}
            <b>local time:</b> {localTime}
            <img src={conditionURLFormat} alt={conditionText} />
            <b>wind:</b> {wind} km/h 
            <b>direction:</b> {windDirection}
          </div>
        );
      }
}