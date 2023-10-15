import { Check } from "lucide-react";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef } from "react";
import bg from "~/public/images/BackgroundSafety.png";

const Safety = () => {
  const { t } = useTranslation("common");
  const safetyGraph = require("~/public/images/safetyGraph.png");

  const colorRef = useRef(null);

  useEffect(() => {
    const darkBackground = document.getElementById("darkBackground");
    if (darkBackground === null) {
    } else {
      const handleIntersect = (entries: any[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const handleScroll = () => {
              const scrollPosition = window.scrollY;
              const threshold = entry.target.offsetTop - 500; // Schwellenwert basierend auf der Position des div-Elements
              const maxScroll = 100; // Bereich, über den der Farbwechsel stattfindet

              if (scrollPosition > threshold) {
                const scrollDiff = scrollPosition - threshold;
                const opacity = Math.min(scrollDiff / maxScroll, 1); // Interpolieren zwischen 0 und 1

                const startColor = [255, 255, 255]; // Startfarbe in RGB-Werten (hier: #FFFFFF)
                const endColor = [12, 13, 17]; // Endfarbe in RGB-Werten (hier: #0C0D11)

                const interpolatedColor = startColor.map(
                  (startValue, index) => {
                    const endValue = endColor[index];
                    const interpolatedValue = Math.round(
                      startValue - (startValue - endValue) * opacity
                    );
                    return interpolatedValue;
                  }
                );

                const newColor = `rgb(${interpolatedColor[0]}, ${interpolatedColor[1]}, ${interpolatedColor[2]})`;
                darkBackground.style.backgroundColor = newColor;
                //document.body.style.backgroundColor = newColor;
                //setBackgroundColor(newColor);
              } else {
                darkBackground.style.backgroundColor = "#FFFFFF";
                //document.body.style.backgroundColor = "#FAFAFA";
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
        darkBackground.style.backgroundColor = "#FFFFFF";
      };
    }
  }, []);

  return (
    <section
      ref={colorRef}
      className="flex flex-col items-center px-4 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 space-y-8 md:space-y-16"
    >
      <div className="text-left  w-[1000px] max-w-full">
        <h2 className="text-[2rem] sm:text-[2.4rem] font-ibm font-semibold leading-tight mt-2 text-white">
          <Trans i18nKey="safety.headline_1" />
          <br />
          <span className="text-[#7D7E81]">
            <Trans i18nKey="safety.headline_2" />
          </span>
        </h2>
        <p className=" text-base font-manrope font-medium text-[#7D7E81] tracking-tighty mt-4">
          <Trans i18nKey="safety.headline_text" />
        </p>
      </div>
      <div
        className="flex flex-col-reverse lg:flex-row  items-start lg:items-center lg:space-x-8 py-16 px-6 sm:px-8 md:px-16 rounded-2xl w-[1000px] max-w-full min-h-[500px]"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: "bottom",
        }}
      >
        <div className="flex-2">
          <h2 className="text-[1.9rem] sm:text-[2.3rem] font-ibm font-semibold leading-tight tracking-wide text-white">
            <Trans i18nKey="safety.subheadline" />
          </h2>
          <p className=" text-base font-manrope font-medium text-[#7D7E82] mt-4">
            <Trans i18nKey="safety.text" />
          </p>
          <div className="flex flex-col mt-4 items-start md:items-start">
            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="black" />
                </div>
                <span>
                  <Trans i18nKey="safety.benefit1_1" />
                  <span className="text-[#7D7E82]">
                    <Trans i18nKey="safety.benefit1_2" />
                  </span>
                </span>
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#53545B] mt-2"></div>
            </div>

            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="black" />
                </div>
                <span>
                  <Trans i18nKey="safety.benefit2_1" />
                  <span className="text-[#7D7E82]">
                    <Trans i18nKey="safety.benefit2_2" />
                  </span>
                </span>
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#53545B] mt-2"></div>
            </div>

            <div className="mt-2">
              <span className="flex flex-row items-center text-base font-manrope font-medium text-white">
                <div className="flex w-4 h-4 bg-white rounded-full items-center justify-center mr-2">
                  <Check size={8} color="black" />
                </div>
                <span>
                  <Trans i18nKey="safety.benefit3_1" />
                  <span className="text-[#7D7E82]">
                    <Trans i18nKey="safety.benefit3_2" />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4">
          <Image
            src={safetyGraph}
            alt="Graph about safety and Bitcoin"
            className="pb-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Safety;
