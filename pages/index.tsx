import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";
import LanguageSwitchers from "~/components/shared/language/language-switchers";
import WaitlistButton from "~/components/shared/waitlist-button";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Header />

      {t("example.useTranslation")}
      <WaitlistButton />
      <LanguageSwitchers />

      <Trans i18nKey="example.transTag">This is a translation tag</Trans>
      <main className="space-y-24 bg-white pb-8"></main>
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
