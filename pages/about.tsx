import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FooterLight from "~/components/layout/footer-light";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const About = () => {
  return (
    <Layout>
      <Header line={true} />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44 pt-16 flex-col items-center">
        <div className="flex flex-col md:flex-row mt-28">
          <div>
            <p className="text-[#403C3F] font-inter font-normal text-sm mt-1 w-1/2">
              The company
            </p>
            <h1
              id="first-section"
              className="text-[2rem] sm:text-[3rem] font-manrope font-semibold leading-tight tracking-tight mt-2"
            >
              A professional team of hard workers.
            </h1>
          </div>
          <div className="pl-0 md:pl-16 lg:pl-32">
            <p className="text-[#4e4e50] font-inter font-normal text-base mt-6 ">
              Computers used to be magical. But much of that magic has been lost
              over time, replaced by subpar tools and practices that slow teams
              down and hold great work back.
            </p>
            <p className="text-[#4e4e50] font-inter font-normal text-base mt-6">
              Frustrated with building and managing software projects in
              high-growth companies ourselves, we founded a company to build
              something better.
            </p>
            <p className="text-[#4e4e50] font-inter font-normal text-base mt-6">
              We named it Linear to signify progress.
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
            “We got a Glide app out to a few hundred drivers with literally two
            hours of effort. Building this in our native app would’ve taken
            weeks.”
          </h2>
          <p className="text-[#403C3F] font-inter font-normal text-sm mt-3">
            Laurenz, Founder NewFinance
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-32 md:mt-44 mb-32 w-full justify-between">
          <div className="w-full sm:w-2/3 md:w-[320px] mb-12 md:mb-0">
            <h3 className="text-black font-inter font-medium text-base">
              Why NewFinance matters
            </h3>
            <p className="text-[#4e4e50] font-inter font-normal text-base">
              Maximaze your budget by creating the tools you need at a fraction
              of the cost of traditional development.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="border-l-1 pl-4 md:ml-16">
              <p className="text-black font-inter font-medium text-2xl">
                $100,000
              </p>
              <p className="text-[#414146] font-inter font-normal text-sm mt-6">
                saved each year
              </p>
              <p className="text-black font-inter font-medium text-sm">
                TeechnikFP
              </p>
            </div>
            <div className="border-l-1 pl-4 mt-12 sm:mt-0 sm:ml-16">
              <p className="text-black font-inter font-medium text-2xl">
                $50,000
              </p>
              <p className="text-[#414146] font-inter font-normal text-sm mt-6">
                saved each year
              </p>
              <p className="text-black font-inter font-medium text-sm">
                Shelf Enginge
              </p>
            </div>
            <div className="border-l-1 pl-4 mt-12 sm:mt-0 sm:ml-16">
              <p className="text-black font-inter font-medium text-2xl">600+</p>
              <p className="text-[#414146] font-inter font-normal text-sm mt-6">
                employees managed
              </p>
              <p className="text-black font-inter font-medium text-sm">
                TeechnikFP
              </p>
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

export default About;
