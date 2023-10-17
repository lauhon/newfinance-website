import { ChevronRight } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ButtonStandard from "~/components/shared/buttons/button-standard";
import FAQItem from "~/components/shared/faq/faq-item";
import StandardInput from "~/components/shared/inputs/standard-input";
import bg from "~/public/images/LoginBackground.png";
const logo_dark = require("~/icons/LogoNewFinance.png");
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
    id: "safety",
    title: "How is my money secured?",
    icon: "Zap",
    text: "Your money is safely stored on the Bitcoin blockchain. Only you have access to it locally encrypted on your smartphone. Our MPC encryption technology protects your access. If you lose your smartphone, your access is protected by a backup.",
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
    id: "safety",
    title: "Wie ist mein Geld gesichert?",
    icon: "Zap",
    text: "Dein Geld ist sicher verwahrt auf der Bitcoin Blockchain. Den Zugang dazu besitzt ausschließlich du lokal verschlüsselt auf deinem Smartphone. Unsere MPC Verschlüsselungstechnologie schützt dabei deinen Zugang. Bei Verlust deines Smartphones ist dein Zugang durch ein Backup abgesichert.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
];

//bg-gradient-to-t from-[#FAFAFA] via-[#FFFFFF] to-[#FFFFFF]

const Login = () => {
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
    <section className="flex flex-col md:flex-row space-x-32 overflow-y-scroll">
      <div className="items-center flex-col py-6 pb-24 px-16 w-3/6">
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
        <div className="mt-52">
          <h1 className=" text-2xl text-black font-manrope font-semibold mb-4">
            <Trans i18nKey="login.headline" />
          </h1>
          <StandardInput placeholder={t("login.input_email")} />
          <div className="pt-3.5" />
          <ButtonStandard text={t("login.button_email")} />
          <p className="font-manrope font-medium text-[#979AA1] text-xs w-96 text-start mt-4 leading-relaxed ">
            <Trans i18nKey="login.notice" />
          </p>
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

export default Login;
