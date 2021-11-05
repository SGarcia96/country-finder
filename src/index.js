import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme, ColorModeScript } from '@chakra-ui/react'

// Extend the theme to include custom colors, fonts, etc
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ config })

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
