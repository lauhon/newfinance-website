import ButtonBlack from "../buttons/button-black";
import ButtonIcon from "../buttons/button-icon";

interface SocialBlockProps {}

const SocialBlock = ({}: SocialBlockProps) => {
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
    <div className="flex align-center">
      <ButtonBlack text="Folge uns" onClick={openTwitter} />
      <ButtonIcon iconName="Twitter" onClick={openTwitter} />
      <ButtonIcon iconName="Instagram" onClick={openInstagram} />
      <ButtonIcon iconName="Linkedin" onClick={openLinkedin} />
    </div>
  );
};

export default SocialBlock;
