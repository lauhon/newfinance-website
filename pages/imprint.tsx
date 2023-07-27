import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import FooterLight from "~/components/layout/footer-light";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const Imprint = () => {
  const subpoints = [
    "intro",
    "field",
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

  const handleSubpointClick = (subpoint: any) => {
    setActiveSubpoint(subpoint);
    const element = document.getElementById(subpoint);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArticleScroll = () => {
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
    window.addEventListener("scroll", handleArticleScroll);
    return () => {
      window.removeEventListener("scroll", handleArticleScroll);
    };
  }, []);

  useEffect(() => {
    const article = document.getElementById("article");
    const handleManualScroll = () => {
      handleArticleScroll();
    };

    if (article) {
      article.addEventListener("scroll", handleManualScroll);
    }
    return () => {
      if (article) {
        article.removeEventListener("scroll", handleManualScroll);
      }
    };
  }, []);

  return (
    <Layout>
      <Header />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44 pt-16 flex-col">
        <div className="mt-28">
          <span className="font-inter text-xs text-[#4e4e50]">
            UPDATED JUL 23, 2023
          </span>
          <h1
            id="first-section"
            className="text-[2.2rem] sm:text-[3rem] font-manrope font-regular leading-tight mt-2"
          >
            Imprint
          </h1>
          <div className="grid grid-cols-4 mt-28 col-auto gap-6 mb-32">
            <div id="textArea" className="col-span-4 sm:ml-6 lg:ml-0">
              <h4
                id="intro"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-regular leading-tight mb-8"
              >
                1. Information nach § 5 E-Commerce-Gesetz
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6  text-[#4e4e50]">
                NewFinance GmbH i.G.
                <br />
                Stellvertretend: Laurenz Honauer IT
              </p>
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:gap-16">
                  <div className="flex-1">
                    <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                      Firmensitz / Kontakt
                    </h5>
                    <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                      Kalvarienberggasse 4/7, 1170 Wien
                      <br />
                      Tel.: +43 676 411 77 13
                      <br />
                      E-Mail: info@superlight.me
                    </p>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                      Unternehmensgegenstand
                    </h5>
                    <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                      Dienstleistungen in der automatischen Datenverarbeitung
                      und Informationstechnik
                    </p>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                      UID-Nummer
                    </h5>
                    <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                      ATU78602558
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-16">
                  <div className="flex-1">
                    <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                      GLN
                    </h5>
                    <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                      9110032667421
                    </p>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                      GISA{" "}
                    </h5>
                    <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                      35301592
                    </p>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                      Geschäftsführer
                    </h5>
                    <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                      Laurenz Honauer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterLight />
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

export default Imprint;
