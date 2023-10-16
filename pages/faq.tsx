import * as Icon from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReactNode } from "react";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const faqItemsGeneralDE = [
  {
    id: "products",
    title: "Welche Produkte bietet ihr an?",
    icon: "Kanban",
    text: "Mit NewFinance kannst du in Bitcoin investieren und deine finanzielle Zukunft absichern. Die derzeitige Wirtschaftslage macht das leider notwendig. Bitcoin wird von Millionen von Menschen als Wertanlage verwendet.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "who",
    title: "Wer kann NewFinance verwenden?",
    icon: "User",
    text: "Jeder. Das ist die Vision von NewFinance und Bitcoin. Niemand wird ausgeschlossen und jeder hat die gleichen Vorraussetzungen.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "bank",
    title: "Seid ihr eine Bank?",
    icon: "Landmark",
    text: "Nein. Wir möchten nur alle nützlichen Funktionen einer Bank anbieten, aber nicht wie eine Bank sein.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "pricing",
    title: "Was kostet mich NewFinance?",
    icon: "Coins",
    text: "Für dich ist NewFinance während der Beta absolut kostenlos. Nach Ablauf der Beta bleibt NewFinance für alle Beta Nutzer weiter kostenlos.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "general",
    title: "Gibt es eine kostenlose Testversion?",
    icon: "Check",
    text: "Ja, du kannst uns kostenlos testen. Wenn du dich vor Dezember registrierst, erhältst du NewFinance ein Leben lang kostenlos.",
    linkText: "Sieh dir die Preise an.",
    link: "/privacy",
  },
  {
    id: "general",
    title: "Wie kann ich NewFinance verwenden?",
    icon: "Smartphone",
    text: "Du kannst die App im AppStore und im Google Play Store herunterladen.",
    linkText: "Jetzt herunterladen.",
    link: "https://apple.com",
    external: true,
  },
  {
    id: "general",
    title: "Welche Gebühren fallen an?",
    icon: "CreditCard",
    text: "Wir verlangen keine Gebühren. In der Beta-Version musst du nur die Transaktionsgebühren für die Blockchain bezahlen. In der endgültigen Version wollen wir auch diese Gebühren für dich übernehmen.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Kann ich an eine Iban senden / von einer Iban empfangen?",
    icon: "Send",
    text: "In der endgültigen Version, ja. In der Beta-Version werden wir diese Funktion nach und nach für frühe Nutzer freischalten.",
    linkText: "",
    link: "",
  },
];

const faqItemsMovingDE = [
  {
    id: "general",
    title:
      "Wie benutze ich NewFinance, ohne etwas über Krypto / Bitcoin zu wissen??",
    icon: "Smile",
    text: "Du musst nichts darüber wissen. Lade die App herunter und schon bist du bereit loszulegen.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Kann ich von einem anderen Bitcoin-Wallet zu NewFinance wechseln?",
    icon: "CornerUpRight",
    text: "Ja, importiere einfach deine Seed-Phrase oder deinen privaten Schlüssel. Unsere MPC-Technologie erledigt den Rest.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Kann ich von einer Bank zu NewFinance wechseln?",
    icon: "CornerUpRight",
    text: "Das ist unser Ziel, den vollen Umfang der Funktionen einer Bank zu haben, ohne dass du Geld bei einer Bank haben musst. Dies ist in der Beta-Version noch nicht verfügbar.",
    linkText: "Probiere gleich die App, um einer der ersten zu sein.",
    link: "/login",
  },
  {
    id: "general",
    title:
      "Kann ich von einem anderen Nicht-Bitcoin Wallet zu NewFinance wechseln?",
    icon: "CornerUpRight",
    text: "Das ist möglich, aber es wird dir nur dein Bitcoin-Bestand angezeigt, nicht deine anderen Kryptowährungen.",
    linkText: "",
    link: "",
  },
];

const faqItemsSafetyDE = [
  {
    id: "safety",
    title: "Wie ist mein Geld gesichert?",
    icon: "ShieldCheck",
    text: "Dein Geld ist sicher verwahrt auf der Bitcoin Blockchain. Den Zugang dazu besitzt ausschließlich du lokal verschlüsselt auf deinem Smartphone.",
    linkText: "",
    link: "",
    isExpanded: false,
  },
  {
    id: "general",
    title: "Wer hat Zugriff auf mein Geld.",
    icon: "Key",
    text: "Anders als bei Banken hast nur du Zugang dazu. Wir sind technisch nicht in der Lage, auf dein Geld zuzugreifen.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Wie sicher ist mein Geld?",
    icon: "Lock",
    text: "Wir sichern dein Geld mit der MPC-Technologie, die bereits von Institutionen zur Sicherung von Milliarden von Dollar verwendet wird. Dies ist derzeit die sicherste Wallet-Technologie.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Was ist MPC?",
    icon: "Box",
    text: "Das ist die Abkürzung für Multi-Party-Computation und ist die Technologie, um dein Geld sicher und einfach zu halten.",
    linkText: "Erfahre mehr.",
    link: "https://eprint.iacr.org/2020/300",
    external: true,
  },
  {
    id: "general",
    title: "Wo wird mein Geld aufbewahrt?",
    icon: "DollarSign",
    text: "Dein Geld ist auf der Bitcoin Blockchain gesichert und nur du hast Zugang dazu. Dein so genannter Private Key, dein Zugang zu deinem Geld, ist mit unserer MPC-Technologie sicher gespeichert. ",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Was ist, wenn ich mein Smartphone verliere?",
    icon: "Repeat",
    text: "Keine Sorge, wir sichern automatisch alles, was du verlieren könntest.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Wo ist meine Seedphrase",
    icon: "Cloud",
    text: "Dank der MPC-Technologie musst du nicht mehr eine komplizierte Seedphrase aufschreiben. Aber wenn du willst, kannst du sie jederzeit anzeigen lassen und selbst sichern.",
    linkText: "",
    link: "",
  },
];

const faqItemsEnthusiastsDE = [
  {
    id: "general",
    title: "Wann Lightning?",
    icon: "Zap",
    text: "Nach dem Start unserer Private-Beta wird es unser Hauptziel sein, dir vollen Lightning-Zugang zu bieten. (Für alle, die nicht wissen, was Lightning ist: Du brauchst nicht wissen was das ist, um NewFinance zu nutzen).",
    linkText: "",
    link: "",
  },
];

const faqItemsGeneral = [
  {
    id: "general",
    title: "Is there a free trial available?",
    icon: "Check",
    text: "Yes, you can try us for free. If you register before December, you get NewFinance free for lifetime.",
    linkText: "See our Billing.",
    link: "/privacy",
  },
  {
    id: "general",
    title: "How can I use NewFinance?",
    icon: "Smartphone",
    text: "You can download the App on AppStore and Google Play.",
    linkText: "Download now.",
    link: "https://apple.com",
    external: true,
  },
  {
    id: "general",
    title: "What fees do I have to pay?",
    icon: "CreditCard",
    text: "We do not charge fees. In the Beta-Version, you only have to pay the transaction fees for the blockchain. In the final version, we want to get rid of that fees.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Can I send to / receive from an Iban?",
    icon: "Send",
    text: "In the final verion, yes. In the Beta-Version we will gradually unlock this feature for early users.",
    linkText: "",
    link: "",
  },
];

const faqItemsMoving = [
  {
    id: "general",
    title: "How do I use NewFinance without knowing anything about Crypto?",
    icon: "Smile",
    text: "Download the app and send some money to your NewFinance account. Simple as that, you are ready to go.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Can I switch from another Bitcoin wallet?",
    icon: "CornerUpRight",
    text: "Yes, just import your seed phrase or private key. Our MPC technology will do the rest.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Can I switch from a bank?",
    icon: "CornerUpRight",
    text: "This is our final goal, having the full capacity of a bank, without giving away your money to the bank. This is not available in the Beta-Version.",
    linkText: "Give us a try anyway, so that we can get this far together.",
    link: "/login",
  },
  {
    id: "general",
    title: "Can I switch from another Non-Bitcoin wallet?",
    icon: "CornerUpRight",
    text: "It's possible, but you have to convert your cryptocurrency to Bitcoin beforehand.",
    linkText: "",
    link: "",
  },
];

const faqItemsSafety = [
  {
    id: "general",
    title: "Who have access to my money?",
    icon: "Key",
    text: "Other than with banks, only you have access to it. We are technically unable to access your money.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "How save is my money?",
    icon: "Lock",
    text: "We are securing your money with MPC-technology, already used by institutions to secure billions of dollars. This is currently the savest non-custodial wallet technology.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "What is MPC?",
    icon: "Box",
    text: "That's Multi-Party-Computation and is the technology to keep your money save and easy.",
    linkText: "Read more.",
    link: "https://eprint.iacr.org/2020/300",
    external: true,
  },
  {
    id: "general",
    title: "Where is my money stored?",
    icon: "DollarSign",
    text: "Your money is secured on the Bitcoin Blockchain and only you have access to it. Your so called Private Key, your access to your money is securely saved with our MPC technology. ",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "What if I loose my phone?",
    icon: "Repeat",
    text: "No worries, we automatically back up everything you could loose.",
    linkText: "",
    link: "",
  },
  {
    id: "general",
    title: "Where is my Seedphrase?",
    icon: "Cloud",
    text: "Due to the MPC-technology, you no longer have to write down a complicated Seedphrase. But if you want to, you can have it everytime.",
    linkText: "",
    link: "",
  },
];

const faqItemsEnthusiasts = [
  {
    id: "general",
    title: "When Lightning?",
    icon: "Zap",
    text: "After launching our Private-Beta, giving you full lightning support will be our main goal. (For everyone not knowing what Lightning is, you don't have to for using NewFinance.)",
    linkText: "",
    link: "",
  },
];

const FAQ = () => {
  const { i18n } = useTranslation("home");

  const list = (items: Props[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
      {items.map(
        ({ text, title, icon, id, link, linkText, external }, index) => (
          <FAQItem
            key={id + index}
            title={title}
            icon={icon}
            id={id}
            text={text}
            link={link}
            linkText={linkText}
            external={external}
          ></FAQItem>
        )
      )}
    </div>
  );

  return (
    <Layout>
      <Header line={true} />
      <section className="flex flex-col bg-default">
        <div className="mt-28">
          <div className=" px-4 md:px-14 lg:px-28 xl:px-44 pt-16 pb-28">
            <span className="font-manrope text-xs text-[#4e4e50]">FAQ</span>
            <h1
              id="first-section"
              className="text-[2.2rem] sm:text-[3rem] font-manrope font-semibold leading-tight mt-2"
            >
              <Trans i18nKey="faq.headline" />
            </h1>
            <div className=" mt-28 pb-14 border-b-1">
              <h2 className="text-[1.8rem] sm:text-[2.4rem] font-manrope font-medium leading-tight  mb-14">
                <Trans i18nKey="faq.subheadline_1" />
              </h2>
              {list(
                i18n.language == "en" ? faqItemsGeneral : faqItemsGeneralDE
              )}
            </div>
            <div className=" mt-16 pb-14 border-b-1">
              <h2 className="text-[1.8rem] sm:text-[2.4rem] font-manrope font-medium leading-tight  mb-14">
                <Trans i18nKey="faq.subheadline_2" />
              </h2>
              {list(i18n.language == "en" ? faqItemsMoving : faqItemsMovingDE)}
            </div>
            <div className=" mt-16 pb-14 border-b-1">
              <h2 className="text-[1.8rem] sm:text-[2.4rem] font-manrope font-medium leading-tight  mb-14">
                <Trans i18nKey="faq.subheadline_3" />
              </h2>
              {list(i18n.language == "en" ? faqItemsSafety : faqItemsSafetyDE)}
            </div>
            <div className=" mt-16 pb-14">
              <h2 className="text-[1.8rem] sm:text-[2.4rem] font-manrope font-medium leading-tight  mb-14">
                <Trans i18nKey="faq.subheadline_4" />
              </h2>
              {list(
                i18n.language == "en"
                  ? faqItemsEnthusiasts
                  : faqItemsEnthusiastsDE
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

export default FAQ;

type Props = {
  id: string;
  title: string;
  text: ReactNode;
  icon: string;
  link: string;
  linkText: string;
  external?: boolean;
};

function FAQItem({ id, title, text, icon, link, linkText, external }: Props) {
  const MyIcon = Icon[icon as keyof typeof Icon.icons] || Icon["Smile"];

  return (
    <div className="flex flex-row gap-3">
      <div>
        <div className=" p-2.5 border-1 rounded-lg border-gray-300">
          <MyIcon size={17} />
        </div>
      </div>
      <div className="flex flex-col">
        <h5 className="font-manrope font-bold text-base leading-6 lg:w-5/6 mb-1">
          {title}
        </h5>
        <p className="font-manrope text-medium text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-3">
          {text}{" "}
          {link != "" && (
            <Link
              className="underline"
              href={link || "#"}
              target={external ? "_blank" : "_self"}
            >
              {linkText}
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
