import {
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  Input
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

export const FilterCountries = ({ newSearch, handleSearchChange }) => {
  return (
    <FormControl id="filter">
      <FormLabel>Find countries: {newSearch}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input
            name="filter"
            id="filter"
            value={newSearch}
            onChange={handleSearchChange}
            placeholder="Type country name"
            variant="flushed"
            colorScheme="tea"
            tabIndex="0"
          />
      </InputGroup>
      <FormHelperText>Show up to 10 matches in a single search</FormHelperText>
    </FormControl>
  )
}
