import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";
import { getStaticPaths, makeStaticProps } from "~/lib/ui/language/getStatic";

const getStaticProps = makeStaticProps();

const Home = () => {
  return (
    <Layout>
      <Header />

      <main className="space-y-24 bg-white pb-8"></main>
    </Layout>
  );
};

export { getStaticPaths, getStaticProps };

export default Home;
