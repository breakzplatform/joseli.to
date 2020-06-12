import { configureLanguage } from "../utils/language";

const App = props => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

App.getInitialProps = async ({ ctx }) => {
  const language = configureLanguage(ctx);

  return {
    language
  };
};

export default App;