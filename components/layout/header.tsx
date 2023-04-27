import { useTranslation } from "next-i18next";
import { useState } from "react";
import LogoMark from "~/icons/logomark.svg";
import ButtonIcon from "../shared/buttons/button-icon";
import ButtonPrimary from "../shared/buttons/button-primary";
const Header = () => {
  const { t } = useTranslation("common");
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header
        id="page-header"
        className="z-20 h-[64px] sticky top-0 flex items-center justify-between bg-white px-5 md:px-6 border-b-1 border-black"
      >
        <div className="flex items-center">
          <a className="justify-start" href="#">
            <LogoMark className="" />
          </a>
          <div className="hidden md:flex h-[64px] ml-6 items-center border-black border-l-1">
            <a className="ml-8 text-lg font-manrope hover:opacity-50" href="#">
              {t("header.a1")}
            </a>
            <a className="ml-8 text-lg font-manrope hover:opacity-50" href="#">
              {t("header.a2")}
            </a>
            <a
              className="ml-8 text-lg font-manrope text-secondary hover:opacity-50"
              href="#"
            >
              {t("header.a3")}
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-black mr-3 md:mr-4 font-manrope">
            {t("header.allFree")}
          </span>
          <ButtonPrimary
            text={t("header.startButton")}
            onClick={() => console.log("test")}
          />
          <div className="flex md:hidden ml-3">
            <ButtonIcon
              lg
              iconName="Menu"
              onClick={() => setIsNavOpen((prev) => !prev)}
            />
          </div>
        </div>

        <div
          id="mobile-menu"
          className={
            isNavOpen
              ? "absolute flex flex-col w-screen h-screen top-[64px] left-0 bg-white px-6 py-12"
              : "hidden"
          }
        >
          <a className="text-4xl pb-3 font-manrope hover:opacity-50" href="#">
            {t("header.a1")}
          </a>
          <a className="text-4xl pb-3 font-manrope hover:opacity-50" href="#">
            {t("header.a2")}
          </a>
          <a
            className="text-4xl pb-3 font-manrope text-secondary hover:opacity-50"
            href="#"
          >
            {t("header.a3")}
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
