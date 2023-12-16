import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";
import bg from "../../../public/images/BackgroundInflation.png";

const Inflation = () => {
  const { t } = useTranslation("common");
  const InflationGraph = require("~/public/images/InflationGraph.png");

  return (
    <section className="flex flex-col items-center px-4 md:px-8  pb-16 space-y-8 md:space-y-16">
      <div className="flex border-b-1 pb-24 justify-center">
        <h3 className="flex text-2xl font-manrope font-medium text-black text-center md:w-5/6">
          <Trans i18nKey="inflation.quote" />
        </h3>
      </div>
      <div className="text-center w-full justify-center items-center md:w-2/3 pt-16">
        <h2 className="text-[3.2rem] md:text-[4rem] lg:text-[5rem] text-default font-manrope font-semibold tracking-tight leading-none">
          <Trans i18nKey="inflation.headline_1" />
          <br />
        </h2>
        <p className="px-6 text-xl font-manrope font-medium text-black text-center mt-12">
          <Trans i18nKey="inflation.headline_text" />
        </p>
      </div>
      <div
        className="flex flex-col space-y-12 items-center py-32 px-6 sm:px-8 md:px-16 bg-[#EDEEF0] rounded-2xl w-full min-h-[800px]"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: "bottom",
        }}
      >
        <div className="flex-1 justify-end items-end">
          <Image
            src={InflationGraph}
            height={450}
            alt="Graph about Inflation and Bitcoin"
            className="flex"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col items-center">
            <div className="mt-2">
              <span className="flex flex-row items-center text-center text-base font-manrope font-medium text-white">
                <span>
                  <Trans i18nKey="inflation.benefit1_1" />
                  <span className="text-[#B5B5B5]">
                    <Trans i18nKey="inflation.benefit1_2" />
                  </span>
                </span>
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#cdcdcd00] via-[#cdcdcd] mt-2"></div>
            </div>

            <div className="mt-2">
              <span className="flex flex-row items-center text-center text-base font-manrope font-medium text-white">
                <span>
                  <Trans i18nKey="inflation.benefit2_1" />
                  <span className="text-[#B5B5B5]">
                    <Trans i18nKey="inflation.benefit2_2" />
                  </span>
                </span>
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#cdcdcd00] via-[#cdcdcd] mt-2"></div>
            </div>

            <div className="mt-2">
              <span className="flex flex-row items-center text-center text-base font-manrope font-medium text-white">
                <span>
                  <Trans i18nKey="inflation.benefit3_1" />
                  <span className="text-[#B5B5B5]">
                    <Trans i18nKey="inflation.benefit3_2" />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inflation;
