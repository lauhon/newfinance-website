import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonArrow from "../shared/buttons/button-arrow";
const Header = () => {
  const { t } = useTranslation("common");

  const [isDark, setDark] = useState(true);

  const logo_dark = require("~/icons/LogoNewFinance.png");
  const logo_white = require("~/icons/LogoNewFinanceWhite.png");
  var logo;

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.getElementById("darkBackground")?.style.backgroundColor ==
        "rgb(250, 250, 250)"
      ) {
        setDark(true);
      } else {
        setDark(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header
        id="page-header"
        className="z-20 h-[64px] fixed w-full flex items-center justify-between bg-transparent px-2 md:px-14 lg:px-28"
      >
        <div className="flex items-center">
          <a className="justify-start hover:opacity-80 transition-all" href="#">
            {isDark ? (
              <Image
                className="h-[32px] w-auto"
                alt="NewFinance Logo"
                src={logo_dark}
              />
            ) : (
              <Image
                className="h-[32px] w-auto"
                alt="NewFinance Logo"
                src={logo_white}
              />
            )}
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
