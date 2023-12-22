import { Check } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import { useState } from "react";

const data = [
  {
    headline: "Bitcoin pockets",
    text: "Bitcoin based",
  },
  {
    headline: "SEPA transfer*",
    text: "Direct to/from pockets",
  },
  {
    headline: "Money pockets*",
    text: "Stable coin based (€, $)",
  },
  {
    headline: "Standing orders*",
    text: "For auto payments",
  },
  {
    headline: "Free worldwide transfers",
    text: "Via bitcoin/lightning network",
  },
  {
    headline: "No account fees",
    text: "Basic plan, Alpha users unlimited",
  },
];

const dataDE = [
  {
    headline: "Bitcoin Pockets",
    text: "Bitcoin basierend",
  },
  {
    headline: "SEPA Überweisung*",
    text: "Direkt von/zu Pockets",
  },
  {
    headline: "Money Pockets*",
    text: "Stable Coin basierend (€, $)",
  },
  {
    headline: "Daueraufträge*",
    text: "Für automatisch Zahlungen",
  },
  {
    headline: "Kostenlose weltweite Überweisungen",
    text: "Via Bitcoin/Lightning Netzwerk",
  },
  {
    headline: "Keine Account Gebühren",
    text: "Basic Plan, Alpha Nutzer unlimitiert",
  },
];

const Features = () => {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation("home");
  const [items, setItems] = useState(i18n.language == "en" ? data : dataDE);

  return (
    <section className="relative flex flex-col items-center px-4 md:px-14 lg:px-28 md:pt-32 pt-16 pb-16 overflow-hidden">
      <div className="text-left w-[1000px] max-w-full">
        <h2 className="text-[2.8rem] md:text-[3.2rem] lg:text-[3.6rem] text-center text-default font-manrope font-semibold tracking-tight leading-none">
          <Trans i18nKey="features.headline" />
        </h2>
        <p className="text-xl font-manrope font-medium text-black text-center mt-12">
          <Trans i18nKey="features.headline_text" />
        </p>
        <p className="text-xl font-manrope font-medium text-[#595959] text-center mt-12">
          <Trans i18nKey="features.later" />
        </p>
      </div>
      <div className="hidden md:inline-flex min-w-max items-start left-0 mb-0 flex-row space-x-24  overflow-hidden mt-16">
        {/* TODO: on smaller screens this just gets cut, meaning that the user cant see all points */}
        {items.map((item, i) => (
          <div key={i}>
            <h4 className=" text-lg font-manrope font-semibold text-black">
              {item.headline}
            </h4>
            <div className="mt-2 opacity-50">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-black min-w-max">
                <div className="flex w-4 h-4 bg-black rounded-full items-center justify-center mr-2">
                  {" "}
                  <Check size={8} color="white" />
                </div>
                <span>{item.text}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
