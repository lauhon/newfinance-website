import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const Privacy = () => {
  const { t } = useTranslation("privacy");

  const subpoints = [
    "intro",
    "application",
    "legal",
    "contact",
    "storage",
    "dsgvo",
    "webhosting",
    "email",
    "cloud",
    "terms",
  ];
  const [activeSubpoint, setActiveSubpoint] = useState(subpoints[0]);

  const handleArticleScroll = () => {
    console.log("now");
    const threshold = window.innerHeight / 3;
    let activeSubpoint = null;

    for (const subpoint of subpoints) {
      const subpointElement = document.getElementById(subpoint);
      if (subpointElement) {
        const subpointRect = subpointElement.getBoundingClientRect();

        if (subpointRect.top <= threshold && subpointRect.bottom >= 0) {
          activeSubpoint = subpoint;
          break;
        }
      }
    }

    if (activeSubpoint) {
      setActiveSubpoint(activeSubpoint);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", handleArticleScroll);
    return () => {
      window.removeEventListener("scroll", handleArticleScroll);
    };
  }, []);

  return (
    <Layout>
      <Header line={true} />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44 pt-16 flex-col">
        <div className="mt-28">
          <span className="font-manrope text-xs text-[#4e4e50] font-semibold">
            UPDATED JUL 23, 2023
          </span>
          <h1
            id="first-section"
            className="text-[2.2rem] sm:text-[3rem] font-manrope font-semibold leading-tight mt-2"
          >
            Privacy Policy
          </h1>
          <div className="grid grid-cols-4 mt-28 col-auto gap-6 mb-8">
            <div className="hidden sm:sticky top-44 self-start sm:flex flex-col gap-4 col-span-1 text-xs text-[#4e4e50]">
              <Link
                href="#intro"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "intro" ? "bold" : "normal",
                }}
              >
                {t("entry.title")}
              </Link>
              <Link
                href="#application"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight:
                    activeSubpoint === "application" ? "bold" : "normal",
                }}
              >
                {t("application.title")}
              </Link>
              <Link
                href="#legal"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "legal" ? "bold" : "normal",
                }}
              >
                {t("legalBasis.title")}
              </Link>
              <Link
                href="#contact"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "contact" ? "bold" : "normal",
                }}
              >
                {t("contact.title")}
              </Link>
              <Link
                href="#storage"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "storage" ? "bold" : "normal",
                }}
              >
                {t("duration.title")}
              </Link>
              <Link
                href="#dsgvo"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "dsgvo" ? "bold" : "normal",
                }}
              >
                {t("dsgvo.title")}
              </Link>
              <Link
                href="#webhosting"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight:
                    activeSubpoint === "webhosting" ? "bold" : "normal",
                }}
              >
                {t("webhosting.title")}
              </Link>
              <Link
                href="#email"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "email" ? "bold" : "normal",
                }}
              >
                {t("emailMarketing.title")}
              </Link>
              <Link
                href="#cloud"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "cloud" ? "bold" : "normal",
                }}
              >
                {t("cloudServices.title")}
              </Link>
              <Link
                href="#terms"
                scroll={false}
                className="hover:opacity-70 transition duration-300 hover:translate-x-[2px] active:translate-x-1 active:duration-75"
                style={{
                  fontWeight: activeSubpoint === "terms" ? "bold" : "normal",
                }}
              >
                {t("termExplain.title")}
              </Link>
            </div>
            <div
              id="textArea"
              className="col-span-4 sm:col-span-3 sm:ml-6 lg:ml-0"
            >
              <div id="intro"> </div>
              <h4 className="text-[1.4rem] bg-white top-24 py-4 sticky sm:text-[2rem] font-manrope font-medium leading-tight mb-8">
                1. {t("entry.title")}
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6  text-[#4e4e50]">
                {t("entry.1")}
              </p>

              <h5 className="font-manrope font-semibold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                1.1 - {t("entry.1-1-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("entry.1-1")}
              </p>
              <div id="application"></div>
              <h4 className="text-[1.4rem] bg-white top-24 py-4 sticky sm:text-[2rem] font-manrope font-medium leading-tight mt-12 mb-8">
                3. {t("application.title")}
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("application.3")}
              </p>
              <div id="legal"></div>
              <h4 className="text-[1.4rem] bg-white top-24 py-4 sticky sm:text-[2rem] font-manrope font-medium leading-tight mt-12 mb-8">
                4. {t("legalBasis.title")}
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("legalBasis.4")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                4.1 - {t("legalBasis.4-1-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("legalBasis.4-1")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                4.2 - {t("legalBasis.4-2-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("legalBasis.4-2")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                4.3 - {t("legalBasis.4-3-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("legalBasis.4-3")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                4.4 - {t("legalBasis.4-4-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("legalBasis.4-4")}
              </p>
              <div id="contact"></div>
              <h4 className="text-[1.4rem] bg-white top-24 py-4 sticky sm:text-[2rem] font-manrope font-medium leading-tight mt-12 mb-8 ">
                5. {t("contact.title")}
              </h4>
              <p
                className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]"
                dangerouslySetInnerHTML={{ __html: t("contact.5") }}
              ></p>
              <div id="storage"></div>
              <h4 className="text-[1.4rem] bg-white top-24 py-4 sticky sm:text-[2rem] font-manrope font-medium leading-tight mt-12 mb-8">
                6. {t("duration.title")}
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("duration.6")}
              </p>
              <div id="dsgvo"></div>
              <h4 className="text-[1.4rem] bg-white top-24 py-4 sticky sm:text-[2rem] font-manrope font-medium leading-tight mt-12 mb-8">
                7. {t("dsgvo.title")}
              </h4>
              <p
                className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]"
                dangerouslySetInnerHTML={{ __html: t("dsgvo.7") }}
              ></p>
              <div id="webhosting"></div>
              <h4 className="text-[1.4rem] bg-white top-24 py-4 sticky sm:text-[2rem] font-manrope font-medium leading-tight mt-12 mb-8">
                8. {t("webhosting.title")}
              </h4>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.1 - {t("webhosting.8-1-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("webhosting.8-1")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.2 -{t("webhosting.8-2-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("webhosting.8-2")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.3 - {t("webhosting.8-3-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("webhosting.8-3")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.4 - {t("webhosting.8-4-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("webhosting.8-4")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.5 - {t("webhosting.8-5-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("webhosting.8-5")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                8.6 - {t("webhosting.8-6-title")}
              </h5>
              <p
                className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]"
                dangerouslySetInnerHTML={{ __html: t("webhosting.8-6") }}
              ></p>
              <div id="email"></div>
              <h4 className="text-[1.4rem] bg-white top-24 py-4 sticky sm:text-[2rem] font-manrope font-medium leading-tight mt-12 mb-8">
                9. {t("emailMarketing.title")}
              </h4>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.1 - {t("emailMarketing.9-1-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("emailMarketing.9-1")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.2 - {t("emailMarketing.9-2-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("emailMarketing.9-2")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.3 - {t("emailMarketing.9-3-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("emailMarketing.9-4")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.4 - {t("emailMarketing.9-4-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("emailMarketing.9-4")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.5 - {t("emailMarketing.9-5-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("emailMarketing.9-5")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.6 - {t("emailMarketing.9-6-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("emailMarketing.9-6")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                9.7 - {t("emailMarketing.9-7-title")}
              </h5>
              <p
                className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]"
                dangerouslySetInnerHTML={{ __html: t("emailMarketing.9-7") }}
              ></p>
              <div id="cloud"></div>
              <h4 className="text-[1.4rem] bg-white top-24 py-4 sticky sm:text-[2rem] font-manrope font-medium leading-tight mt-12 mb-8">
                10. {t("cloudServices.title")}
              </h4>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.1 - {t("cloudServices.10-1-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("cloudServices.10-1")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.2 - {t("cloudServices.10-2-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("cloudServices.10-2")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.3 - {t("cloudServices.10-3-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("cloudServices.10-3")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.4 - {t("cloudServices.10-4-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("cloudServices.10-4")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.5 - {t("cloudServices.10-5-title")}
              </h5>
              <p
                className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]"
                dangerouslySetInnerHTML={{ __html: t("cloudServices.10-5") }}
              ></p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.6 - {t("cloudServices.10-6-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("cloudServices.10-6")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                10.7 - {t("cloudServices.10-7-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("cloudServices.10-7")}
              </p>
              <ul className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                <li>
                  <Link
                    href="https://planetscale.com/docs/concepts/security"
                    target="_blank"
                    className="underline"
                  >
                    PlanetScale
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.digitalocean.com/legal"
                    target="_blank"
                    className="underline"
                  >
                    DigitalOcean
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://vercel.com/legal/dpa"
                    target="_blank"
                    className="underline"
                  >
                    Vercel
                  </Link>
                </li>
              </ul>
              <div id="terms"></div>
              <h4 className="text-[1.4rem] bg-white top-24 py-4 sticky sm:text-[2rem] font-manrope font-medium leading-tight mt-12 mb-8">
                11. {t("termExplain.title")}
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("termExplain.11")}{" "}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                11.1 - {t("termExplain.11-1-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("termExplain.11-1")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                11.2 - {t("termExplain.11-2-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("termExplain.11-2")}
              </p>
              <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                11.3 - {t("termExplain.11-3-title")}
              </h5>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                {t("termExplain.11-3")}
              </p>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                <br />
                <br />
                {t("protected")}
                <br />
                <span dangerouslySetInnerHTML={{ __html: t("source") }}></span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["privacy", "common"])),
    },
  };
}

export default Privacy;
