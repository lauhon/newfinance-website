import { Trans, useTranslation } from "next-i18next";

const Qualities = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-6 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 flex-col space-y-8 md:space-y-16">
      <div className="text-center">
        <h2 className="text-[2rem] sm:text-[2.8rem] font-manrope font-semibold leading-tight mt-2">
          <Trans i18nKey="inflation.headline_1" />
          <br />
          <span className="text-[#757679]">
            <Trans i18nKey="inflation.headline_2" />
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Qualities;
