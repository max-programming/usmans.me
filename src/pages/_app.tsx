import '../styles/global.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/sen/400.css';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { chakraTheme } from '@/utils/chakraTheme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={chakraTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
