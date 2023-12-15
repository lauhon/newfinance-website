import { Check, X } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonArrow from "../shared/buttons/button-arrow";

interface props {
  dark?: boolean;
  line?: boolean;
  banner?: boolean;
}

const Header = ({ dark = true, line = false, banner = false }: props) => {
  const { t } = useTranslation("common");

  const [isDark, setDark] = useState(dark);
  const [showBanner, setShowBanner] = useState(false);

  const logo_dark = require("~/icons/LogoNewFinance.png");
  const logo_white = require("~/icons/LogoNewFinanceWhite.png");

  useEffect(() => {
    let timer1 = setTimeout(() => setShowBanner(true), 5 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    const dBg = document.getElementById("darkBackground");
    if (typeof window === "undefined" || !dBg) return;

    const handleScroll = () => {
      const col = dBg.style.backgroundColor;
      if (col !== "rgb(255, 255, 255)" && col !== "") {
        setDark(false);
      } else {
        setDark(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const BannerTop = () => {
    return (
      <>
        {showBanner && (
          <div
            className="flex space-x-6 justify-between align-middle z-50  border-b-1 transition-all px-4 md:px-14 lg:px-28 py-3 top-[-50px]"
            style={{
              borderColor: isDark ? "#0000001A" : "#FFFFFF33",
              color: isDark ? "black" : "white",
              animation: "banner 1s ease",
            }}
          >
            <div></div>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 justify-center align-middle">
              <span className="flex flex-row justify-center items-center text-sm font-manrope font-medium ">
                <div
                  className="flex w-3 h-3  rounded-full items-center justify-center mr-2"
                  style={{
                    backgroundColor: isDark ? "black" : "white",
                  }}
                >
                  <Check
                    size={6}
                    style={{
                      color: isDark ? "white" : "black",
                    }}
                  />
                </div>
                <Trans i18nKey="header.banner1" />
              </span>
              <span className="flex flex-row justify-center items-center text-sm font-manrope font-medium ">
                <div
                  className="flex w-3 h-3  rounded-full items-center justify-center mr-2"
                  style={{
                    backgroundColor: isDark ? "black" : "white",
                  }}
                >
                  <Check
                    size={6}
                    style={{
                      color: isDark ? "white" : "black",
                    }}
                  />
                </div>
                <Trans i18nKey="header.banner2" />
              </span>
              <span className="flex flex-row justify-center items-center text-sm font-manrope font-medium ">
                <div
                  className="flex w-3 h-3  rounded-full items-center justify-center mr-2"
                  style={{
                    backgroundColor: isDark ? "black" : "white",
                  }}
                >
                  <Check
                    size={6}
                    style={{
                      color: isDark ? "white" : "black",
                    }}
                  />
                </div>
                <Trans i18nKey="header.banner3" />
              </span>
            </div>
            <div className="flex align-middle">
              <button onClick={() => setShowBanner(false)}>
                <X size={18} />
              </button>
            </div>
          </div>
        )}
        <style>
          {`
         @keyframes banner {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }

        `}
        </style>
      </>
    );
  };

  return (
    <>
      <header
        id="page-header"
        className="z-20 backdrop-blur-xl fixed w-full bg-[#FFFFFFF2] transition-all"
      >
        {banner && BannerTop()}
        <div
          className="flex items-center justify-between border-b-1  px-4 md:px-6 lg:px-12 py-6"
          style={{
            borderColor: isDark ? "#e5e7ebBB" : "#2C303ABB",
            borderBottomWidth: line ? "1px" : "0px",
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

          <ButtonArrow
            href="register"
            text={t("header.startButton")}
            inverted={isDark ? false : true}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
