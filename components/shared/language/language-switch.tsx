import Link from "next/link";
import { useRouter } from "next/router";
import { detector as languageDetector } from "~/lib/ui/language/languageDetector";

type Props = {
  locale: string;
  [rest: string]: any;
};

const LanguageSwitchLink = ({ locale, ...rest }: Props) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;

  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }

    pName = pName.replace(`[${k}]`, router.query[k] as string);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link href={href} onClick={() => languageDetector.cache && languageDetector.cache(locale)}>
      {locale.toUpperCase()}
    </Link>
  );
};

export default LanguageSwitchLink;
