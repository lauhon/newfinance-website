import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FooterLight from "~/components/layout/footer-light";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";
//flex flex-col gap-4 w-1/4 text-xs font-inter text-[#464647] sticky top-0
const Contact = () => {
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
            Contact
          </h1>
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

export default Contact;
