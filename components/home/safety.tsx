import { Check } from "lucide-react";
import { Trans } from "next-i18next";
import Image from "next/image";
import bg from "~/public/images/BackgroundSafety.png";

const Safety = () => {
  const safetyGraph = require("~/public/images/safetyGraph.png");

  return (
    <section className="flex flex-col items-center px-4 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 space-y-8 md:space-y-16">
      <div className="text-left  w-[1000px] max-w-full">
        <h2 className="text-[2rem] sm:text-[2.4rem] font-ibm font-semibold leading-tight mt-2 text-white">
          <Trans i18nKey="safety.headline_1" />
          <br />
          <span className="text-[#7D7E81]">
            <Trans i18nKey="safety.headline_2" />
          </span>
        </h2>
        <p className=" text-base font-manrope font-medium text-[#7D7E81] tracking-tighty mt-4">
          <Trans i18nKey="safety.headline_text" />
        </p>
      </div>
      <div
        className="flex flex-col-reverse lg:flex-row  items-start lg:items-center lg:space-x-8 py-16 px-6 sm:px-8 md:px-16 rounded-2xl w-[1000px] max-w-full min-h-[500px]"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: "bottom",
        }}
      >
        <div className="flex-2">
          <h2 className="text-[1.9rem] sm:text-[2.3rem] font-ibm font-semibold leading-tight tracking-wide text-white">
            <Trans i18nKey="safety.subheadline" />
          </h2>
          <p className=" text-base font-manrope font-medium text-[#7D7E82] mt-4">
            <Trans i18nKey="safety.text" />
          </p>
          <div className="flex flex-col mt-4 items-start md:items-start">
            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="black" />
                </div>
                <span>
                  <Trans i18nKey="safety.benefit1_1" />
                  <span className="text-[#7D7E82]">
                    <Trans i18nKey="safety.benefit1_2" />
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
                  <Trans i18nKey="safety.benefit2_1" />
                  <span className="text-[#7D7E82]">
                    <Trans i18nKey="safety.benefit2_2" />
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
                  <Trans i18nKey="safety.benefit3_1" />
                  <span className="text-[#7D7E82]">
                    <Trans i18nKey="safety.benefit3_2" />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4">
          <Image
            src={safetyGraph}
            alt="Graph about safety and Bitcoin"
            className="pb-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Safety;
