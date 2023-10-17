import { Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import * as Icon from "react-feather";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const Contact = () => {
  return (
    <Layout>
      <Header line={true} />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44 pt-16 flex-col">
        <div className="mt-28 mb-28">
          <span className="font-manrope font-semibold text-xs text-[#4e4e50]">
            <Trans i18nKey="contact.headline_addition" />
          </span>
          <h1
            id="first-section"
            className="text-[2.2rem] sm:text-[3rem] font-manrope font-semibold leading-tight mt-2"
          >
            <Trans i18nKey="contact.headline" />
          </h1>
          <div className="flex flex-col sm:flex-row gap-y-8 gap-x-6 mt-28">
            <div className="flex flex-col gap-3 border-1 p-6 rounded-lg bg-white sm:w-[350px]">
              <div className="w-fit mb-12">
                <div className=" p-2.5 border-1 rounded-lg border-gray-300">
                  <Icon.MessageCircle size={17} />
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="font-manrope font-semibold text-base leading-6 lg:w-5/6 mb-1">
                  <Trans i18nKey="contact.subheadline_founders" />
                </h5>
                <p className="font-manrope text-medium text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-3">
                  <Trans i18nKey="contact.text_founders" />
                </p>
                <div>
                  <Link
                    href={`/login`}
                    className="flex p-3 text-center bg-[#25D366] hover:opacity-80 font-manrope font-medium rounded justify-center transition-all duration-200 text-white text-sm tracking-tight mt-7"
                  >
                    <Trans i18nKey="contact.button_chat" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 border-1 p-6 rounded-lg bg-white sm:w-[350px]">
              <div className="w-fit mb-12">
                <div className=" p-2.5 border-1 rounded-lg border-gray-300">
                  <Icon.Mail size={17} />
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="font-manrope font-semibold text-base leading-6 lg:w-5/6 mb-1">
                  <Trans i18nKey="contact.subheadline_help" />
                </h5>
                <p className="font-manrope text-medium text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-3">
                  <Trans i18nKey="contact.text_help" />
                </p>
                <div>
                  <Link
                    href={`/login`}
                    className="flex p-3 text-center bg-[#111726] hover:opacity-80 font-manrope font-semibold rounded justify-center transition-all duration-200 text-white text-sm tracking-tight mt-7"
                  >
                    <Trans i18nKey="contact.button_help" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-8 gap-x-2 sm:gap-x-6 mt-28">
            <div className="flex flex-col gap-3 pb-6 sm:p-6 sm:w-[350px]">
              <div className="flex flex-col">
                <h5 className="font-manrope font-semibold text-base leading-6 lg:w-5/6 mb-2">
                  <Trans i18nKey="contact.heading_github" />
                </h5>
                <p className="font-manrope text-medium text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-2">
                  <Trans i18nKey="contact.text_github" />
                </p>
                <div className="flex">
                  <Link
                    href={`https://github.com`}
                    target="_blank"
                    className="flex items-center hover:opacity-80 font-manrope font-medium transition-all duration-200 text-[#8a8f98] text-sm tracking-tight hover:bg-[#EAEDF1] hover:text-gray-600 py-1 px-2 ml-[-0.5rem] rounded-md"
                  >
                    <Trans i18nKey="contact.link_github" />
                    <Icon.ArrowUpRight
                      size="14"
                      color="#8a8f98"
                      className="ml-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-6 sm:p-6 sm:w-[350px]">
              <div className="flex flex-col">
                <h5 className="font-manrope font-semibold text-base leading-6 lg:w-5/6 mb-2">
                  <Trans i18nKey="contact.heading_x" />
                </h5>
                <p className="font-manrope text-medium text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-2">
                  <Trans i18nKey="contact.text_x" />
                </p>
                <div className="flex">
                  <Link
                    href={`https://twitter.com`}
                    target="_blank"
                    className="flex items-center hover:opacity-80 font-manrope font-medium transition-all duration-200 text-[#8a8f98] text-sm tracking-tight hover:bg-[#EAEDF1] hover:text-gray-600 py-1 px-2 ml-[-0.5rem] rounded-md"
                  >
                    <Trans i18nKey="contact.link_x" />
                    <Icon.ArrowUpRight
                      size="14"
                      color="#8a8f98"
                      className="ml-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:p-6 sm:w-[350px]">
              <div className="flex flex-col">
                <h5 className="font-manrope font-semibold text-base leading-6 lg:w-5/6 mb-2">
                  <Trans i18nKey="contact.heading_medium" />
                </h5>
                <p className="font-manrope text-medium text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-2">
                  <Trans i18nKey="contact.text_medium" />
                </p>
                <div className="flex">
                  <Link
                    href={`https://medium.com`}
                    target="_blank"
                    className="flex items-center hover:opacity-80 font-manrope font-medium transition-all duration-200 text-[#8a8f98] text-sm tracking-tight hover:bg-[#EAEDF1] hover:text-gray-600 py-1 px-2 ml-[-0.5rem] rounded-md"
                  >
                    <Trans i18nKey="contact.link_medium" />
                    <Icon.ArrowUpRight
                      size="14"
                      color="#8a8f98"
                      className="ml-1"
                    />
                  </Link>
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
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

export default Contact;
