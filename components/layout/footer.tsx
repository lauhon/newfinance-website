import Link from "next/link";
import LogoSolo from "~/icons/logo-solo.svg";
import LogoMark from "~/icons/logomark.svg";
import WaitlistButton from "../shared/waitlist-button";

const Footer = () => {
  return (
    <footer className="flex p-16 text-xs flex-col flex-1 bg-footer">
      <div className="flex flex-wrap">
        <LogoMark className="h-10 mb-8 hidden sm:block" />
        <LogoSolo className="h-10 mb-8 sm:hidden" />

        <div className="ml-auto">
          <WaitlistButton />
        </div>
      </div>

      <div className="flex flex-wrap space-x-8 space-y-2 sm:space-y-0">
        <Link href="/" className="text-primary">
          © Superlight GmbH 2022
        </Link>
        <div className="flex flex-wrap sm:space-x-8 flex-col sm:flex-row">
          <Link href="/imprint">Imprint</Link>
          <Link href="/privacy">Privacy</Link>
          Images by{" "}
          <a href="https://www.freepik.com/free-photo/beautiful-prism-light-deflection_9158209.htm#query=prism%20light&position=8&from_view=keyword">
            Freepik
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
