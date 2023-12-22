import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const Imprint = () => {
  const { t } = useTranslation("imprint");
  return (
    <Layout>
      <Header line={true} />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44 pt-16 flex-col">
        <div className="mt-28">
          <span className="font-manrope font-semibold text-xs text-[#4e4e50]">
            UPDATED JUL 23, 2023
          </span>
          <h1
            id="first-section"
            className="text-[2.2rem] sm:text-[3rem] font-manrope font-medium leading-tight mt-2"
          >
            {t("title")}
          </h1>
          <div className="grid grid-cols-4 mt-28 col-auto gap-6 mb-32">
            <div id="textArea" className="col-span-4 sm:ml-6 lg:ml-0">
              <h4
                id="intro"
                className="text-[1.4rem] sm:text-[2rem] font-manrope font-medium leading-tight mb-8"
              >
                1. {t("law")}
              </h4>
              <p className="font-inter text-regular text-sm leading-6 lg:w-5/6  text-[#4e4e50]">
                NewFinance GmbH i.G.
                <br />
                {t("repr")}: Laurenz Honauer IT
              </p>
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:gap-16">
                  <div className="flex-1">
                    <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                      {t("contact")}
                    </h5>
                    <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                      Kalvarienberggasse 4/7, 1170 Wien
                      <br />
                      Tel.: +43 676 411 77 13
                      <br />
                      E-Mail:{" "}
                      <a
                        className="underline"
                        href="mailto:hello@getnewfinance.com"
                      >
                        hello@getnewfinance.com
                      </a>
                    </p>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                      {t("object")}
                    </h5>
                    <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50]">
                      {t("objectDesc")}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-manrope font-bold text-sm leading-6 lg:w-5/6 mt-12 mb-4">
                      {t("uid")}
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
                      {t("ceo")}
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
      <Footer />
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["imprint", "common"])),
    },
  };
}

export default Imprint;
