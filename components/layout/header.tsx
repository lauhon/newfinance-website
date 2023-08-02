import { Trans, useTranslation } from "next-i18next";
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
        className="z-20 h-[56px] backdrop-blur fixed w-full bg-transparent px-4 md:px-14 lg:px-28 "
      >
        <div
          className="flex h-[56px] items-center justify-between border-b-1"
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
          <div className="flex items-center">
            <div className="mr-8">
              {isDark ? (
                <Link
                  className="text-sm text-black font-manrope tracking-tight hover:bg-[#EAEDF1] transition py-1 px-2 ml-[-0.5rem] rounded-md"
                  href="/pricing"
                >
                  <Trans i18nKey="links.pricing" />
                </Link>
              ) : (
                <Link
                  className="text-sm text-white font-manrope tracking-tight hover:bg-[#1e1f20] transition py-1 px-2 ml-[-0.5rem] rounded-md"
                  href="/pricing"
                >
                  <Trans i18nKey="links.pricing" />
                </Link>
              )}
            </div>
            <ButtonArrow href="login" text={t("header.startButton")} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
