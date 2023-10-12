import { useTranslation } from "next-i18next";
import QualitiesEasy from "./qualities-easy";
import QualitiesNewFinance from "./qualities-new-finance";
import QualitiesSecurity from "./qualities-security";

const Qualities = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-6 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 flex-col space-y-8 md:space-y-16">
      <QualitiesEasy />
      <QualitiesNewFinance />
      <QualitiesSecurity />
    </section>
  );
};

export default Qualities;
