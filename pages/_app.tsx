import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import "../styles/globals.css";

import "@fontsource/nunito/200.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/800.css";
import "@fontsource/source-serif-4/400.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
