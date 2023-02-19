import '../styles/global.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/sen/400.css';

import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
