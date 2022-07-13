import type { AppProps } from 'next/app';
import '@/assets/Globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
