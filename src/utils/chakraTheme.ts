import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Sen, sens-serif',
  },
  colors: {
    gradLeft: '#F29492',
    gradRight: '#114357',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});
