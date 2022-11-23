import LogoSolo from "~/icons/logo-solo.svg";
import LogoMark from "~/icons/logomark.svg";
import LanguageSwitch from "../shared/language/language-switchers";
import WaitlistButton from "../shared/waitlist-button";
const Header = () => {
  return (
    <>
      <header
        id="page-header"
        className="z-20 fixed top-0 flex items-center justify-center sm:justify-between bg-transparent sm:h-20 h-14 w-full px-16 py-4 border-b-white text-white border-b border-transparent"
      >
        {/* <!-- TODO: Replace below div once links are clear. also burger menu has to be implemented then
     <div className="flex-row font-thin space-x-16 text-lg hidden sm:flex">
    <a href="#">Personal</a>
    <a href="#">Business</a>
  </div> --> */}

        <LanguageSwitch />
        {/* <!-- <div className="w-44 hidden sm:block"></div> --> */}
        <a className="flex h-14 items-center" href="#">
          <h1 className="sr-only">Superlight</h1>
          <LogoMark className="h-10 sm:hidden lg:block block sm:h-12" />
          <LogoSolo className="h-10 hidden sm:block lg:hidden sm:h-12" />
        </a>
        <div className="hidden md:block">
          <WaitlistButton />
        </div>
      </header>
      <div className="z-10 backdrop-blur-lg fixed sm:h-20 h-14 top-0 w-full"></div>
    </>
  );
};

export default Header;
