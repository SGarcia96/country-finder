import React, { useState, useEffect } from "react"
import { getAllCountries } from "./services/countries/getAllCountries"
import { FilterCountries } from "./components/FIlterCountries"
import { Countries } from "./components/Countries"
import { Container, VStack, Heading, Box } from "@chakra-ui/react"
import { Footer } from "./components/Footer"
import { ToggleDark } from "./components/ToggleDark"
//import "./App.css"

const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState("")

  useEffect(() => {
    getAllCountries().then((countries) => {
      setCountries(countries)
    })
  }, [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <Container p="0" m="0" maxW="100%" minHeight="100vh" marginTop="6" centerContent>
      <VStack maxW="100%" height="100vh">
        <Heading as="h1" size="2xl">Country Finder</Heading>
        <ToggleDark />
        <FilterCountries
          newSearch={newSearch}
          handleSearchChange={handleSearchChange}
        />
        <Countries countries={countries} newSearch={newSearch} />
      </VStack>
      <Footer />
    </Container>
  )
}

export default App
