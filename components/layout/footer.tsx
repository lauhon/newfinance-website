import { Trans } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import SocialBlock from "../shared/social/social-block";

const Footer = () => {
  const logo = require("~/icons/LogoNewFinanceWhite.png");

  return (
    <footer className="flex justify-center content-center flex-col border-t-1 border-b-1 border-[#2C303A] transition-all px-6 md:px-14 lg:px-28 2xl:px-64  pt-32 pb-8 ">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mt-3 md:mt-0">
          <Image className="h-[32px] w-auto" alt="NewFinance Logo" src={logo} />
        </div>
        <div className="flex flex-row space-x-20 mt-8 md:mt-2">
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs text-gray-600">COMPANY</h3>
            <Link className="text-xs text-gray-400 font-manrope" href="/about">
              <Trans i18nKey="links.about" />
            </Link>
            <Link
              className="text-xs text-gray-400 font-manrope"
              href="/contact"
            >
              <Trans i18nKey="links.contact" />
            </Link>
            <Link className="text-xs text-gray-400 font-manrope" href="/jobs">
              <Trans i18nKey="links.jobs" />
            </Link>
            <Link
              className="text-xs text-gray-400 font-manrope"
              href="https://barackobama.medium.com/"
              target="_blank"
            >
              Blog
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs text-gray-600">RESOURCES</h3>
            <Link className="text-xs text-gray-400 font-manrope" href="/faq">
              <Trans i18nKey="links.faqs" />
            </Link>
            <Link
              className="text-xs text-gray-400 font-manrope"
              href="/pricing"
            >
              <Trans i18nKey="links.pricing" />
            </Link>
            <Link
              className="text-xs text-gray-400 font-manrope"
              href="/changelog"
            >
              <Trans i18nKey="links.changelog" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20 sm:mt-36 border-t-1 pt-3 border-gray-800">
        <div className="flex justify-start sm:justify-between items-center flex-col-reverse space-y-3 sm:space-y-0 sm:flex-row">
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-3 sm:space-y-0 mt-3 sm:mt-0">
            <span className="text-gray-500 text-xs font-manrope">
              © 2023 NewFinance GmbH, i.G.
            </span>
            <div className="flex flex-row justify-between sm:space-x-8">
              <Link
                className="text-gray-500 text-xs font-manrope"
                href="/privacy"
              >
                <Trans i18nKey="links.privacy" />
              </Link>
              <Link
                className="text-gray-500 text-xs font-manrope"
                href="/imprint"
              >
                <Trans i18nKey="links.imprint" />
              </Link>
            </div>
          </div>
          <SocialBlock />
        </div>
        <p className="text-gray-600 text-xs font-manrope w-full text-center sm:text-left sm:w-2/3 mt-6">
          NewFinance is a trademark or registered trademark of NewFinance GmbH.
          Any other trademarks are the property of their respective owners.
          Unless otherwise, noted, use of third party logos does not imply
          endorsement of, sponsorship of, or affiliation with NewFinance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
