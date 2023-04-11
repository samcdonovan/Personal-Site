import Layout from '../components/Layout.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/global.css";
import Head from 'next/head';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sam's Personal Website</title>
      </Head>

      <Layout>

        <Component {...pageProps} />

      </Layout>
    </>
  )
}

export default MyApp
