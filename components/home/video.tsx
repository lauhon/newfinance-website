import { useTranslation } from "next-i18next";
import Link from "next/link";
import ButtonArrow from "../shared/buttons/button-arrow";

const VideoArea = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex items-center px-4 md:px-14 lg:px-28 md:mt-32 md:mb-32 mt-16 mb-16 flex-col overflow-hidden">
      <Link
        href="login"
        className="cursor-default w-[1000px] max-w-full min-h-[500px]"
      >
        <div className="flex justify-center items-center bg-[#EDEEF0] rounded-2xl w-[1000px] max-w-full min-h-[500px] group">
          <div className="md:group-hover:scale-105 transition duration-300 object-cover">
            <ButtonArrow href="login" text={t("header.startButton")} />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default VideoArea;
