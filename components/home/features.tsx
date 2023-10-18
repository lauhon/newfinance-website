import { Check } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";

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

const Features = () => {
  const { t } = useTranslation("common");

  return (
    <section className="relative flex flex-col items-center px-4 md:px-14 lg:px-28 md:pt-32 md:pb-44 pt-16 pb-16 space-y-8 md:space-y-8 overflow-hidden">
      <div className="text-left w-[1000px] max-w-full">
        <h2 className="text-[2rem] sm:text-[2.4rem] font-manrope font-semibold leading-tight mt-2">
          <Trans i18nKey="features.headline_1" />
          <br />
          <span className="text-[#757679]">
            <Trans i18nKey="features.headline_2" />
          </span>
        </h2>
        <p className=" text-base font-manrope font-medium text-[#8E8D95] tracking-tighty mt-4">
          <Trans i18nKey="features.headline_text" />
        </p>
      </div>
      <div className="flex items-start left-0 mb-0 flex-row space-x-24 w-[1800px] overflow-hidden">
        {/* TODO: on smaller screens this just gets cut, meaning that the user cant see all points */}
        {data.map((item, i) => (
          <div key={i}>
            <h4 className=" text-lg font-manrope font-semibold text-black">
              {item.headline}
            </h4>
            <div className="mt-2 opacity-50">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-black">
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
