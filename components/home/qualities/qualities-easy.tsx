import { useTranslation } from "next-i18next";
import * as Icon from "react-feather";

const QualitiesEasy = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col md:flex-row py-16 px-8 md:px-12 lg:px-16 items-center bg-[#EDEEF0] rounded-2xl w-[1000px] max-w-full min-h-[500px]">
      <div className="flex-1 justify-center">
        <h2 className="text-[1.5rem] sm:text-[2.1rem] text-center md:text-left font-manrope font-regular leading-tight">
          Take the easiest way to financial control
        </h2>
        <p className="text-[0.8rem] sm:text-[1.1rem] text-center md:text-left font-manrope font-regular text-[#7D7E82] mt-4">
          Our goal for you, new money that feels simple, without terms that you
          don’t know.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 mt-4">
          <span className="flex flex-row items-center text-[0.8rem] sm:text-[1.1rem] font-manrope font-regular text-[#3A84F4]">
            <Icon.Check size="18" className="text-[#3A84F4] mr-2" />
            Bank-like usability
          </span>
          <span className="flex flex-row items-center text-[0.8rem] sm:text-[1.1rem] font-manrope font-regular text-[#3A84F4]">
            <Icon.Check size="18" className="text-[#3A84F4] mr-2" />
            No crypto words
          </span>
          <span className="flex flex-row items-center text-[0.8rem] sm:text-[1.1rem] font-manrope font-regular text-[#3A84F4]">
            <Icon.Check size="18" className="text-[#3A84F4] mr-2" />
            Iban compatible
          </span>
          <span className="flex flex-row items-center text-[0.8rem] sm:text-[1.1rem] font-manrope font-regular text-[#3A84F4]">
            <Icon.Check size="18" className="text-[#3A84F4] mr-2" />
            Pay everywhere
          </span>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default QualitiesEasy;
