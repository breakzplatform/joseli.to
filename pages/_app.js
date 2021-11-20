import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Joselito</title>
      <link rel="icon" href="/favicon.png" />
      <link href="https://joselito.page/assets/iosevka-webfont/iosevka.css" rel="preload" as="style" onLoad="this.rel='stylesheet'; this.onload=null;" />
    </Head>

    <div className="wrapper">
      <div className="logo">
        <img src="/logo.png" alt="Joselito" />
      </div>
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp