import { Trans, useTranslation } from "next-i18next";
import BabyText from "~/components/shared/text/baby-text";
import QualitiesBank from "./qualities-bank";
import QualitiesEasy from "./qualities-easy";
import QualitiesNewFinance from "./qualities-new-finance";
import QualitiesSecurity from "./qualities-security";

const Qualities = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-6 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 flex-col space-y-8 md:space-y-16">
      <div className="text-center">
        <BabyText text="WALLET" />
        <h2 className="text-[1.6rem] md:text-[2.2rem] text-center font-manrope font-regular leading-tight mt-2">
          <Trans i18nKey="qualities.headline_1" />
          <br />
          <span className="text-[#757679]">
            <Trans i18nKey="qualities.headline_2" />
          </span>
        </h2>
      </div>
      <QualitiesBank />
      <QualitiesEasy />
      <QualitiesNewFinance />
      <QualitiesSecurity />
    </section>
  );
};

export default Qualities;
