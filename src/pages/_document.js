import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function MyDocument() {
    async function getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.dataset.theme = getUserPreference();
  `;

    return (
        <Html>
            <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sofia&display=swap" rel="stylesheet" />

                <script src="https://kit.fontawesome.com/acc7b2f02c.js" crossOrigin="anonymous"></script>

                <link rel="icon" type="image/svg+xml" href="./img/favicon.svg" />

            </Head>
            <body>
                <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}