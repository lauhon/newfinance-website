import Link from "next/link";

type Props = {
  locale: string;
  [rest: string]: any;
};

const LanguageSwitchLink = ({ locale, ...rest }: Props) => {
  return (
    <Link href="/" locale={locale}>
      <button>{locale.toUpperCase()}</button>
    </Link>
  );
};

export default LanguageSwitchLink;
