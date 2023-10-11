import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonArrow from "../shared/buttons/button-arrow";

interface props {
  dark?: boolean;
  line?: boolean;
}

const Header = ({ dark = true, line = false }: props) => {
  const { t } = useTranslation("common");

  const [isDark, setDark] = useState(dark);
  const [showLine, setShowLine] = useState(line);

  const logo_dark = require("~/icons/LogoNewFinance.png");
  const logo_white = require("~/icons/LogoNewFinanceWhite.png");
  var logo;

  useEffect(() => {
    if (document.getElementById("darkBackground") != null) {
      const handleScroll = () => {
        if (
          document.getElementById("darkBackground")?.style.backgroundColor !==
          "rgb(250, 250, 250)"
        ) {
          setDark(false);
        } else {
          setDark(true);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <>
      <header
        id="page-header"
        className="z-20 h-[74px] backdrop-blur fixed w-full bg-transparent px-4 md:px-14 lg:px-28 "
      >
        <div
          className="flex h-[74px] items-center justify-between border-b-1"
          style={{
            borderColor: isDark ? "#e5e7ebBB" : "#2C303ABB",
            borderBottomWidth: showLine ? "1px" : "0px",
          }}
        >
          <div className="flex items-center">
            <Link
              className="justify-start hover:opacity-80 transition-all"
              href="/"
            >
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
            </Link>
          </div>

          <ButtonArrow href="login" text={t("header.startButton")} />
        </div>
      </header>
    </>
  );
};

export default Header;
