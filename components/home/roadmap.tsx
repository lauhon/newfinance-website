import { Trans, useTranslation } from "next-i18next";
import BabyText from "../shared/text/baby-text";

const RoadmapArea = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex transition-all items-center px-6 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 flex-col space-y-8 md:space-y-16">
      <div className="text-center">
        <BabyText text="ROADMAP" />
        <h2 className="text-[1.6rem] md:text-[2.2rem] text-center font-manrope font-regular leading-tight mt-2 text-white">
          <Trans i18nKey="roadmap.headline_1" />
          <br />
          <span className="text-[#757679]">
            <Trans i18nKey="roadmap.headline_2" />
          </span>
        </h2>
      </div>
      <div className="flex justify-center items-center w-[600px] max-w-full h-[500px] bg-gradient-to-br from-[#909090] to-5% rounded-lg p-[0.5px]">
        <div className="w-full h-full bg-gradient-to-br from-[#343636] via-[#3A3A3A] to-[#3A3A3A] rounded-lg"></div>
      </div>
    </section>
  );
};

export default RoadmapArea;
