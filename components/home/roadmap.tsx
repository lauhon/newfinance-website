import { Trans, useTranslation } from "next-i18next";
import * as Icon from "react-feather";
import BabyText from "../shared/text/baby-text";

const RoadmapArea = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex transition-all items-center px-6 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 flex-col space-y-8 md:space-y-16">
      <div className="text-center">
        <BabyText text="ROADMAP" />
        <h2 className="text-[1.6rem] md:text-[2.2rem] text-center font-manrope font-regular leading-tight mt-2 text-white">
          <Trans i18nKey="roadmap.headline_1" />
          <br />
          <span className="text-[#757679]">
            <Trans i18nKey="roadmap.headline_2" />
          </span>
        </h2>
      </div>
      <div className="flex justify-center items-center w-[600px] max-w-full bg-gradient-to-br from-[#909090] to-5% rounded-lg p-[0.5px]">
        <div className="w-full h-full bg-gradient-to-br from-[#343636] via-[#3A3A3A] to-[#3A3A3A] rounded-lg p-2 ">
          <div className="flex flex-row items-center bg-white w-full rounded-xl p-4 border-1 border-[#2C2C2C] drop-shadow transition hover:opacity-90">
            <div className="flex justify-center items-center rounded-lg bg-[#F8F8F8] p-3 mr-4">
              <Icon.Star size={22} color="#0D0E12" />
            </div>
            <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular">
              Bank-like usability
            </span>
          </div>

          <div className="flex flex-row items-center bg-white w-full rounded-xl p-4 border-1 border-[#2C2C2C] drop-shadow mt-1.5 transition hover:opacity-90">
            <div className="flex justify-center items-center rounded-lg bg-[#F8F8F8] p-3 mr-4">
              <Icon.Lock size={22} color="#0D0E12" />
            </div>
            <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular">
              MPC secured Self-custodian
            </span>
          </div>

          <div className="flex flex-row items-center bg-white w-full rounded-xl p-4 border-1 border-[#2C2C2C] drop-shadow mt-1.5 transition hover:opacity-90">
            <div className="flex justify-center items-center rounded-lg bg-[#F8F8F8] p-3 mr-4">
              <Icon.Send size={22} color="#0D0E12" />
            </div>
            <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular">
              Send and receive borderless
            </span>
          </div>

          <div className="flex flex-row items-center justify-between bg-white w-full rounded-xl p-4 border-1 border-[#2C2C2C] drop-shadow mt-1.5 transition hover:opacity-90 group">
            <div className="flex flex-row items-center group-hover:translate-x-[-1px] transition">
              <div className="flex justify-center items-center rounded-lg bg-[#F8F8F8] p-3 mr-4">
                <Icon.DollarSign size={22} color="#0D0E12" />
              </div>
              <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular">
                Buy and Sell Bitcoin directly
              </span>
            </div>
            <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular text-[#348FE2] group-hover:translate-x-px transition">
              Q2 23’{" "}
            </span>
          </div>

          <div className="flex flex-row items-center justify-between bg-white w-full rounded-xl p-4 border-1 border-[#2C2C2C] drop-shadow mt-1.5 transition hover:opacity-90 group">
            <div className="flex flex-row items-center group-hover:translate-x-[-1px] transition">
              <div className="flex justify-center items-center rounded-lg bg-[#F8F8F8] p-3 mr-4">
                <Icon.Zap size={22} color="#0D0E12" />
              </div>
              <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular">
                Lightning network
              </span>
            </div>
            <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular text-[#348FE2] group-hover:translate-x-px transition">
              Q3 23’{" "}
            </span>
          </div>

          <div className="flex flex-row items-center justify-between bg-white w-full rounded-xl p-4 border-1 border-[#2C2C2C] drop-shadow mt-1.5 transition hover:opacity-90 group">
            <div className="flex flex-row items-center group-hover:translate-x-[-1px] transition">
              <div className="flex justify-center items-center rounded-lg bg-[#F8F8F8] p-3 mr-4">
                <Icon.Repeat size={22} color="#0D0E12" />
              </div>
              <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular">
                Recurring savings
              </span>
            </div>
            <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular text-[#348FE2] group-hover:translate-x-px transition">
              Q3 23’{" "}
            </span>
          </div>

          <div className="flex flex-row items-center justify-between bg-white w-full rounded-xl p-4 border-1 border-[#2C2C2C] drop-shadow mt-1.5 transition hover:opacity-90 group">
            <div className="flex flex-row items-center group-hover:translate-x-[-1px] transition">
              <div className="flex justify-center items-center rounded-lg bg-[#F8F8F8] p-3 mr-4">
                <Icon.CreditCard size={22} color="#0D0E12" />
              </div>
              <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular">
                Iban & Sepa compatible
              </span>
            </div>
            <span className="text-[0.8rem] sm:text-[1.1rem] text-left font-manrope font-regular text-[#348FE2] group-hover:translate-x-px transition">
              Q4 23’{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapArea;
