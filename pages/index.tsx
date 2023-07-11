import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CallToActionArea from "~/components/home/cta";
import FAQ from "~/components/home/faq";
import Qualities from "~/components/home/qualities/qualities";
import RoadmapArea from "~/components/home/roadmap";
import Splash from "~/components/home/splash";
import TechnologyArea from "~/components/home/technology";
import VideoArea from "~/components/home/video";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Header />
      <Splash />
      <VideoArea />
      <Qualities />
      <TechnologyArea />
      <RoadmapArea />
      <FAQ />
      <CallToActionArea />
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

export default Home;
