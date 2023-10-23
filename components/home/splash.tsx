import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";
import * as Icon from "react-feather";
import bg from "../../public/images/home/BackgroundSplash.png";
import ButtonArrow from "../shared/buttons/button-arrow";

const Splash = () => {
  const { t } = useTranslation("common");

  return (
    <section
      className="flex px-5 md:px-14 lg:px-28 pt-24 flex-col"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionY: "top",
      }}
    >
      <div className="flex flex-col items-center mt-14 md:mt-24">
        <Link
          href="https://newfinance.medium.com/"
          target="_blank"
          className="flex py-1.5 px-3 rounded-full font-manrope text-xs mb-3 border-1 border-[#D5DAE4] hover:border-[#a5a7b3] transition-all duration-500"
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

        <h1 className="w-full text-[2.2rem] md:text-[3.2rem] text-center font-manrope font-semibold tracking-tight leading-tight">
          <Trans i18nKey="splash.headline" />
        </h1>

        <p className="text-base font-manrope font-medium text-[#8E8D95] text-center mt-3 tracking-tighty">
          <Trans i18nKey="splash.tagline" />
        </p>

        <div className="mt-6">
          <ButtonArrow href="register" text={t("splash.startButton")} />
        </div>
        <div className="flex flex-col items-center justify-center mt-3 text-secondary text-[0.65rem] text-[#8E8D95] font-manrope font-semibold tracking-tight">
          <div className="opacity-80 line-through">
            <Trans i18nKey="splash.rarificationTeaser" />
          </div>
          <div>
            <Trans i18nKey="splash.rarification" />
          </div>
        </div>
      </div>
      <div className=" mt-12 text-center md:text-right text-[0.65rem] text-[#8E8D95] font-manrope font-semibold tracking-tight">
        <Trans i18nKey="splash.alphaNotifier" />
      </div>
    </section>
  );
};

export default Splash;
