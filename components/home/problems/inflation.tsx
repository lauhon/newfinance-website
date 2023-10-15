import { Check } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";
import bg from "../../../public/images/BackgroundInflation.png";

const Inflation = () => {
  const { t } = useTranslation("common");
  const InflationGraph = require("~/public/images/InflationGraph.png");

  return (
    <section className="flex flex-col items-center px-4 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 space-y-8 md:space-y-16">
      <div className="text-left  w-[1000px] max-w-full">
        <h2 className="text-[2rem] sm:text-[2.4rem] font-manrope font-semibold leading-tight mt-2">
          <Trans i18nKey="inflation.headline_1" />
          <br />
          <span className="text-[#757679]">
            <Trans i18nKey="inflation.headline_2" />
          </span>
        </h2>
        <p className=" text-base font-manrope font-medium text-[#8E8D95] tracking-tighty mt-4">
          <Trans i18nKey="inflation.headline_text" />
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row space-x-6 space-y-16 items-center py-16 px-6 sm:px-8 md:px-16 bg-[#EDEEF0] rounded-2xl w-[1000px] max-w-full min-h-[500px]"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: "bottom",
        }}
      >
        <div>
          <h2 className="text-[1.9rem] sm:text-[2.3rem] font-manrope font-semibold leading-tight text-white">
            <Trans i18nKey="inflation.subheadline" />
          </h2>
          <p className=" text-base font-manrope font-medium text-white mt-4">
            <Trans i18nKey="inflation.text" />
          </p>
          <div className="flex flex-col mt-4 items-start md:items-start">
            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="black" />
                </div>
                <span>
                  <Trans i18nKey="inflation.benefit1_1" />
                  <span className="text-[#B5B5B5]">
                    <Trans i18nKey="inflation.benefit1_2" />
                  </span>
                </span>
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#53545B] mt-2"></div>
            </div>

            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="black" />
                </div>
                <span>
                  <Trans i18nKey="inflation.benefit2_1" />
                  <span className="text-[#B5B5B5]">
                    <Trans i18nKey="inflation.benefit2_2" />
                  </span>
                </span>
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#53545B] mt-2"></div>
            </div>

            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="black" />
                </div>
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
        <div>
          <Image
            src={InflationGraph}
            alt="Graph about Inflation and Bitcoin"
            className=""
          />
          <div className="mt-4 text-right text-[0.65rem] text-[#B5B5B5] font-manrope font-semibold tracking-tight">
            <Trans i18nKey="inflation.notifier" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inflation;
