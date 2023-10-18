import { ChevronRight } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FAQItem from "~/components/shared/faq/faq-item";
import bg from "~/public/images/LoginBackground.png";
const logo_dark = require("~/icons/LogoNewFinance.png");
const appStore = require("~/public/images/AppStore.jpg");
const playStore = require("~/public/images/PlayStore.jpg");
const phoneLogin = require("~/public/images/PhonesLogin.png");

const faqItems = [
  {
    id: "pricing",
    title: "What does NewFinance cost me?",
    icon: "Zap",
    text: "NewFinance is absolutely free for you during the beta. After the end of the beta, NewFinance remains free for all beta users. Only the blockchain fees of Bitcoin will be charged, which will not go to NewFinance. However, we would like to abolish these fees with the introduction of the Lightning network.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "general",
    title: "How do I use NewFinance without knowing anything about Crypto?",
    icon: "Smile",
    text: "Download the app and send some money to your NewFinance account. Simple as that, you are ready to go.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
];

const faqItemsDE = [
  {
    id: "pricing",
    title: "Was kostet mich NewFinance?",
    icon: "Zap",
    text: "Für dich ist NewFinance während der Beta absolut kostenlos. Nach Ablauf der Beta bleibt NewFinance für alle Beta Nutzer weiter kostenlos. Es fallen lediglich die Blockchain Gebühren von Bitcoin an, welche nicht an NewFinance gehen. Diese Gebühren möchten wir jedoch mit Einführung des Lightning Netzwerks abschaffen.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "general",
    title:
      "Wie benutze ich NewFinance, ohne etwas über Krypto / Bitcoin zu wissen??",
    icon: "Smile",
    text: "Du musst nichts darüber wissen. Lade die App herunter und schon bist du bereit loszulegen.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
];

const Download = () => {
  const APKUrl = "https://play.google.com/";
  const iOSUrl = "https://apps.apple.com/";
  const { i18n } = useTranslation("home");
  const { t } = useTranslation("common");

  const [items, setItems] = useState(
    i18n.language == "en" ? faqItems : faqItemsDE
  );

  const [anyOpen, setAnyOpen] = useState(false);

  const clicked = (clickedIndex: number) => {
    setItems(
      items.map((item, index) => ({
        ...item,
        isExpanded: index === clickedIndex,
      }))
    );
    setAnyOpen(clickedIndex !== -1);
  };

  const list = (
    <ul>
      {items.map(({ text, title, id, isExpanded }, index) => (
        <FAQItem
          key={id + index}
          title={title}
          isExpanded={isExpanded}
          onClick={clicked}
          index={index}
          id={id}
        >
          {text}
        </FAQItem>
      ))}
    </ul>
  );

  return (
    <section className="flex flex-col md:flex-row lg:space-x-32 overflow-y-scroll">
      <Head>
        <meta
          property="og:title"
          content={
            i18n.language == "en"
              ? "Download - NewFinance"
              : "Herunterladen - NewFinance"
          }
        />
      </Head>
      <div className="items-center flex-col py-6 pb-24 px-4 lg:px-16 w-100 lg:w-3/6">
        <Link
          className="fixed justify-start hover:opacity-80 transition-all"
          href="/"
          target="_blank"
        >
          <Image
            className="h-[32px] w-auto mb-6"
            alt="NewFinance Logo"
            src={logo_dark}
          />
        </Link>

        <div className="flex flex-col items-center md:items-start mt-52">
          <h1 className=" text-2xl text-black font-manrope font-semibold mb-4 text-center md:text-start">
            <Trans i18nKey="download.headline" />
          </h1>
          <p className="font-manrope text-xs font-semibold mt-3.5 text-red-500 text-center md:text-start">
            <Trans i18nKey="download.notAvailable" />
          </p>
          <p className="font-manrope font-medium text-[#979AA1] text-xs w-full md:w-96  mt-4 leading-relaxed  text-center md:text-start">
            <Trans i18nKey="download.notice" />
          </p>
          <div className="opacity-50">
            <div className="mt-16">
              <button disabled={true}>
                <Image
                  className="h-[64px] w-auto mb-3"
                  alt="AppStore Download Button"
                  src={appStore}
                />
              </button>
            </div>
            <div>
              <button disabled={true}>
                <Image
                  className="h-[64px] w-auto mb-6"
                  alt="PlayStore Download Button"
                  src={playStore}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-32 border-t-1 border-[#EDEEF0] pt-6">
          {list}
          <div className="ml-[-1rem] flex align-text-bottom">
            <Link
              href="faq"
              className="flex align-text-bottom text-lg text-black font-manrope font-semibold hover:bg-slate-50 transition-all px-4 py-3 rounded-sm mt-8"
            >
              <Trans i18nKey="faq.button_more" />

              <ChevronRight size="20" className="text-black mt-1" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="lg:fixed flex items-center justify-center flex-col align-middle right-0 w-3/6 bg-[#000000] h-full  px-8 md:px-0 border-l-1"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: "bottom",
        }}
      ></div>
    </section>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

export default Download;
