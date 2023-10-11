import { useTranslation } from "next-i18next";
import bg from "../../../public/images/home/bg_bank.jpg";

const QualitiesBank = () => {
  const { t } = useTranslation("common");

  return (
    <div
      className="flex flex-col py-16 px-8 md:px-16 items-center bg-[#EDEEF0] rounded-2xl w-[1000px] max-w-full min-h-[500px]"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionY: "bottom",
      }}
    >
      <h2 className="text-[1.5rem] sm:text-[2.1rem] text-center font-manrope font-regular leading-tight text-white">
        Bitcoin +<br />
        everything your bank can do
      </h2>
      <p className="text-[0.8rem] sm:text-[1.1rem] text-center font-manrope font-regular text-white mt-4 sm:w-1/2">
        Ibans, standing orders and your paycheck straight with Bitcoin.
        Everything you´d expect from your bank - but without giving away your
        money.
      </p>
    </div>
  );
};

export default QualitiesBank;
