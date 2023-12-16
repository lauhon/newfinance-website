import { Trans, useTranslation } from "next-i18next";
import QualitiesEasy from "./qualities-easy";
import QualitiesPockets from "./qualities-pockets";
import QualitiesTransfer from "./qualities-transfer";

const Qualities = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-4 md:px-8 md:pt-32 md:pb-32  pb-16 flex-col space-y-6">
      <div className="text-center w-full justify-center items-center md:w-2/3 pt-16">
        <h2 className="text-[3.2rem] md:text-[4rem] lg:text-[5rem] text-default font-manrope font-semibold tracking-tight leading-none">
          <Trans i18nKey="qualities.headline" />
          <br />
        </h2>
        <p className="px-6 text-xl font-manrope font-medium text-black text-center mt-12 mb-10">
          <Trans i18nKey="qualities.headline_text" />
        </p>
      </div>
      <QualitiesEasy />
      <QualitiesTransfer />
      <QualitiesPockets />
    </section>
  );
};

export default Qualities;
