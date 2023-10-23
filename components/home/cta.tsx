import { Trans, useTranslation } from "next-i18next";
import ButtonArrow from "../shared/buttons/button-arrow";

const CallToActionArea = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex justify-center content-center transition-all mx-6 md:mx-14 lg:mx-28 pb-32">
      <div className="flex flex-col items-center pt-28 md:pt-32 w-[1000px] max-w-full  border-t-1 border-[#EDEEF0]">
        <h1 className="w-full text-[2.2rem] md:text-[3.2rem] text-center font-manrope font-semibold tracking-tight leading-tight">
          <Trans i18nKey="cta.headline" />
        </h1>
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
    </section>
  );
};

export default CallToActionArea;
