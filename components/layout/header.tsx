import { useTranslation } from "next-i18next";
import LogoMark from "~/icons/logomark.svg";
import ButtonArrow from "../shared/buttons/button-arrow";
const Header = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <header
        id="page-header"
        className="z-20 h-[64px] fixed w-full flex items-center justify-between bg-transparent px-2 md:px-14 lg:px-28"
      >
        <div className="flex items-center">
          <a className="justify-start" href="#">
            <LogoMark className="" />
          </a>
        </div>
        <div className="flex items-center">
          <ButtonArrow href="login" text={t("header.startButton")} />
        </div>
      </header>
    </>
  );
};

export default Header;
