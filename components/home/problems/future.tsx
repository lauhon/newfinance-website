import { Check } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import ButtonArrow from "~/components/shared/buttons/button-arrow";
import bg from "../../../public/images/BackgroundFuture.jpg";

const Future = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex flex-col items-center px-4 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 space-y-8 md:space-y-16">
      <div className="text-left">
        <h2 className="text-[2rem] sm:text-[2.4rem] font-manrope font-semibold leading-tight mt-2">
          <Trans i18nKey="future.headline_1" />
          <br />
          <span className="text-[#757679]">
            <Trans i18nKey="future.headline_2" />
          </span>
        </h2>
        <p className=" text-base font-manrope font-medium text-[#8E8D95] tracking-tighty mt-4">
          <Trans i18nKey="future.headline_text" />
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row text-center space-y-16 justify-center py-28 px-6 sm:px-8 md:px-16 bg-[#EDEEF0] rounded-2xl w-[1000px] max-w-full min-h-[500px]"
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
            <Trans i18nKey="future.subheadline" />
          </h2>
          <p className=" text-base font-manrope font-medium text-white mt-4">
            <Trans i18nKey="future.text" />
          </p>
          <div className="flex flex-col xl:flex-row items-center md:justify-evenly space-x-6 mt-4">
            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="#951D41" />
                </div>
                <span>
                  <Trans i18nKey="future.benefit1" />
                </span>
              </span>
            </div>

            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="#951D41" />
                </div>
                <span>
                  <Trans i18nKey="future.benefit2" />
                </span>
              </span>
            </div>

            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="#951D41" />
                </div>
                <span>
                  <Trans i18nKey="future.benefit3" />
                </span>
              </span>
            </div>

            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="#951D41" />
                </div>
                <span>
                  <Trans i18nKey="future.benefit4" />
                </span>
              </span>
            </div>
          </div>
          <div className="flex mt-20 justify-center">
            <ButtonArrow text="Protect your wealth now" color="#A33051" />
          </div>
          <div className="flex flex-col items-center justify-center mt-3 text-[0.65rem] text-white font-manrope font-semibold tracking-tight">
            <div>
              <Trans i18nKey="future.buttonInfo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
