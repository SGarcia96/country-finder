import React, { useState, useEffect } from "react"
import { getAllCountries } from "./services/countries/getAllCountries"
import { FilterCountries } from "./components/FIlterCountries"
import { Countries } from "./components/Countries"
import "./App.css"

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
    <div className="App">
      <section className="App-section">
        <h1 className="App-title">Country Finder</h1>
        <FilterCountries
          newSearch={newSearch}
          handleSearchChange={handleSearchChange}
        />
        <Countries countries={countries} newSearch={newSearch} />
      </section>
    </div>
  )
}

export default App
