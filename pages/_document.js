import Document, { Html, Head, Main, NextScript } from "next/document";
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
        </body>
      </Html>
    );
  }
}

export default JoseDocument;
