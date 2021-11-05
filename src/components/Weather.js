import { useState, useEffect } from 'react'
import { getCurrentWeather } from '../services/weather/getCurrentWeather'
import { Spinner } from '@chakra-ui/spinner';
import { HStack, Image, Text, SimpleGrid } from "@chakra-ui/react"

export const Weather = ({ capital }) => {

    const [weather, setWeather] = useState();

    useEffect(() => {
        getCurrentWeather(capital)
          .then((weather) => {
            setWeather(weather)
          })
      }, [capital])
      

    if (weather === undefined) {
        return <Spinner size="lg" />;
      } else {
        const tempC = weather.current.temp_c
        const tempF = weather.current.temp_f
        const humidity = weather.current.humidity
        const localTime = weather.location.localtime
        const conditionURL = weather.current.condition.icon
        const conditionURLFormat = `https://${conditionURL.substr(2)}`
        const conditionText = weather.current.condition.text
        const wind = weather.current.vis_km;
        const windDirection = weather.current.wind_dir

        return (
          <HStack as="section" borderWidth="1px" p={3} spacing={6}>
            <Image 
              src={conditionURLFormat}
              alt={conditionText}
              boxSize="100px"
              objectFit="cover"
            />
            <SimpleGrid columns={2} spacing={2} fontSize="14px">
              <Text>temperature:</Text> {tempC}ºC | {tempF}ºF
              <Text>humidity:</Text> {humidity}
              <Text>local time:</Text> {localTime}
              <Text>wind:</Text> {wind} km/h 
              <Text>direction:</Text> {windDirection}
            </SimpleGrid>
          </HStack>
        );
      }
}