import { Trans, useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import bgBitcoin from "../../public/images/home/bg-bitcoin.png";
import bgLightning from "../../public/images/home/bg-lightning.png";

import Image from "next/image";
import BabyText from "../shared/text/baby-text";

const TechnologyArea = () => {
  const { t } = useTranslation("common");

  const [backgroundColor, setBackgroundColor] = useState("#FAFAFA");
  const colorRef = useRef(null);

  const bitcoinImage = require("~/public/images/home/bitcoin.png");

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
      className="flex transition-all items-center px-6 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 flex-col space-y-8 md:space-y-16"
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
      <div className="flex justify-center items-center flex-col md:flex-row w-[1000px] max-w-full min-h-[500px] space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex flex-col justify-end w-full md:w-[54%] bg-[#16181D] border-[#2C303A] border-1 rounded-2xl min-h-[500px] p-6 gap-4">
          <div
            className="flex flex-col min-h-[320px] w-full"
            style={{
              backgroundImage: `url(${bgLightning.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundPositionY: "center",
            }}
          ></div>
          <div>
            <BabyText text="LIGHTNING NETWORK" />
            <h2 className="font-manrope font-regular text-white text-xl mt-1">
              Saving on every transaction
            </h2>
            <p className="font-manrope font-regular text-[#818287] text-xl mt-1">
              Compared to other networks - by using lightning - you safe up to
              99% payment fees.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end w-full md:w-[46%] bg-[#16181D] border-[#2C303A] border-1 rounded-2xl min-h-[500px] p-6 gap-4">
          <div
            className="flex flex-col min-h-[320px] w-full justify-center items-center"
            style={{
              backgroundImage: `url(${bgBitcoin.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundPositionY: "bottom",
            }}
          >
            <Image src={bitcoinImage} alt="Dark Bitcoin" className="w-28" />
            <div className="flex flex-row items-center gap-1">
              <div className="rounded-full w-1 h-1 bg-[#82EA99]"></div>
              <span className="text-white font-medium font-manrope text-4xl">
                27.1k
              </span>
            </div>
            <span className="text-[#82EA99] font-medium font-manrope text-xs">
              +0.8k
            </span>
          </div>
          <div>
            <BabyText text="BITCOIN" color="#EC5D2A" />
            <h2 className="font-manrope font-regular text-white text-xl mt-1">
              We don't bet, we stack
            </h2>
            <p className="font-manrope font-regular text-[#818287] text-xl mt-1">
              No high risk chasing for the next memecoin. Just. Bitcoin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyArea;
