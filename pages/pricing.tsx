import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import * as Icon from "react-feather";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import Layout from "~/components/layout/layout";
import { default as bgCard } from "~/public/images/bg-card.png";
import iconStars from "~/public/images/stars-mica.png";

const Pricing = () => {
  return (
    <Layout>
      <Header line={true} />
      <section className="flex px-4 md:px-14 lg:px-28 xl:px-44  pt-16 flex-col">
        <div className="mt-16 mb-32 flex flex-col items-center overflow-hidden">
          <h1
            id="first-section"
            className="text-[3rem] sm:text-[3.6rem] font-manrope font-normal leading-tight mt-2"
          >
            Pricing
          </h1>

          <div
            className="flex flex-col-reverse sm:flex-row justify-center xl:w-4/5 max-w-[800px] mt-16 gap-6"
            style={{ perspective: "3000px" }}
          >
            <Cardy />
            <div className="bg-white border-1 rounded-xl flex-1 py-12 px-8 overflow-hidden relative">
              <div className="banner">
                <p className="font-inter font-normal text-white">
                  Limited Time
                </p>
              </div>
              <h3 className="text-black font-manrope font-semibold tracking-tight text-[1.3rem] leading-tight">
                Early Access Plan
              </h3>
              <div className="flex flex-row gap-2 items-baseline font-inter font-semibold mt-4">
                <span className="text-[3rem]">$0</span>
                <span className="text-[#757679] text-sm">for lifetime</span>
              </div>
              <p className="font-inter text-[#757679] text-sm mt-4">
                Our strong plan, with all Beta features included.
              </p>
              <Link
                href={`/login`}
                className="flex p-3 text-center bg-[#111726] hover:opacity-80 font-inter font-normal rounded justify-center transition-all duration-200 cursor-default text-white text-sm tracking-tight mt-7"
              >
                Get started
              </Link>
              <div className="w-full h-[1px] bg-gradient-to-r from-white via-[#53545B] mt-7 mb-7 opacity-20"></div>
              <div>
                <h3 className="font-manrope font-medium text-black text-sm tracking-tight">
                  Features
                </h3>
                <div className="flex flex-row gap-1 items-center mt-2">
                  <Icon.Check color="#4C3EF7" size="12" />
                  <span className="font-inter font-normal text-[#444A5F] text-sm">
                    Access to your bank-like Bitcoin account
                  </span>
                </div>
                <div className="flex flex-row gap-1 items-center mt-2">
                  <Icon.Check color="#4C3EF7" size="12" />
                  <span className="font-inter font-normal text-[#444A5F] text-sm">
                    Full MPC security protection
                  </span>
                </div>
                <div className="flex flex-row gap-1 items-center mt-2">
                  <Icon.Check color="#4C3EF7" size="12" />
                  <span className="font-inter font-normal text-[#444A5F] text-sm">
                    Unlimited free transactions
                  </span>
                </div>
                <div className="flex flex-row gap-1 items-center mt-2">
                  <Icon.Check color="#4C3EF7" size="12" />
                  <span className="font-inter font-normal text-[#444A5F] text-sm">
                    Priority support
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-manrope font-medium text-[#858694] text-sm tracking-tight">
                  Soon
                </h3>
                <div className="flex flex-row gap-1 items-center mt-2">
                  <Icon.Check color="#858694" size="12" />
                  <span className="font-inter font-normal text-[#444A5F] text-sm">
                    Lightning Network access
                  </span>
                </div>
                <div className="flex flex-row gap-1 items-center mt-2">
                  <Icon.Check color="#858694" size="12" />
                  <span className="font-inter font-normal text-[#444A5F] text-sm">
                    Up to 3 additional subwallets
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-28 max-w-[350px]">
            <div className="flex flex-row gap-3 items-center">
              <Icon.Check color="#4C3EF7" size="28" />
              <span className="font-manrope font-normal text-[#757679] text-base">
                <span className="font-manrope font-medium text-black">
                  Ibans and bank interoperability.{" "}
                </span>
                Live with the ending of beta phase.
              </span>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-white via-[#53545B] mt-7 mb-7 opacity-20"></div>
            <div className="flex flex-row gap-3 items-center">
              <Icon.Check color="#4C3EF7" size="28" />
              <span className="font-manrope font-normal text-[#757679] text-base">
                <span className="font-manrope font-medium text-black">
                  Sending worldwide.{" "}
                </span>
                Nearly instant and with no extra costs.
              </span>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-white via-[#53545B] mt-7 mb-7 opacity-20"></div>
            <div className="flex flex-row gap-3 items-center">
              <Icon.Check color="#4C3EF7" size="28" />
              <span className="font-manrope font-normal text-[#757679] text-base">
                <span className="font-manrope font-medium text-black">
                  Trully your money.{" "}
                </span>
                That can't be controlled or be blocked by others.
              </span>
            </div>
          </div>

          <Link
            href="https://barackobama.medium.com/"
            target="_blank"
            className="flex flex-row-reverse sm:flex-row items-center py-1.5 px-4 rounded-full font-manrope text-base mb-3 border-1 border-[#D5DAE4] hover:border-[#a5a7b3] transition-all duration-500 mt-16"
          >
            <span>All this - 100% compliant with the new MiCA regulation</span>
            <Image
              className="h-[14px] w-auto mr-2 sm:ml-2 rounded-full"
              alt="Climate Change Icon"
              src={iconStars}
            />
          </Link>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

export default Pricing;

const Cardy = () => {
  let bounds;
  const inputRef = useRef();
  const glowRef = useRef();
  const rotateToMouse = (e: any) => {
    bounds = inputRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
      scale3d(1.02, 1.02, 1.02)
      rotate3d(
        ${center.y / 1000},
        ${-center.x / 1000},
        0,
        ${Math.log(distance) * 1.5}deg
      )
    `;
    glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #FFFFFF55,
        #0000000f
      )
    `;
  };
  const removeListener = (e) => {
    inputRef.current.style.transform = "";
    //inputRef.current.style.background = "";
  };
  useEffect(() => {});
  return (
    <Link
      href="/login"
      className=" card bg-[#6528F7] rounded-xl flex-1 py-12 px-8"
      ref={inputRef}
      onMouseLeave={removeListener}
      onMouseMove={rotateToMouse}
      style={{
        backgroundImage: `url(${bgCard.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionY: "bottom",
      }}
    >
      <div ref={glowRef} className="glow" />
      <h2 className="text-white font-manrope font-normal tracking-tight text-[1.8rem] sm:text-[2.1rem] leading-tight">
        Regain Control
        <br />
        <span className="font-bold">With NewFinance.</span>
      </h2>
      <p className="font-inter text-white text-sm mt-5">
        Choose NewFinance as your bank alternative and gain back money that you
        control, not others.
      </p>
      <Icon.ArrowRight color="white" size="28" className="mt-5" />
      <p className="font-inter italic text-white text-sm mt-5 text-center mt-56 relative">
        “With Bitcoin, we fight against fully control- and traceable money that
        is devalued through Inflation every day.”
      </p>
      <style>
        {`
        .cardContainer {
          perspective: 3000px;
        }
        .banner{
          position: absolute;
          transform: rotate(40deg);
          top: 34px;
          right: -40px;
          padding: 5px 50px; 
          background-color: #6528F7;
        }
        .card {
          color: #181a1a;
          border-radius: 0.75rem
          background-size: cover;

          position: relative;

          transition-duration: 300ms;
          transition-property: transform, box-shadow;
          transition-timing-function: ease-out;
          transform: rotate3d(0);

        }

        .card:hover {
          transition-duration: 150ms;
          box-shadow: 0 8px 25px 5px #00000020;
        }

        .card .glow {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;

          border-radius: 0.75rem

          background-image: radial-gradient(circle at 50% -20%, #ffffffff, #0000000f);
        }
        .card:before,
        .card:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          background-repeat: no-repeat;
          opacity: 0.5;
          mix-blend-mode: color-dodge;
          transition: all 0.33s ease;
          border-radius: 0.75rem
        }

        .card:before {
          background-position: 50% 50%;
          background-size: 300% 300%;
          background-image: linear-gradient(
            115deg,
            transparent 0%,
            var(--color1) 25%,
            transparent 47%,
            transparent 53%,
            var(--color2) 75%,
            transparent 100%
          );
          opacity: 1;
          filter: brightness(0.5) contrast(1);
          z-index: 1;
          border-radius: 0.75rem
        }

        .card:after {
          opacity: 1;
          background-image: url("https://assets.codepen.io/13471/sparkles.gif"),
            url(https://assets.codepen.io/13471/holo.png),
            linear-gradient(
              125deg,
              #ff008415 15%,
              #fca40015 30%,
              #ffff0025 40%,
              #00ff8a10 60%,
              #00cfff20 70%,
              #cc4cfa20 85%
            );
          background-position: 50% 50%;
          background-size: 160%;
          background-blend-mode: overlay;
          z-index: 2;
          filter: brightness(1) contrast(1);
          transition: all 0.33s ease;
          mix-blend-mode: color-dodge;
          opacity: 0.4;
          border-radius: 0.75rem
        }

        .card.active:after,
        .card:hover:after {
          filter: brightness(1) contrast(1);
          opacity: 0.8;
          border-radius: 0.75rem
        }


        `}
      </style>
    </Link>
  );
};
