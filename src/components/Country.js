import { Weather } from "./Weather"
import { 
  Stack, 
  Divider, 
  Heading, 
  Text, 
  Box, 
  Image, 
  StatGroup, 
  Stat, 
  StatLabel, 
  StatNumber,
  List, 
  ListItem
 } from "@chakra-ui/react"

export const Country = ({ name, capital, population, languages, flag }) => {
  return (
    <Stack>
      <Divider orientation="vertical"/>
      <Box as="section" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          src={flag}
          alt={`${name} flag`}
        />

        <Heading as="h2" size="lg" align="center" marginTop="10px" marginBottom="10px">{name}</Heading>
        <StatGroup align="center">
          <Stat>
            <StatLabel>Capital</StatLabel>
            <Text fontSize="2xl">{capital}</Text>
          </Stat>
          <Stat>
            <StatLabel>Population</StatLabel>
            <StatNumber>{population}</StatNumber>
          </Stat>
        </StatGroup>

        <Box align="center" p={1} marginTop="5px">
          <Text>Languages</Text>
          <List>
            {languages.map((language) => (
              <ListItem key={language.name}>{language.name}</ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Weather capital={capital} />
    </Stack>
  )
}
