import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const About = () => {
  return (
    <Layout>
      <Header dark={false} />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44 pt-16 flex-col bg-[#060606]">
        <div className="mt-28">
          <span className="font-inter text-xs text-[#4e4e50]">
            UPDATED JUL 23, 2023
          </span>
          <h1
            id="first-section"
            className="text-[2.2rem] sm:text-[3rem] text-white font-manrope font-regular leading-tight mt-2"
          >
            The magic of finance
          </h1>
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
