import { Trans, useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import bgBitcoin from "../../public/images/home/bg-bitcoin.png";
import bgLightning from "../../public/images/home/bg-lightning.png";

import { fetchBitcoinData } from "~/services/market-data/bitcoin-data-service";

import Image from "next/image";
import BabyText from "../shared/text/baby-text";

const TechnologyArea = () => {
  const { t } = useTranslation("common");

  const bitcoinImage = require("~/public/images/home/bitcoin.png");

  const [eurRate, setEurRate] = useState(0);
  const prevEurRate = useRef<number>(0);
  const [change, setChange] = useState(0);

  const [key, setKey] = useState(0); // State für den Key, der das Re-Rendering auslöst

  useEffect(() => {
    fetchDataAndLog();
    const interval = setInterval(() => {
      fetchDataAndLog();
    }, 10000); // 10 Sekunden

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ch = eurRate - prevEurRate.current;
    if (ch != 0 && prevEurRate.current != 0) {
      setChange(change + ch);
    }
    prevEurRate.current = eurRate;
  }, [eurRate]);

  useEffect(() => {
    // Füge das setInterval hinzu, um den key-State alle 1-5 Sekunden zufällig zu erhöhen
    const intervalDot = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, getRandomInt(1000, 5000));

    return () => clearInterval(intervalDot);
  });

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const fetchDataAndLog = async () => {
    try {
      const data = await fetchBitcoinData();
      // Überprüfe, ob data.rates nicht undefined ist, bevor auf data.rates.EUR zugegriffen wird
      if (data.data.rates && data.data.rates.EUR) {
        const newEurRateValue = parseFloat(data.data.rates.EUR);

        setEurRate(newEurRateValue); // Setze den formatierten EUR-Wert in die State-Variable
        setKey((prevKey) => prevKey + 1);
      } else {
        console.error("EUR rate not found in the API response.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const formatNumberWithK = (num: number) => {
    const roundedNum = Math.round(num * 10) / 10; // Auf eine Nachkommastelle runden
    if (roundedNum >= 1000) {
      // Wenn die Zahl größer oder gleich 1000 ist, füge "k" hinzu und teile durch 1000
      return (roundedNum / 1000).toFixed(1) + "k";
    } else {
      // Ansonsten gib die Zahl ohne Änderungen zurück
      return roundedNum.toString();
    }
  };

  const flashingStyle = {
    animation: `flashing 1s linear`, // Füge den State key als Animation hinzu
  };

  return (
    <section className="flex transition-all items-center px-6 md:px-14 lg:px-28 md:pt-32 md:pb-32 pt-16 pb-16 flex-col space-y-8 md:space-y-16">
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
            <div className="flex flex-row items-center gap-1" key={key}>
              <div
                className="flashing rounded-full w-1 h-1 bg-[#83EA99] opacity-0"
                style={{ backgroundColor: change >= 0 ? "#83EA99" : "#FF6A6A" }}
              ></div>
              {eurRate ? (
                <span className="text-white font-medium font-manrope text-4xl">
                  {formatNumberWithK(eurRate)}
                </span>
              ) : (
                <span className="text-white font-medium font-manrope text-4xl">
                  0.0k
                </span>
              )}
            </div>
            <span
              className="text-[#82EA99] font-medium font-manrope text-xs"
              style={{ color: change >= 0 ? "#83EA99" : "#FF6A6A" }}
            >
              {change > 0 ? "+" : ""}
              {change.toFixed(2)}€
            </span>
          </div>
          <div>
            <BabyText text="BITCOIN" color="#EC5D2A" />
            <h2 className="font-manrope font-regular text-white text-xl mt-1">
              We don´t bet, we stack
            </h2>
            <p className="font-manrope font-regular text-[#818287] text-xl mt-1">
              No high risk chasing for the next memecoin. Just. Bitcoin.
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes flashing {
            0% {
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          .flashing {
            animation: flashing 0.7s ease-in;
          }
        `}
      </style>
    </section>
  );
};

export default TechnologyArea;
