import { Trans } from "next-i18next";

const Qualities = () => {
  return (
    <section className="flex mx-3 md:mx-5 mt-32 md:mt-48">
      <p className="font-manrope text-medium text-[27px] md:text-[42px] w-full md:w-3/4 leading-[1.15]">
        <Trans i18nKey="qualities.first" />
        <span className="text-[#999999]">
          {" "}
          <Trans i18nKey="qualities.second" />
        </span>{" "}
        <Trans i18nKey="qualities.third" />
      </p>
    </section>
  );
};

export default Qualities;
