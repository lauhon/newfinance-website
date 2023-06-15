import { Trans, useTranslation } from "next-i18next";
import * as Icon from "react-feather";
import ButtonPrimary from "../shared/buttons/button-primary";

const Splash = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-5 md:px-5 pt-8 flex-col">
      <div className="flex flex-col items-center mt-8 md:mt-24">
        <div className="py-1 px-3 rounded-full bg-[#7BFAEC] font-manrope text-sm mb-2">
          <span>Together, lets replace the banks</span>
        </div>
        <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[4rem] text-center font-manrope font-bold tracking-tight leading-tight">
          <Trans i18nKey="splash.headline" />
        </h1>

        <div className="mt-6 md:mt-8">
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
