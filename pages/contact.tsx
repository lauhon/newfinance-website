import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import * as Icon from "react-feather";
import FooterLight from "~/components/layout/footer-light";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const Contact = () => {
  return (
    <Layout>
      <Header line={true} />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44 pt-16 flex-col">
        <div className="mt-28 mb-28">
          <span className="font-inter text-xs text-[#4e4e50]">Contact us</span>
          <h1
            id="first-section"
            className="text-[2.2rem] sm:text-[3rem] font-manrope font-regular leading-tight mt-2"
          >
            How can we help?
          </h1>
          <div className="flex flex-col sm:flex-row gap-y-8 gap-x-6 mt-28">
            <div className="flex flex-col gap-3 border-1 p-6 rounded-lg bg-white sm:w-[350px]">
              <div className="w-fit mb-12">
                <div className=" p-2.5 border-1 rounded-lg border-gray-300">
                  <Icon.MessageCircle size={17} />
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="font-manrope font-bold text-base leading-6 lg:w-5/6 mb-1">
                  Chat with Founders
                </h5>
                <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-3">
                  Let&apos;s talk directly with the founders and ask them
                  questions.
                </p>
                <div>
                  <Link
                    href={`/login`}
                    className="flex p-3 text-center bg-[#25D366] hover:opacity-80 font-inter font-normal rounded justify-center transition-all duration-200 text-white text-sm tracking-tight mt-7"
                  >
                    Chat on WhatsApp
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
                <h5 className="font-manrope font-bold text-base leading-6 lg:w-5/6 mb-1">
                  Help & Support
                </h5>
                <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-3">
                  Ask product questions, report problems, or leave feedback.{" "}
                </p>
                <div>
                  <Link
                    href={`/login`}
                    className="flex p-3 text-center bg-[#111726] hover:opacity-80 font-inter font-normal rounded justify-center transition-all duration-200 text-white text-sm tracking-tight mt-7"
                  >
                    Contact support
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-8 gap-x-2 sm:gap-x-6 mt-28">
            <div className="flex flex-col gap-3 p-6 sm:w-[350px]">
              <div className="flex flex-col">
                <h5 className="font-manrope font-bold text-base leading-6 lg:w-5/6 mb-2">
                  Github
                </h5>
                <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-2">
                  We are building community based and full Open-Source.
                </p>
                <div className="flex">
                  <Link
                    href={`https://github.com`}
                    target="_blank"
                    className="flex items-center hover:opacity-80 font-inter font-normal transition-all duration-200 text-[#8a8f98] text-sm tracking-tight hover:bg-[#EAEDF1] hover:text-gray-600 py-1 px-2 ml-[-0.5rem] rounded-md"
                  >
                    See on Github
                    <Icon.ArrowUpRight
                      size="14"
                      color="#8a8f98"
                      className="ml-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6 sm:w-[350px]">
              <div className="flex flex-col">
                <h5 className="font-manrope font-bold text-base leading-6 lg:w-5/6 mb-2">
                  Join the community
                </h5>
                <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-2">
                  Stay up to date with our newest features.
                </p>
                <div className="flex">
                  <Link
                    href={`https://twitter.com`}
                    target="_blank"
                    className="flex items-center hover:opacity-80 font-inter font-normal transition-all duration-200 text-[#8a8f98] text-sm tracking-tight hover:bg-[#EAEDF1] hover:text-gray-600 py-1 px-2 ml-[-0.5rem] rounded-md"
                  >
                    Follow on Twitter
                    <Icon.ArrowUpRight
                      size="14"
                      color="#8a8f98"
                      className="ml-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6 sm:w-[350px]">
              <div className="flex flex-col">
                <h5 className="font-manrope font-bold text-base leading-6 lg:w-5/6 mb-2">
                  Blog on Medium
                </h5>
                <p className="font-inter text-regular text-sm leading-6 lg:w-5/6 text-[#4e4e50] transition-all mb-2">
                  Check out Insights on Finance and better money.
                </p>
                <div className="flex">
                  <Link
                    href={`https://medium.com`}
                    target="_blank"
                    className="flex items-center hover:opacity-80 font-inter font-normal transition-all duration-200 text-[#8a8f98] text-sm tracking-tight hover:bg-[#EAEDF1] hover:text-gray-600 py-1 px-2 ml-[-0.5rem] rounded-md"
                  >
                    Read on Medium
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
