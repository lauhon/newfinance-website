import { Trans, useTranslation } from "next-i18next";
import * as Icon from "react-feather";
import ButtonPrimary from "../shared/buttons/button-primary";

const Splash = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-5 md:px-5 pt-8 flex-col">
      <div className="flex flex-col items-center mt-8 md:mt-12">
        <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[4rem] text-center font-manrope font-bold tracking-tight leading-tight">
          <Trans i18nKey="splash.headline" />
        </h1>
        <p className="text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-secondary font-inter tracking-tight leading-relaxed mt-4 md:mt-6">
          <span className="hidden sm:block">
            <Trans i18nKey="splash.tagline" />
          </span>
          <span className="block sm:hidden">
            <Trans i18nKey="splash.taglineSmall" />
          </span>
        </p>
        <div className="mt-6 md:mt-12">
          <ButtonPrimary text="Move to better money" />
        </div>
        <div className="flex flex-row items-center mt-3 text-secondary">
          <Icon.Info size="16" color="black" className="mr-1" />
          <Trans i18nKey="header.allFree" />
        </div>
      </div>
    </section>
  );
};

export default Splash;
