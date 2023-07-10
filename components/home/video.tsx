import { useTranslation } from "next-i18next";
import ButtonArrow from "../shared/buttons/button-arrow";

const VideoArea = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-56 mt-32 mb-32 flex-col">
      <div className="flex justify-center items-center w-full bg-[#EDEEF0] rounded-2xl min-h-[500px]">
        <div>
          <ButtonArrow href="login" text={t("header.startButton")} />
        </div>
      </div>
    </section>
  );
};

export default VideoArea;
