import axios from 'axios'

const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const getCurrentWeather = async (capital) => {
  const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_API_KEY}&q=${capital}&aqi=no`
  return await axios.get(baseUrl).then((response) => {
    return response.data
  })
}
