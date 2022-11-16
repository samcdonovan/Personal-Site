import Layout from '../components/Layout.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/styles.css";
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {


  /*
    useEffect(() => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
  */
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Sam's Personal Website</title>
      </Head>

      <Layout>

        <Component {...pageProps} />

      </Layout>
      <Script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></Script>

    </>
  )
}

export default MyApp
