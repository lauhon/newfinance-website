import { Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const About = () => {
  return (
    <Layout>
      <Header line={true} />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44 pt-16 flex-col items-center">
        <div className="flex flex-col md:flex-row mt-28">
          <div>
            <p className="text-[#403C3F] font-manrope font-semibold text-sm mt-1 w-1/2">
              <Trans i18nKey="about.headline_addition" />
            </p>
            <h1
              id="first-section"
              className="text-[2rem] sm:text-[3rem] font-manrope font-semibold leading-tight tracking-tight mt-2"
            >
              <Trans i18nKey="about.headline" />
            </h1>
          </div>
          <div className="pl-0 md:pl-16 lg:pl-32 mt-4">
            <p className="text-[#4e4e50] font-manrope font-medium text-sm mt-6 ">
              <Trans i18nKey="about.headline_text_1" />
            </p>
            <p className="text-[#4e4e50] font-manrope font-medium text-sm mt-6">
              <Trans i18nKey="about.headline_text_2" />
            </p>
            <p className="text-[#4e4e50] font-manrope font-medium text-sm mt-6">
              <Trans i18nKey="about.headline_text_3" />
            </p>
          </div>
        </div>
        <div
          className="mt-32 md:mt-44 text-center rounded-xl px-6 md:px-32 py-24 border-1"
          style={{
            background:
              "conic-gradient(from 90deg at 74% 59%, rgba(250, 250, 250, 1) 0%, rgba(213, 148, 253, 0.25) 11%, rgba(213, 148, 253, 0.34) 39%, rgba(250, 250, 250, 1) 49%)",
          }}
        >
          <h2 className="text-[2rem] sm:text-[2.5rem] font-manrope font-semibold leading-tight tracking-tight">
            <Trans i18nKey="about.citation" />
          </h2>
          <p className="text-[#403C3F] font-ibm font-medium text-base mt-3">
            <Trans i18nKey="about.citation_subline" />
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-32 md:mt-44 mb-32 w-full justify-between">
          <div className="w-full sm:w-2/3 md:w-[320px] mb-12 md:mb-0">
            <h3 className="text-black font-manrope font-semibold text-base">
              <Trans i18nKey="about.subheadline" />
            </h3>
            <p className="text-[#4e4e50] font-manrope font-medium text-sm">
              <Trans i18nKey="about.subheadline_text" />
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:ml-24">
            <div className="border-l-1 pl-4 md:ml-16">
              <p className="text-black font-manrope font-semibold text-2xl">
                +420 Mio.
              </p>
              <p className="text-[#4e4e50] font-manrope font-semibold text-sm mt-4">
                <Trans i18nKey="about.fact_1" />
              </p>
            </div>
            <div className="border-l-1 pl-4 mt-12 sm:mt-0 sm:ml-16">
              <p className="text-black font-manrope font-semibold text-2xl">
                50 %
              </p>
              <p className="text-[#4e4e50] font-manrope font-semibold text-sm mt-4">
                <Trans i18nKey="about.fact_2" />
              </p>
            </div>
            <div className="border-l-1 pl-4 mt-12 sm:mt-0 sm:ml-16">
              <p className="text-black font-manrope font-semibold text-2xl">
                $541 billion
              </p>
              <p className="text-[#4e4e50] font-manrope font-semibold text-sm mt-4">
                <Trans i18nKey="about.fact_3" />
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
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

export default About;
