import { Check } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";

const QualitiesTransfer = () => {
  const { t } = useTranslation("common");
  const BitcoinPhone = require("~/public/images/SendPhone.png");

  return (
    <div className="flex flex-col pb-0 md:pb-0 lg:pb-0 py-16 md:py-8 md:flex-row px-8 md:px-12 lg:px-16 items-center bg-[#F6F6F6] rounded-2xl w-full min-h-[500px] overflow-hidden">
      <div className="flex-1 justify-center">
        <h2 className="text-[2rem] sm:text-[2.4rem] text-center md:text-left font-manrope font-semibold leading-tight">
          <Trans i18nKey="qualitiesTransfer.headline" />
        </h2>
      </div>
      <div className="flex flex-1 mt-12 md:mt-2 mb-8 md:mb-0 justify-center">
        <Image
          src={BitcoinPhone}
          alt="Transfer Screen"
          className=""
          style={{ height: "460px", width: "auto" }}
        />
      </div>
      <div className="flex-1 flex-col items-center md:items-start md:mb-0 mb-12 mt-4">
        <div className="mt-2 md:ml-12">
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

        <div className="mt-2 md:ml-12">
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

        <div className="mt-2 md:ml-12">
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

        <div className="mt-2 md:ml-12">
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
  );
};

export default QualitiesTransfer;
