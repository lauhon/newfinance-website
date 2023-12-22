import { Trans, useTranslation } from "next-i18next";
import ButtonArrow from "../shared/buttons/button-arrow";

const CallToActionArea = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex justify-center content-center transition-all mx-6 pb-32">
      <div className="flex flex-col items-center pt-28 md:pt-32 w-[1000px] max-w-full  border-t-1 border-[#EDEEF0]">
        <h1 className="w-full mt-8 text-[3.2rem] md:text-[4rem] lg:text-[5rem] text-default text-center font-manrope font-semibold leading-none tracking-tight">
          <Trans i18nKey="cta.headline" />
        </h1>
        <p className="px-6 text-xl font-manrope font-medium text-black text-center mt-12">
          <Trans i18nKey="cta.headline_text" />
        </p>
        <div className="mt-12">
          <ButtonArrow href="register" text={t("splash.startButton")} />
        </div>
      </div>
    </section>
  );
};

export default CallToActionArea;
