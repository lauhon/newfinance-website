import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ReactNode } from "react";
import * as Icon from "react-feather";
import FooterLight from "~/components/layout/footer-light";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const faqItemsGeneral = [
  {
    id: "general",
    title: "Is there a free trial available?",
    icon: "Check",
    text: "Yes, you can try us for free. After that period, it will be free also. Jokes on you.",
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
    text: "Your money is secured on the Bitcoin Blockchain and only you have Access to it. Your so called Private Key, your access to your money is securely saved with our MPC technology. ",
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
      <Header />
      <section className="flex flex-col bg-default">
        <div className="mt-28">
          <div className=" px-4 md:px-14 lg:px-28 xl:px-44 pt-16 pb-28">
            <span className="font-inter text-xs text-[#4e4e50]">FAQ</span>
            <h1
              id="first-section"
              className="text-[2.2rem] sm:text-[3rem] font-manrope font-regular leading-tight mt-2"
            >
              Frequently Asked Questions
            </h1>
            <div className=" mt-28 pb-14 border-b-1">
              <h2 className="text-[1.8rem] sm:text-[2.4rem] font-manrope font-regular leading-tight  mb-14">
                General
              </h2>
              {list(faqItemsGeneral)}
            </div>
            <div className=" mt-16 pb-14 border-b-1">
              <h2 className="text-[1.8rem] sm:text-[2.4rem] font-manrope font-regular leading-tight  mb-14">
                Moving to NewFinance
              </h2>
              {list(faqItemsMoving)}
            </div>
            <div className=" mt-16 pb-14 border-b-1">
              <h2 className="text-[1.8rem] sm:text-[2.4rem] font-manrope font-regular leading-tight  mb-14">
                Safety
              </h2>
              {list(faqItemsSafety)}
            </div>
            <div className=" mt-16 pb-14">
              <h2 className="text-[1.8rem] sm:text-[2.4rem] font-manrope font-regular leading-tight  mb-14">
                Questions for enthusiasts
              </h2>
              {list(faqItemsEnthusiasts)}
            </div>
          </div>
        </div>
      </section>
      <FooterLight />
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
  const MyIcon = Icon[icon as keyof typeof Icon] || Icon["Smile"];

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
        <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-3">
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
