import { Trans } from "next-i18next";
import Link from "next/link";
import LogoMark from "~/icons/logomark.svg";
import SocialBlock from "../shared/social/social-block";

const Footer = () => {
  return (
    <footer className="flex mx-3 md:mx-5 pt-20 md:pt-36 pb-16 text-xs flex-row justify-between bg-footer">
      <div className="flex flex-col md:flex-row gap-y-3">
        <div className="mt-3 md:mt-0">
          <LogoMark className=" w-24 md:w-40 mr-12 md:mr-20 mb-3" />
          <span className="text-secondary">© 2023 Superlight GmbH, i.G.</span>
        </div>
        <div className="mt-8 md:mt-2">
          <Link className="text-sm text-black mr-6 md:mr-10" href="/privacy">
            <Trans i18nKey="links.jobs" />
          </Link>
          <Link className="text-sm text-black mr-6 md:mr-10" href="/privacy">
            <Trans i18nKey="links.privacy" />
          </Link>
          <Link className="text-sm text-black mr-6 md:mr-10" href="/imprint">
            <Trans i18nKey="links.contact" />
          </Link>
        </div>
      </div>
      <SocialBlock />
    </footer>
  );
};

export default Footer;
