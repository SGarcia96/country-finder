export const FilterCountries = ({ newSearch, handleSearchChange }) => {
  return (
    <form>
      <label htmlFor="filter">Find countries</label>
      <input
        className="input-country"
        name="filter"
        id="filter"
        value={newSearch}
        onChange={handleSearchChange}
        placeholder="Enter country name"
        tabIndex="0"
      />
      <br />
    </form>
  )
}
