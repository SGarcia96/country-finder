import axios from "axios"

const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const getCurrentWeather = async (capital) => {
  const baseUrl = `http://api.weatherstack.com/current?access_key=${REACT_APP_WEATHER_API_KEY}&query=${capital}`

  return await axios.get(baseUrl).then((response) => {
    return response.data.current
  })
}
