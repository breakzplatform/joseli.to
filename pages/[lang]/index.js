import Head from "next/head";
import { useRouter } from "next/router";
import { profile, cards, social, footer } from "../../data/content";

export default () => {
  const router = useRouter();
  const lang = router.query.lang === "br" ? "pt" : router.query.lang;

  return (
    <div className="container">
      <Head>
        <title>{profile[lang].title}</title>
        <meta name="description" content={profile[lang].description} />
        <link rel="icon" href="/favicon.png" />
        <link href="https://joseli.to/pt/assets/iosevka-webfont/iosevka.css" rel="preload" as="style" onLoad="this.rel='stylesheet'; this.onload=null;"></link>
        {lang === "pt" && <>
          <link rel="alternate" type="application/atom+xml" title="Joseli.to — Tudo" href="https://feeds.feedburner.com/joselito_pt" />
          <link rel="alternate" type="application/atom+xml" title="Joseli.to — Notinhas" href="https://feeds.feedburner.com/joselito_notinhas" />
          <link rel="alternate" type="application/atom+xml" title="Joseli.to — Newsletter" href="https://feeds.feedburner.com/joselito_newsletter" />
          <link rel="alternate" type="application/atom+xml" title="Joseli.to — Artigos" href="https://feeds.feedburner.com/joselito_artigos" />
          <link rel="alternate" type="application/atom+xml" title="Joseli.to — Desenvolvimento" href="https://feeds.feedburner.com/joselito_desenvolvimento" />
        </>}
      </Head>

      <main>
        <div className="logo">
          <img src="/logo.png" alt="Jose" />
        </div>
        <code>
          $ npx <strong>joselito</strong> {lang != "en" && `--lang=${lang}`}
        </code>
        {!!profile[lang].description && (
          <p className="description">{profile[lang].description}</p>
        )}

        {cards.enabled && cards[lang].length > 0 && (
          <div className="grid">
            {cards[lang].map((card) => {
              return (
                <a href={card.url} key={card.id} rel="noopener noreferrer" className="card">
                  <h3>{card.title} &rarr;</h3>
                  <p>{card.description}</p>
                </a>
              );
            })}
          </div>
        )}

        <ul className="social">
          {social.defaultStart.map((item) => {
            return (
              <li key={item.title.toLowerCase()}>
                <a
                  href={item.url}
                  className="social__link"
                  rel="me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
          {social[lang].map((item) => {
            return (
              <li key={item.title.toLowerCase()}>
                <a
                  href={item.url}
                  className="social__link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
          {social.defaultEnd.map((item) => {
            return (
              <li key={item.title.toLowerCase()}>
                <a
                  href={item.url}
                  className="social__link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </main>

      <footer>
        CC-BY-SA 2010-{(new Date()).getUTCFullYear()} Joselito &middot;&nbsp;
        <a
          href="https://github.com/breakzplatform/hello"
          target="_blank"
          rel="noopener noreferrer"
        >
        {footer[lang].sourceLink.text}</a>
        &nbsp;&middot;&nbsp;
        <a href={footer[lang].alternateEmoji.link}>
        {footer[lang].alternateEmoji.text}
        </a>
      </footer>

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
          max-width: 720px;
        }

        .logo img {
          margin: 0 0 1.75rem;
          width: 16rem;
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

        .promo-home {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 468px;
          height: 60px;
          margin: 2rem 1rem;
          font-size: 0.8rem;
          color: #757575;
        }

        .promo-home__logo {
          margin-right: 1rem;
        }

        .promo-home__link {
          border-bottom: 2px solid #757575;
        }

        .promo-home__info {
          margin-top: 0.5rem;
          padding: 0.25rem;
          display: inline-block;
          font-weight: 700;
          font-size: 0.5rem;
          background: #757575;
          color: white;
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
          font-family: 'Iosevka Web',ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;
        }

        .grid {
          display: flex;
          align-items: stretch;
          justify-content: center;
          flex-wrap: wrap;
        }

        .card {
          margin: 1rem;
          flex-basis: calc(50% - 5rem);
          width: calc(100% - 3rem);
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
          font-size: 1rem;
          line-height: 1.618;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .description {
            text-align: left;
          }

          footer {
            height: auto;
            padding: 2rem 1rem;
            text-align: left;
            display: block;
          }

          footer a {
            display: inline-block;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Iosevka Web',ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
