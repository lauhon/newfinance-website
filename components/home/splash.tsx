import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";
import * as Icon from "react-feather";
import ButtonArrow from "../shared/buttons/button-arrow";

const Splash = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex px-2 md:px-14 lg:px-28 pt-20 flex-col">
      <div className="flex flex-col items-center mt-24">
        <Link
          href="https://newfinance.medium.com/"
          target="_blank"
          className="flex py-1.5 px-3 rounded-full tracking-tight font-manrope text-xs border-1 border-[#D5DAE4] hover:border-[#a5a7b3] transition-all duration-500"
        >
          <Trans i18nKey="splash.non-custodian" />
          <div className="mx-2 border-l-1 my-0.5 border-[#D5DAE4]"></div>
          <div className="flex items-center">
            <span className="text-[#772AE8]">
              <Trans i18nKey="splash.check-out" />
            </span>
            <Icon.ArrowRight size={14} className="text-[#772AE8] ml-0.5" />
          </div>
        </Link>

        <h1 className="w-full mt-8 text-[3.2rem] md:text-[4rem] lg:text-[5rem] text-default text-center font-manrope font-semibold leading-none tracking-tight">
          <Trans i18nKey="splash.headline" />
        </h1>

        <p className=" md:hidden px-6 text-xl font-manrope font-medium text-black text-center mt-12">
          <Trans i18nKey="splash.tagline" />
        </p>
        <p className="hidden md:flex px-6 text-xl font-manrope font-medium text-black text-center mt-12">
          <Trans i18nKey="splash.tagline-long" />
        </p>

        <div className="mt-12">
          <ButtonArrow href="register" text={t("splash.startButton")} />
        </div>
      </div>
    </section>
  );
};

export default Splash;
