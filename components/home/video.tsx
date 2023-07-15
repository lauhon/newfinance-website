import { useTranslation } from "next-i18next";
import ButtonArrow from "../shared/buttons/button-arrow";

const VideoArea = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-4 md:px-14 lg:px-28 md:mt-32 md:mb-32 mt-16 mb-16 flex-col">
      <div className="flex justify-center items-center bg-[#EDEEF0] rounded-2xl w-[1000px] max-w-full min-h-[500px]">
        <div>
          <ButtonArrow href="login" text={t("header.startButton")} />
        </div>
      </div>
    </section>
  );
};

export default VideoArea;
