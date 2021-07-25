import App from "next/app";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps, locale }) {
  global.locale = locale; // For client side usage

  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  global.locale = appContext.router.locale; // For server side usage

  return { ...appProps, locale: global.locale };
};

export default appWithTranslation(MyApp);
