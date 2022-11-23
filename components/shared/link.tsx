import NextLink from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = { children: ReactNode; skipLocaleHandling?: boolean; [rest: string]: any };

const Link = ({ children, skipLocaleHandling, ...rest }: Props) => {
  const router = useRouter();
  const locale = rest.locale || router.query.locale || "";

  let href = rest.href || router.asPath;
  if (href.indexOf("http") === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace("[locale]", locale);
  }

  return (
    <>
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    </>
  );
};

export default Link;
