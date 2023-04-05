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
      <div className="inline-block justify-center text-center">
        <ButtonIcon iconName="Twitter" onClick={openTwitter} />
        <ButtonIcon iconName="Instagram" onClick={openInstagram} />
        <ButtonIcon iconName="Linkedin" onClick={openLinkedin} />
      </div>
    </div>
  );
};

export default SocialBlock;
