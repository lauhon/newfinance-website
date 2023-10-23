import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import CallToActionArea from "~/components/home/cta";
import FAQ from "~/components/home/faq";
import Features from "~/components/home/features";
import Future from "~/components/home/problems/future";
import Inflation from "~/components/home/problems/inflation";
import Qualities from "~/components/home/qualities/qualities";
import Safety from "~/components/home/safety";
import Splash from "~/components/home/splash";
import TechnologyArea from "~/components/home/technology";
import VideoArea from "~/components/home/video";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";
import ButtonArrow from "~/components/shared/buttons/button-arrow";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Header banner={true} />
      <Splash />
      <VideoArea />
      <div id="darkBackground" className="bg-white">
        <Inflation />
        <Future />
        <Features />

        <Qualities />
        <Safety />
        <TechnologyArea />

        <div className="bg-white">
          <FAQ />
          <CallToActionArea />
          <Footer />
        </div>
      </div>
      <Banner />
    </Layout>
  );
};

const Banner = () => {
  const { i18n } = useTranslation("home");
  const [showBannerAlpha, setShowBannerAlpha] = useState(true);

  return (
    <>
      {showBannerAlpha && (
        <div className="fixed flex space-y-4 lg:space-y-0 lg:space-x-8 align-middle flex-col lg:flex-row lg:left-1/2 lg:-translate-x-1/2 z-50 bg-white mx-8 lg:mx-0 px-6 py-8 lg:py-4 rounded-3xl bottom-8 shadow-2xl">
          <div className="flex lg:w-[400px] font-manrope text-sm font-semibold">
            <Trans i18nKey="layout.banner" />
          </div>
          <div className="flex space-y-4 md:space-y-0 md:space-x-8 flex-col md:flex-row">
            <div className="flex">
              <ButtonArrow
                color="#EEF1F5"
                text={i18n.language == "en" ? "Ok" : "Ok"}
                inverted={true}
                icon="Check"
                onClick={() => setShowBannerAlpha(false)}
              />
            </div>
            <div className="flex">
              <ButtonArrow
                text={
                  i18n.language == "en" ? "Notify me" : "Benachrichtige mich"
                }
                icon="ArrowRight"
                href="register"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

export default Home;
