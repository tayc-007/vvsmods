// pages/_app.js
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

// Extend the theme to customize colors for light and dark mode
const theme = extendTheme({
  config: {
    initialColorMode: 'light', // Default color mode
    useSystemColorMode: false, // Disable automatic color mode based on system preferences
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{}}>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
