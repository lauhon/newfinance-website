import { Trans, useTranslation } from "next-i18next";
import * as Icon from "react-feather";
import ButtonSecondary from "../shared/buttons/button-secondary";

const Action = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex relative justify-center mt-20 pb-64 flex-col bg-gradient-to-b from-[#111112] to-[#09090B]">
      <div className="h-px w-full bg-gradient-to-r from-[rgba(255,255,255,0)] via-[#CDD0D2] to-[rgba(255,255,255,0)] mb-56"></div>
      <div className="flex z-0 justify-center absolute w-full h-full mx-auto top-1">
        <div
          className="w-5/6 h-full opacity-50"
          style={{
            marginTop: "-150px",
            background:
              "radial-gradient(rgba(209,232,242,0.3), rgba(216,235,243,0), rgba(216,235,243,0))",
          }}
        >
          {" "}
        </div>
      </div>
      <h1 className="text-white z-10 font-semibold font-manrope text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[4rem] leading-tight text-center">
        Lets make your money
        <br />
        independant and free
      </h1>
      <div className="flex z-10  justify-center mt-6">
        <ButtonSecondary text="Move to better money" />
      </div>
      <div className="flex z-10  justify-center flex-row items-center mt-6 text-secondary">
        <Icon.Info size="16" color="white" className="mr-1" />
        <Trans i18nKey="header.allFree" />
      </div>
    </section>
  );
};

export default Action;
