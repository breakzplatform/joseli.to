import Document, { Html, Head, Main, NextScript } from "next/document";
import parse from "html-react-parser";
import { configureLanguage } from "../utils/language";

class JoseDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    const language = configureLanguage(ctx);

    return { language, ...initialProps };
  }

  render() {
    const { language } = this.props;

    return (
      <Html lang={!!language ? language : "en"}>
        <Head />
        <body>
          <Main />
          <NextScript />
          {parse(
            '<script async defer data-website-id="a1045690-dc4f-48f2-a21f-e93fce01c7ba" src="https://a.joseli.to/umami.js"></script>'
          )}
        </body>
      </Html>
    );
  }
}

export default JoseDocument;
