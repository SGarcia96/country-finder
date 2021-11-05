import axios from 'axios'
const baseUrl = 'https://restcountries.com/v2/all'

export const getAllCountries = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
