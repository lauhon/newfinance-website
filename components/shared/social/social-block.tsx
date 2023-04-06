import { useTranslation } from "next-i18next";
import ButtonBlack from "../buttons/button-black";
import ButtonIcon from "../buttons/button-icon";

interface SocialBlockProps {}

const SocialBlock = ({}: SocialBlockProps) => {
  const { t } = useTranslation("common");

  const openTwitter = () => {
    window.open("https://www.twitter.com", "_blank");
  };
  const openInstagram = () => {
    window.open("https://www.instagram.com", "_blank");
  };
  const openLinkedin = () => {
    window.open("https://www.linkedin.com", "_blank");
  };

  return (
    <div className="flex flex-col justify-items-end md:flex-row align-center">
      <div>
        <ButtonBlack text={t("social.followUs")} onClick={openTwitter} />
      </div>
      <div className="flex justify-center text-center">
        <div className="px-2 md:px-0 md:pl-6 py-2 md:py-3 ">
          <ButtonIcon iconName="Twitter" onClick={openTwitter} />
        </div>
        <div className="px-2 md:px-0 md:pl-8 py-2 md:py-3 ">
          <ButtonIcon iconName="Instagram" onClick={openInstagram} />
        </div>
        <div className="px-2 md:px-0 md:pl-8 py-2 md:py-3 ">
          <ButtonIcon iconName="Linkedin" onClick={openLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default SocialBlock;
