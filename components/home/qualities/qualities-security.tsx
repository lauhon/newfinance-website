import { useTranslation } from "next-i18next";
import * as Icon from "react-feather";

const QualitiesSecurity = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col md:flex-row py-16 px-8 md:px-12 lg:px-16 items-center bg-gradient-to-tr from-[#111318] via-[#14151B] to-[#24262A] rounded-2xl w-[1000px] border-[#2C303A] border-1 max-w-full min-h-[500px]">
      <div className="flex-1 basis-2/3 justify-center">
        <h2 className="text-[1.6rem] sm:text-[2.2rem] text-center md:text-left font-ibm font-regular leading-tight text-white">
          Move your money to safety
        </h2>
        <p className="text-[0.8rem] sm:text-[1.1rem] text-center md:text-left font-manrope font-regular text-[#7D7E82] mt-4">
          NewFinance was inititally founded to built an absolut secure place for
          our money. Now we want everyone to have that opportunity.
        </p>
        <div className="flex flex-col mt-4 items-start sm:items-center md:items-start">
          <div className="mt-2">
            <span className="flex flex-row items-center text-[0.8rem] md:text-[0.9rem]  font-manrope font-regular text-white">
              <div className="flex w-3 h-3 bg-[#7D7E81] rounded-full items-center justify-center mr-1.5">
                <Icon.Check size={8} color="#0D0E12" />
              </div>
              <span>
                No seed phrase vulnerability{" "}
                <span className="text-[#7D7E82]">
                  by creating two secret shares
                </span>
              </span>
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#53545B] mt-2"></div>
          </div>

          <div className="mt-2">
            <span className="flex flex-row items-center text-[0.8rem] md:text-[0.9rem] font-manrope font-regular text-white">
              <div className="flex w-3 h-3 bg-[#7D7E81] rounded-full items-center justify-center mr-1.5">
                <Icon.Check size={8} color="#0D0E12" />
              </div>
              <span>
                Recovery protection{" "}
                <span className="text-[#7D7E82]">
                  to never loose your access to your money
                </span>
              </span>
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#53545B] mt-2"></div>
          </div>

          <div className="mt-2">
            <span className="flex flex-row items-center text-[0.8rem] md:text-[0.9rem] font-manrope font-regular text-white">
              <div className="flex w-3 h-3 bg-[#7D7E81] rounded-full items-center justify-center mr-1.5">
                <Icon.Check size={8} color="#0D0E12" />
              </div>
              <span>
                Secured by MPC technology,{" "}
                <span className="text-[#7D7E82]">
                  already used by institutions to secure billions.
                </span>
              </span>
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#53545B] mt-2"></div>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-1/3"></div>
    </div>
  );
};

export default QualitiesSecurity;
