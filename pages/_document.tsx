import Document, { Head, Html, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";

class MyDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
    return (
      <Html className="scroll-smooth" lang={currentLocale as string}>
        <Head />
        <body className="bg-default">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
