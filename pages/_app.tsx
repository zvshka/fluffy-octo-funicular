import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Shell from '../components/Shell/Shell';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps & { Component: { title?: string } }) {
  return <Shell>
    <Head>
      <title>{Component.title ? Component.title + ' | ' : ''}Electro store</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </Shell>;
}

export default MyApp;
