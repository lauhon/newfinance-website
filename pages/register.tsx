import { ChevronRight, Copy } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";
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

const Register = () => {
  const { i18n } = useTranslation("home");
  const { t } = useTranslation("common");

  const [input, setInput] = useState("");

  const [success, setSuccess] = useState(false);

  const [errorOther, setErrorOther] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

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

  const resetErrorTexts = () => {
    setErrorOther(false);
    setAlreadyRegistered(false);
    setErrorMail(false);
  };

  const handleInput = (value: any) => {
    setInput(value);
    resetErrorTexts();
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

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Verhindert das automatische Neuladen der Seite
    addContactMailjet();
  };

  const copyInvitationLink = () => {
    navigator.clipboard.writeText("getnewfinance.com/login/?invite=30238482");
  };

  const addContactMailjet = async () => {
    const response = await fetch(`/api/email?lang=${i18n.language}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input,
      }),
    });

    if (response.status == 409) {
      setAlreadyRegistered(true);
    }
    if (response.status == 500) {
      setErrorMail(true);
    }
    if (response.status == 200) {
      setSuccess(true);
    }
  };

  const title = t("login.title");

  return (
    <section className="flex flex-col md:flex-row lg:space-x-32 overflow-y-scroll">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
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
        {!success && (
          <div className="flex flex-col items-center md:items-start mt-52">
            <h1 className=" text-2xl text-black font-manrope font-semibold mb-4 text-center md:text-start">
              <Trans i18nKey="login.headline" />
            </h1>

            <form method="POST" onSubmit={handleSubmit}>
              <StandardInput
                value={input}
                onInput={(e: { target: { value: SetStateAction<string> } }) =>
                  handleInput(e.target.value)
                }
                placeholder={t("login.input_email")}
              />
              <div className="pt-3.5" />
              <ButtonStandard text={t("login.button_email")} type="submit" />
            </form>
            {errorOther && (
              <p className="font-manrope text-xs font-semibold mt-3.5 text-red-500 text-center md:text-start">
                <Trans i18nKey="login.errorOther" />
              </p>
            )}
            {errorMail && (
              <p className="font-manrope text-xs font-semibold mt-3.5 text-red-500 text-center md:text-start">
                <Trans i18nKey="login.errorMail" />
              </p>
            )}
            {alreadyRegistered && (
              <p className="font-manrope text-xs font-semibold mt-3.5 text-green-500 text-center md:text-start">
                <Trans i18nKey="login.alreadyRegistered" />
              </p>
            )}
            <p className="font-manrope font-medium text-[#979AA1] text-xs w-full md:w-96  mt-4 leading-relaxed  text-center md:text-start">
              <Trans i18nKey="login.notice" />
            </p>
          </div>
        )}
        {success && (
          <div className="flex flex-col items-center md:items-start mt-52">
            <h1 className=" text-2xl text-black font-manrope font-semibold mb-4 text-center md:text-start">
              <Trans i18nKey="login.success" />
            </h1>
            <p className="text-sm font-manrope font-medium text-center md:text-start">
              <Trans i18nKey="login.successText" />
            </p>
            <button
              onClick={copyInvitationLink}
              className="flex justify-between align-middle w-96 h-12 bg-[#F6F6F6] border-1 border-[#E8E8E8] rounded py-3 px-3 font-manrope font-semibold text-sm mt-4"
            >
              <span>getnewfinance.com/login/?invite=30238482</span>
              <Copy size={20} className=" text-black" />
            </button>
            <p className="font-manrope font-medium text-blue-500 text-xs w-96 mt-4 leading-relaxed  text-center md:text-start">
              <Trans i18nKey="login.successNotice" />
            </p>
            <p className="font-manrope font-medium text-[#979AA1] text-xs w-96 mt-4 leading-relaxed  text-center md:text-start">
              <Trans i18nKey="login.successConditions" />
            </p>
          </div>
        )}
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

export default Register;
