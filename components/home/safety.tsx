import { Trans } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import bg from "~/public/images/BackgroundSafety.png";

const Safety = () => {
  const safetyGraph = require("~/public/images/safetyGraph.png");

  return (
    <section className="flex flex-col items-center px-4 md:px-8 md:pt-32 md:pb-32 pt-16 pb-16 space-y-8 md:space-y-16">
      <div className=" max-w-full text-center  md:w-2/3">
        <h2 className="text-[3.2rem] md:text-[4rem] lg:text-[5rem] font-manrope font-semibold leading-none text-white">
          <Trans i18nKey="safety.headline_1" />
          <br />
        </h2>
        <p className="text-xl font-manrope font-medium text-black text-center mt-12 text-[#F3F3F3]">
          <Trans i18nKey="safety.headline_text" />
        </p>
      </div>
      <div
        className="flex flex-col items-center lg:space-x-8 py-16 px-6 sm:px-8 md:px-16 rounded-2xl w-full min-h-[800px]"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: "bottom",
        }}
      >
        <div className="flex-1 px-4">
          <Image
            src={safetyGraph}
            height={200}
            alt="Graph about safety and Bitcoin"
            className="mt-32"
          />
        </div>
        <div className="flex-1 md:w-1/2">
          <p className=" text-lg font-manrope font-medium text-white text-center">
            <Trans i18nKey="safety.text" />
          </p>
          <p className=" text-lg font-manrope font-semibold text-white text-center mt-12">
            <Link href="https://google.com" target="_blank">
              <Trans i18nKey="safety.link" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Safety;
