import Router from "next/router";
export const fallbackLanguage = "en";
export const languages = ["pt", "br", "en"];

export const validateLanguage = (lang) => {
  return languages.includes(lang)
    ? lang === "br"
      ? "pt"
      : lang
    : fallbackLanguage;
};

export const isValidLanguage = (lang) => {
  return languages.includes(lang);
};

export const getLanguage = (lang) => {
  let language = lang.match(/[a-zA-Z\-]{2,10}/g)[0] || fallbackLanguage;
  language = language.split("-")[0];

  return validateLanguage(language);
};

export const redirectToLanguage = (language = fallbackLanguage, res) => {
  if (res) {
    res.writeHead(302, {
      Location: `/${language}/`,
    });

    return res.end();
  }

  Router.push(`/${language}/`);
};

export const configureLanguage = (ctx) => {
  const { req, res, asPath, query } = ctx;

  const language = req
    ? req.headers["accept-language"]
    : window.navigator.language;

  let lang = getLanguage(language, ctx);

  if (asPath === "/") {
    redirectToLanguage(lang, res);
  } else {
    lang = validateLanguage(query.lang);

    !isValidLanguage(query.lang) && redirectToLanguage(lang, res);
  }

  return lang;
};
