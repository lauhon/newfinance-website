import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FooterLight from "~/components/layout/footer-light";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const About = () => {
  return (
    <Layout>
      <Header line={true} />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44 pt-16 flex-col items-center">
        <div className="mt-28 mb-28">
          <h1
            id="first-section"
            className="text-[2rem] sm:text-[3rem] font-manrope font-semibold leading-tight tracking-tight mt-2"
          >
            We build the technology for using better
            <br />
            and independant money
          </h1>
          <p className="text-[#757679] font-inter font-normal text-base mt-1 w-1/2">
            Why we do what we do
          </p>
          <p className="text-[#4e4e50] font-inter font-normal text-base mt-6 w-2/3">
            Computers used to be magical. But much of that magic has been lost
            over time, replaced by subpar tools and practices that slow teams
            down and hold great work back.
          </p>
          <p className="text-[#4e4e50] font-inter font-normal text-base mt-6 w-1/2">
            Frustrated with building and managing software projects in
            high-growth companies ourselves, we founded a company to build
            something better.
          </p>
          <p className="text-[#4e4e50] font-inter font-normal text-base mt-6 w-1/2">
            We named it Linear to signify progress.
          </p>
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
