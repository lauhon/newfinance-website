import { useTranslation } from "next-i18next";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  const { i18n, t } = useTranslation("common");

  const description = t("social.og-description");

  const url = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

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
        <meta property="site_name" content="NewFinance Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={`${url}/images/og-image.jpeg`}
        />

        <meta property="og:image" content={`${url}/images/og-image.jpeg`} />
        <meta property="og:image:type" content="image/jpeg" />

        <meta property="og:image:alt" content="NewFinance Homepage" />

        <meta property="og:url" content={url} />

        <link rel="alternate" href={url} hrefLang="x-default" />
        <link rel="alternate" href={url} hrefLang="en" />
        <link rel="alternate" href={url + "/de"} hrefLang="de" />
      </Head>

      {children}
    </>
  );
};

export default Layout;
