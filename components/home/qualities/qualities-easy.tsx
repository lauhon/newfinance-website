import { Check } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";

const QualitiesEasy = () => {
  const { t } = useTranslation("common");
  const BitcoinPhone = require("~/public/images/BitcoinPhone.png");

  return (
    <div className="flex flex-col py-16 md:py-0 md:flex-row px-8 md:px-0 md:pl-12 lg:pl-16 items-center border-1 border-[#DADADA] rounded-2xl w-[1000px] max-w-full min-h-[500px]">
      <div className="flex-1 justify-center">
        <h2 className="text-[2rem] sm:text-[2.4rem] text-center md:text-left font-manrope font-semibold leading-tight">
          <Trans i18nKey="qualitiesEasy.headline" />
        </h2>
        <p className="text-base text-center md:text-left font-manrope font-medium text-[#7D7E82] mt-4">
          <Trans i18nKey="qualitiesEasy.text" />
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-2 xl:grid-rows-2 items-center md:items-start  mt-4">
          <div className="mt-2">
            <span className="flex flex-row items-center text-base font-manrope font-medium text-black">
              <div className="flex w-4 h-4 bg-black rounded-full items-center justify-center mr-2">
                {" "}
                <Check size={8} color="white" />
              </div>
              <span>
                <Trans i18nKey="qualitiesEasy.benefit1" />
              </span>
            </span>
          </div>

          <div className="mt-2">
            <span className="flex flex-row items-center text-base font-manrope font-medium text-black">
              <div className="flex w-4 h-4 bg-black rounded-full items-center justify-center mr-2">
                {" "}
                <Check size={8} color="white" />
              </div>
              <span>
                <Trans i18nKey="qualitiesEasy.benefit2" />
              </span>
            </span>
          </div>

          <div className="mt-2">
            <span className="flex flex-row items-center text-base font-manrope font-medium text-black">
              <div className="flex w-4 h-4 bg-black rounded-full items-center justify-center mr-2">
                {" "}
                <Check size={8} color="white" />
              </div>
              <span>
                <Trans i18nKey="qualitiesEasy.benefit3" />
              </span>
            </span>
          </div>

          <div className="mt-2">
            <span className="flex flex-row items-center text-base font-manrope font-medium text-black">
              <div className="flex w-4 h-4 bg-black rounded-full items-center justify-center mr-2">
                {" "}
                <Check size={8} color="white" />
              </div>
              <span>
                <Trans i18nKey="qualitiesEasy.benefit4" />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-8 md:mt-0">
        <Image
          src={BitcoinPhone}
          alt="Bitcoin Screen"
          className=""
          style={{ marginLeft: "60px" }}
        />
      </div>
    </div>
  );
};

export default QualitiesEasy;
