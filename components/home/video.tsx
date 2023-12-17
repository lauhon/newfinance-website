import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";

const VideoArea = () => {
  const { t } = useTranslation("common");

  const Demo1 = require("~/public/images/video/Demo1.png");
  const Demo2 = require("~/public/images/video/Demo2.png");
  const Demo3 = require("~/public/images/video/Demo3.png");
  const Demo4 = require("~/public/images/video/Demo4.png");
  const Demo5 = require("~/public/images/video/Demo5.png");

  return (
    <section className="flex items-center px-4 md:px-8  md:mt-32 md:mb-32 mt-16 mb-16 flex-col overflow-hidden">
      <div className="cursor-default w-full">
        <div className="flex flex-col px-4 py-0 justify-center items-center bg-[#F6F6F6] rounded-2xl w-full group overflow-hidden">
          <div className="flex md:space-x-8 justify-center items-center mt-16 md:mt-32 mb-10">
            <Image
              src={Demo2}
              height={400}
              alt="App Demo Screen"
              className="hidden md:flex"
            />
            <Image
              src={Demo3}
              height={450}
              alt="App Demo Screen"
              className=""
            />
            <Image
              src={Demo4}
              height={400}
              alt="App Demo Screen"
              className="hidden md:flex"
            />
          </div>
          <div className="font-manrope font-medium text-center mb-16 md:mb-32">
            <Trans i18nKey="video.text" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoArea;
