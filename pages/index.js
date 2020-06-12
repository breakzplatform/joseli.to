import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joselito Júnior</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="/mono.css" />
      </Head>

      <main>
        <img src="/logo-white.svg" alt="Jose" className="logo" />
        <code>
          $ npx <strong>joselito</strong> {/*--lang=pt-br*/}
        </code>

        <p className="description">
          I am a software engineer, consultant, and public speaker currently
          based in Rio de Janeiro, Brazil. My interests range from technology to
          entrepreneurship. I love travelling, web development, and burritos.
        </p>

        {/*
        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>.dev &rarr;</h3>
            <p>.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>.blog &rarr;</h3>
            <p></p>
          </a>
        </div>
        */}

        <ul className="social">
          <li>
            <a
              href="http://twitter.com/breakzplatorm"
              className="social__link"
              rel="noopnener"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="http://github.com/breakzplatorm"
              className="social__link"
              rel="noopnener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="http://dev.to/joselito"
              className="social__link"
              rel="noopnener"
            >
              DEV
            </a>
          </li>
          <li>
            <a
              href="http://notes.joselito.dev"
              className="social__link"
              rel="noopnener"
            >
              Hashnode
            </a>
          </li>
          <li>
            <a
              href="https://unsplash.com/@breakzplatform"
              className="social__link"
              rel="noopnener"
            >
              Unsplash
            </a>
          </li>
          <li>
            <a
              href="http://picpay.me/joselitojunior"
              className="social__link"
              rel="noopnener"
            >
              PicPay
            </a>
          </li>
        </ul>
      </main>

      <footer>CC-BY 2010-2020 Joselito Júnior</footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 800px;
        }

        .logo {
          margin: 0 0 2em;
        }

        .social {
          list-style: none;
          padding: 0;
        }

        .social li {
          display: inline-block;
          margin: 0.75rem;
        }

        .social__link {
          border-bottom: 2px solid #000;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #2d00f7;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.618;
          font-size: 1.5rem;
          margin: 2rem 1rem 3rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: "JetBrains Mono", monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #2d00f7;
          border-color: #2d00f7;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .description {
            text-align: left;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "JetBrains Mono", monospace;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
