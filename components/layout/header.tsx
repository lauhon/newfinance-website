import { useTranslation } from "next-i18next";
import LogoMark from "~/icons/logomark.svg";
import ButtonPrimary from "../shared/buttons/button-primary";
const Header = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <header
        id="page-header"
        className="z-20 flex items-center justify-between bg-transparent mx-3 md:mx-5 py-2 md:py-6 border-b-black border-b border-transparent"
      >
        {/* <!-- TODO: Replace below div once links are clear. also burger menu has to be implemented then
     <div className="flex-row font-thin space-x-16 text-lg hidden sm:flex">
    <a href="#">Personal</a>
    <a href="#">Business</a>
  </div> --> */}

        {/* <!-- <div className="w-44 hidden sm:block"></div> --> */}
        <a className="flex items-center justify-start" href="#">
          <LogoMark className=" w-24 md:w-40" />
        </a>
        <span className="text-sm text-black hidden md:block">
          {t("header.oneLiner")}
        </span>
        <div className="">
          <span className="text-xs md:text-sm text-black mr-3 md:mr-4">
            {t("header.allFree")}
          </span>
          <ButtonPrimary
            text={t("header.startButton")}
            onClick={() => console.log("test")}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
