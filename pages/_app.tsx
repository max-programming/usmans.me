import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 selection:bg-slate-600 selection:text-current selection:text-gray-700'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
