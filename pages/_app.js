import Head from 'next/head'
import '../styles/globals.css'

function Jose({ Component, pageProps }) {
  return <>
    <Head>
      <title>Joselito</title>
      <link rel="shortcut icon" href="https://joseli.to/favicon.png" type="image/png" />
      <link href="https://joselito.page/assets/iosevka-webfont/iosevka.css" rel="preload" as="style" onLoad="this.rel='stylesheet'; this.onload=null;" />
    </Head>

    <div className="wrapper">
      <div className="logo">
        <img src="/logo.png" width="192" height="157.17" alt="Joselito" />
      </div>
      <Component {...pageProps} />
    </div>
  </>
}

export default Jose