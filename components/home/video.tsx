import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";
import ButtonArrow from "../shared/buttons/button-arrow";

const VideoArea = () => {
  const { t } = useTranslation("common");

  const Demo1 = require("~/public/images/video/Demo1.png");
  const Demo2 = require("~/public/images/video/Demo2.png");
  const Demo3 = require("~/public/images/video/Demo3.png");
  const Demo4 = require("~/public/images/video/Demo4.png");
  const Demo5 = require("~/public/images/video/Demo5.png");

  return (
    <section className="flex items-center px-4 md:px-14 lg:px-28 md:mt-32 md:mb-32 mt-16 mb-16 flex-col overflow-hidden">
      <div className="cursor-default w-[1000px] max-w-full min-h-[500px]">
        <div className="flex flex-col px-14 py-8 justify-center items-center border-[#EDEEF0] border-1 rounded-2xl w-[1000px] max-w-full min-h-[500px] group overflow-hidden">
          <div className="flex space-x-4 justify-center items-center">
            <Image src={Demo1} alt="App Demo Screen" className="" />
            <Image src={Demo2} alt="App Demo Screen" className="" />
            <Image src={Demo3} alt="App Demo Screen" className="" />
            <Image src={Demo4} alt="App Demo Screen" className="" />
            <Image src={Demo5} alt="App Demo Screen" className="" />
          </div>
          <div className="md:group-hover:scale-105 transition duration-300 absolute mb-14">
            <ButtonArrow href="register" text={t("video.tryButton")} />
          </div>
          <div className="font-manrope font-semibold text-center mt-4">
            <Trans i18nKey="video.text" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoArea;
