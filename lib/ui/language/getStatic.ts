import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../../next-i18next.config";

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng: string) => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getI18nProps = async (ctx: any, ns: any = ["common"]): Promise<any> => {
  const locale = ctx?.params?.locale;
  console.log(ctx);
  let props = {
    ...(await serverSideTranslations(locale, ns)),
  };
  return props;
};

export function makeStaticProps(ns = {}) {
  return async function getStaticProps(ctx: any) {
    return {
      props: await getI18nProps(ctx, ns),
    };
  };
}
