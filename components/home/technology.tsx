import { Trans, useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import BabyText from "../shared/text/baby-text";

const TechnologyArea = () => {
  const { t } = useTranslation("common");

  const [backgroundColor, setBackgroundColor] = useState("#FAFAFA");
  const colorRef = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = entry.target.offsetTop - 700; // Schwellenwert basierend auf der Position des div-Elements
            const maxScroll = 100; // Bereich, über den der Farbwechsel stattfindet

            if (scrollPosition > threshold) {
              const scrollDiff = scrollPosition - threshold;
              const opacity = Math.min(scrollDiff / maxScroll, 1); // Interpolieren zwischen 0 und 1

              const startColor = [250, 250, 250]; // Startfarbe in RGB-Werten (hier: #FAFAFA)
              const endColor = [17, 19, 24]; // Endfarbe in RGB-Werten (hier: #111318)

              const interpolatedColor = startColor.map((startValue, index) => {
                const endValue = endColor[index];
                const interpolatedValue = Math.round(
                  startValue - (startValue - endValue) * opacity
                );
                return interpolatedValue;
              });

              const newColor = `rgb(${interpolatedColor[0]}, ${interpolatedColor[1]}, ${interpolatedColor[2]})`;
              document.body.style.backgroundColor = newColor;
              //setBackgroundColor(newColor);
            } else {
              document.body.style.backgroundColor = "#FAFAFA";
            }
          };

          window.addEventListener("scroll", handleScroll);

          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    if (colorRef.current) {
      observer.observe(colorRef.current);
    }

    return () => {
      if (colorRef.current) {
        observer.unobserve(colorRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={colorRef}
      className="flex transition-all items-center px-2 md:px-14 lg:px-28 pt-32 pb-32 flex-col space-y-16"
    >
      <div className="text-center">
        <BabyText text="PRODUCT" />
        <h2 className="text-[1.6rem] md:text-[2.2rem] text-center font-manrope font-regular leading-tight mt-2 text-white">
          <Trans i18nKey="technology.headline_1" />
          <br />
          <span className="text-[#757679]">
            <Trans i18nKey="technology.headline_2" />
          </span>
        </h2>
      </div>
      <div className="flex justify-center items-center  w-[1000px] max-w-full min-h-[500px] space-x-4">
        <div className="w-[54%] bg-[#16181D] border-[#2C303A] border-1 rounded-2xl min-h-[500px]"></div>
        <div className="w-[46%] bg-[#16181D] border-[#2C303A] border-1 rounded-2xl min-h-[500px]"></div>
      </div>
    </section>
  );
};

export default TechnologyArea;
