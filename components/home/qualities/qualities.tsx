import { Trans, useTranslation } from "next-i18next";
import ButtonArrow from "~/components/shared/buttons/button-arrow";
import QualitiesEasy from "./qualities-easy";
import QualitiesPockets from "./qualities-pockets";
import QualitiesTransfer from "./qualities-transfer";

const Qualities = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-6 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 flex-col space-y-8 md:space-y-16">
      <QualitiesEasy />
      <QualitiesTransfer />
      <QualitiesPockets />
      <div>
        <ButtonArrow text="Check out how simple it is" href="login" />
        <div className="flex flex-col items-center justify-center mt-3 text-[0.65rem] text-[#8E8D95] font-manrope font-semibold tracking-tight">
          <div>
            <Trans i18nKey="qualities.buttonInfo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
