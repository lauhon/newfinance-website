import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Splash from "~/components/home/splash";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Header />
      <Splash />
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
