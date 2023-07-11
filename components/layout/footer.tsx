import { Trans } from "next-i18next";
import Link from "next/link";
import LogoMarkWhite from "~/icons/logomark_white.svg";
import SocialBlock from "../shared/social/social-block";

const Footer = () => {
  return (
    <footer className="flex justify-center content-center flex-col border-t-1 border-b-1 border-[#2C303A] transition-all px-2 md:px-14 lg:px-28 pt-32 pb-8 ">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mt-3 md:mt-0">
          <LogoMarkWhite className=" w-24 md:w-40 mr-12 md:mr-20 mb-3" />
        </div>
        <div className="flex flex-row space-x-20 mt-8 md:mt-2">
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs text-gray-600">COMPANY</h3>
            <Link
              className="text-xs text-gray-400 font-manrope"
              href="/imprint"
            >
              <Trans i18nKey="links.contact" />
            </Link>
            <Link
              className="text-xs text-gray-400 font-manrope"
              href="/privacy"
            >
              <Trans i18nKey="links.jobs" />
            </Link>
            <Link
              className="text-xs text-gray-400 font-manrope"
              href="/privacy"
            >
              <Trans i18nKey="links.privacy" />
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs text-gray-600">RESOURCES</h3>
            <Link
              className="text-xs text-gray-400 font-manrope"
              href="/privacy"
            >
              <Trans i18nKey="links.jobs" />
            </Link>
            <Link
              className="text-xs text-gray-400 font-manrope"
              href="/privacy"
            >
              <Trans i18nKey="links.privacy" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-36 border-t-1 pt-3 border-gray-800">
        <div className="flex justify-start sm:justify-between items-center flex-col sm:flex-row">
          <div className="flex flex-row space-x-8">
            <span className="text-gray-500 text-xs font-manrope">
              © 2023 Superlight GmbH, i.G.
            </span>
            <Link
              className="text-gray-500 text-xs font-manrope"
              href="/privacy"
            >
              <Trans i18nKey="links.privacy" />
            </Link>
            <Link
              className="text-gray-500 text-xs font-manrope"
              href="/privacy"
            >
              <Trans i18nKey="links.tou" />
            </Link>
          </div>
          <SocialBlock />
        </div>
        <p className="text-gray-600 text-xs font-manrope w-full sm:w-2/3 mt-6">
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
