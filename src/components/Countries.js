import { Country } from './Country'
import { CountrySimple } from './CountrySimple'
import { useState } from 'react'
import { Text } from '@chakra-ui/layout'
import { List } from '@chakra-ui/react'

export const Countries = ({ countries, newSearch }) => {
  const [showCountry, setShowCountry] = useState()
  console.log('showCountry ' + showCountry)

  // show stores in showCountry the Country matched with full name, has full information
  const show = (event) => {
    const countryFound = countries.filter(country =>
      country.name.includes(event.target.value)
    )
    setShowCountry(countryFound[0])
  }

  const countriesFound = countries.filter(country =>
    country.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  if (countriesFound.length >= 10) {
    return <Text>Too many matches, specify another filter</Text>
  }

  if (showCountry !== undefined) {
    return (
      <Country
        key={showCountry.name}
        name={showCountry.name}
        capital={showCountry.capital}
        population={showCountry.population}
        languages={showCountry.languages}
        flag={showCountry.flag}
      />
    )
  }

  if (countriesFound.length > 1) {
    return (
      <List>
        {countries
          .filter(country =>
            country.name.toLowerCase().includes(newSearch.toLowerCase())
          )
          .map(country => (
            <CountrySimple
              key={country.name}
              name={country.name}
              country={country}
              show={() => show(country.name)}
            />
          ))}
      </List>
    )
  }

  return (
    <List>
      {countries
        .filter(country =>
          country.name.toLowerCase().includes(newSearch.toLowerCase())
        )
        .map(country => (
          <Country
            key={country.name}
            name={country.name}
            capital={country.capital}
            population={country.population}
            languages={country.languages}
            flag={country.flag}
          />
        ))}
    </List>
  )
}
