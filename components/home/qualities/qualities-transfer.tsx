import { Check } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";

const QualitiesTransfer = () => {
  const { t } = useTranslation("common");
  const BitcoinPhone = require("~/public/images/SendPhone.png");

  return (
    <div className="flex flex-col py-16 md:py-8 md:flex-row px-8 md:px-12 lg:px-16 items-center border-1 border-[#DADADA] bg-[#DADADA] rounded-2xl w-[1000px] max-w-full min-h-[500px]">
      <div className="flex-1 justify-center">
        <h2 className="text-[2rem] sm:text-[2.4rem] text-center md:text-left font-manrope font-semibold leading-tight">
          <Trans i18nKey="qualitiesTransfer.headline" />
        </h2>
        <p className="text-base text-center md:text-left font-manrope font-medium text-[#7D7E82] mt-4">
          <Trans i18nKey="qualitiesTransfer.text" />
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-2 xl:grid-rows-2 items-center md:items-start  mt-4">
          <div className="mt-2">
            <span className="flex flex-row items-center text-base font-manrope font-medium text-black">
              <div className="flex w-4 h-4 bg-black rounded-full items-center justify-center mr-2">
                {" "}
                <Check size={8} color="white" />
              </div>
              <span>
                <Trans i18nKey="qualitiesTransfer.benefit1" />
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
                <Trans i18nKey="qualitiesTransfer.benefit2" />
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
                <Trans i18nKey="qualitiesTransfer.benefit4" />
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
                <Trans i18nKey="qualitiesTransfer.benefit3" />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 mt-12 md:mt-0 justify-center">
        <Image
          src={BitcoinPhone}
          alt="Bitcoin Screen"
          className=""
          style={{ height: "460px", width: "auto" }}
        />
      </div>
    </div>
  );
};

export default QualitiesTransfer;
