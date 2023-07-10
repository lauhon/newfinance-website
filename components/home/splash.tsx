import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";
import * as Icon from "react-feather";
import ButtonArrowTall from "../shared/buttons/button-arrow-tall";

const Splash = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-5 md:px-5 pt-16 flex-col">
      <div className="flex flex-col items-center mt-28">
        <Link
          href="#"
          className="flex py-1.5 px-3 rounded-full font-manrope text-xs mb-3 border-1 border-[#D5DAE4] hover:border-[#a5a7b3] transition-all duration-500"
        >
          <span>Why Non-Custodian matters</span>
          <div className="mx-2 border-l-1 my-0.5 border-[#D5DAE4]"></div>
          <div className="flex items-center">
            <span className="text-[#772AE8]">Check Out</span>
            <Icon.ArrowRight size={14} className="text-[#772AE8] ml-0.5" />
          </div>
        </Link>

        <h1 className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 text-[2rem] md:text-[2.8rem] text-center font-manrope font-regular tracking-tight leading-tight">
          <Trans i18nKey="splash.headline_1" />
          <span className="text-[#757679]">
            <Trans i18nKey="splash.headline_2" />
          </span>
        </h1>

        <div className="mt-3.5">
          <ButtonArrowTall href="#" text="Move to better money" />
        </div>
        <div className="flex flex-row items-center justify-center mt-4 text-secondary text-xs text-[#7D7E81] font-manrope font-regular">
          <div className="flex w-3 h-3 bg-[#7D7E81] rounded-full items-center justify-center mr-1.5">
            <Icon.Check size={8} color="white" />
          </div>
          <Trans i18nKey="header.free" />
        </div>
      </div>
    </section>
  );
};

export default Splash;
