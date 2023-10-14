import { Check } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";

const QualitiesPockets = () => {
  const { t } = useTranslation("common");
  const BitcoinPhone = require("~/public/images/PocketPhone.png");

  return (
    <div className="flex flex-col pb-0 md:pb-0 lg:pb-0 py-16 md:py-8 md:flex-row-reverse px-8 md:px-12 lg:pr-16 lg:pl-8 items-center  bg-[#343C45] rounded-2xl w-[1000px] max-w-full min-h-[500px] overflow-hidden">
      <div className="flex-1 justify-center">
        <h2 className="text-[2rem] sm:text-[2.4rem] text-center md:text-left font-manrope font-semibold leading-tight text-white">
          <Trans i18nKey="qualitiesPockets.headline" />
        </h2>
        <p className="text-base text-center md:text-left font-manrope font-medium text-white mt-4">
          <Trans i18nKey="qualitiesPockets.text" />
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-2 xl:grid-rows-2 items-center md:items-start  mt-4">
          <div className="mt-2">
            <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
              <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                {" "}
                <Check size={8} color="black" />
              </div>
              <span>
                <Trans i18nKey="qualitiesPockets.benefit1" />
              </span>
            </span>
          </div>

          <div className="mt-2">
            <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
              <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                {" "}
                <Check size={8} color="black" />
              </div>
              <span>
                <Trans i18nKey="qualitiesPockets.benefit2" />
              </span>
            </span>
          </div>

          <div className="mt-2">
            <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
              <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                {" "}
                <Check size={8} color="black" />
              </div>
              <span>
                <Trans i18nKey="qualitiesPockets.benefit4" />
              </span>
            </span>
          </div>

          <div className="mt-2">
            <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
              <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                {" "}
                <Check size={8} color="black" />
              </div>
              <span>
                <Trans i18nKey="qualitiesPockets.benefit3" />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 mt-12 md:mt-2 justify-center">
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

export default QualitiesPockets;
