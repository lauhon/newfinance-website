import { useTranslation } from "next-i18next";
import Head from "next/head";
import { ReactNode } from "react";
import ButtonArrow from "../shared/buttons/button-arrow";

const description = "NewFinance. Invest and secure your future with Bitcoin.";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  {
    /* <html lang={i18next.language} class="h-full motion-safe:scroll-smooth"> */
  }
  // <body class="h-full overflow-x-hidden text-base bg-default text-default selection:bg-secondary selection:text-white">
  const { i18n } = useTranslation("home");
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}

        <title>NewFinance©</title>
        <meta name="description" content={description} />

        <meta
          property="og:title"
          content={
            i18n.language == "en"
              ? "NewFinance - Invest in bitcoin"
              : "NewFinance - Investiere in Bitcoin"
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:image"
          content="https://example.com/images/social.png"
        />
        <meta property="og:url" content="https://example.com" />

        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com/de" hrefLang="de" />
      </Head>
      <div className="fixed flex space-x-8 align-middle flex-row left-1/2 -translate-x-1/2 z-50 bg-white px-6 py-4 rounded-3xl bottom-8 shadow-2xl">
        <div className="font-manrope text-sm font-semibold">
          Dürfen wir Cookies verwenden?
          <br />
          Erfahre hier mehr
        </div>
        <div>
          <ButtonArrow
            color="#EEF1F5"
            text={i18n.language == "en" ? "Decline" : "Ablehnen"}
            inverted={true}
            icon="X"
          />
        </div>
        <div>
          <ButtonArrow
            text={i18n.language == "en" ? "Accept" : "Akzeptieren"}
            icon="Check"
          />
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
