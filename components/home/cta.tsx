import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";
import * as Icon from "react-feather";
import ButtonArrowTall from "../shared/buttons/button-arrow-tall";

const CallToActionArea = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex justify-center content-center bg-[#16181D] border-t-1 border-b-1 border-[#2C303A] transition-all px-6 md:px-14 lg:px-28 pt-32 pb-32 ">
      <div className="w-[1000px] max-w-full space-y-2 sm:space-y-4">
        <div className="flex">
          <Link
            href="https://barackobama.medium.com/"
            target="_blank"
            className="flex flex-row text-white py-1.5 px-3 rounded-full font-manrope text-xs mb-3 border-1 border-[#2C303A] hover:border-[#464A55] transition-all duration-500"
          >
            <span>Why Non-Custodian matters</span>
            <div className="mx-2 border-l-1 my-0.5 border-[#2C303A]"></div>
            <div className="flex items-center">
              <span className="text-[#772AE8]">Check Out</span>
              <Icon.ArrowRight size={14} className="text-[#772AE8] ml-0.5" />
            </div>
          </Link>
        </div>

        <h1 className="hidden sm:block w-full text-[2rem] md:text-[2.8rem] text-white font-manrope font-regular tracking-tight leading-tight">
          <Trans i18nKey="cta.headline_1" />
          <span className="text-[#757679]">
            <Trans i18nKey="cta.headline_2" />
          </span>
        </h1>

        <h1 className="sm:hidden w-full text-[2rem] md:text-[2.8rem] text-white font-manrope font-regular tracking-tight leading-tight">
          <Trans i18nKey="cta.headline_1_xs" />
          <span className="text-[#757679]">
            <Trans i18nKey="cta.headline_2_xs" />
          </span>
        </h1>

        <div className="flex flex-col items-starts sm:flex-row space-x-6">
          <div className="flex mt-3.5">
            <ButtonArrowTall href="#" text="Move to better money" />
          </div>
          <div className="flex flex-row items-center sm:justify-center justify-start mt-4 text-secondary text-xs text-[#7D7E81] font-manrope font-regular">
            <div className="flex w-3 h-3 bg-[#7D7E81] rounded-full items-center justify-center mr-1.5">
              <Icon.Check size={8} color="white" />
            </div>
            <Trans i18nKey="header.free" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionArea;
