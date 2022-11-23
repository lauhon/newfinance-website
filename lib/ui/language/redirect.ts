import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { detector as languageDetector } from "./languageDetector";

export const useRedirect = (to?: string): ReactNode => {
  const router = useRouter();
  to = to || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to && to.startsWith("/" + detectedLng) && router.route === "/404") {
      // prevent endless loop
      router.replace("/" + detectedLng + router.route);
      return;
    }

    if (detectedLng && languageDetector.cache) languageDetector.cache(detectedLng);

    router.replace("/" + detectedLng + to);
  });

  return null;
};

export const Redirect = () => {
  useRedirect();
  return null;
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to: string) => () => {
  useRedirect(to);
  return null;
};
